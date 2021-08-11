import { Injectable } from '@angular/core';
import { SubmissionMessage } from '@hdc/communication';
import { BehaviorSubject, Observable } from 'rxjs';

import { MessengerService } from '../../collaboration';
import { Leaderboard } from '../classes/leaderboard';
import { LeaderboardInterface } from '../interfaces/leaderboard.interface';
import { RecordInterface } from '../interfaces/record.interface';

@Injectable()
export class SubmissionService {
    public submissions: Record<string, Record<string, RecordInterface>>;
    private _leaderBoards: Record<string, BehaviorSubject<LeaderboardInterface>>;
    private _messengerService: MessengerService;

    constructor(messengerService: MessengerService) {
        this._messengerService = messengerService;
        this.submissions = {};
        this._leaderBoards = {};

        this.init();
    }

    public getLeaderboard(challenge: string): Observable<LeaderboardInterface> {
        if (!this._leaderBoards[challenge]) {
            this._leaderBoards[challenge] = new BehaviorSubject<LeaderboardInterface>(new Leaderboard([], [], []));
        }

        return this._leaderBoards[challenge].asObservable();
    }

    public async init(): Promise<void> {
        (await this._messengerService.subscribeByType(SubmissionMessage))
            .subscribe(({
                            data: {
                                user,
                                result,
                                submission,
                                challenge
                            }
                        }: SubmissionMessage) => {

                if (!this.submissions[challenge]) {
                    this.submissions[challenge] = {};
                }

                this.submissions[challenge][user] = {
                    submission,
                    result,
                    user
                };

                this._recalculateLeaderboard(challenge);
            });
    }

    private _recalculateLeaderboard(challenge: string): void {
        if (!this._leaderBoards[challenge]) {
            this._leaderBoards[challenge] = new BehaviorSubject<LeaderboardInterface>(new Leaderboard([], [], []));
        }

        const records: Array<RecordInterface> = Object.values(this.submissions[challenge]);

        this._leaderBoards[challenge].next(Leaderboard.FromRecords(records));
    }
}
