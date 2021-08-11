import { Injectable } from '@angular/core';
import { SubmissionMessage } from '@hackdaychallenges/communication';
import { BehaviorSubject, Observable } from 'rxjs';

import { MessengerService } from '../../collaboration';
import { Leaderboard } from '../classes/leaderboard';
import { LeaderboardInterface } from '../interfaces/leaderboard.interface';
import { OverallLeaderboardInterface } from '../interfaces/overall-leaderboard.interface';
import { RecordInterface } from '../interfaces/record.interface';

@Injectable()
export class SubmissionService {
    public submissions: Record<string, Record<string, RecordInterface>>;
    public overAllLeaderboard: BehaviorSubject<OverallLeaderboardInterface | null>;
    private _leaderBoards: Record<string, BehaviorSubject<LeaderboardInterface>>;
    private _messengerService: MessengerService;

    constructor(messengerService: MessengerService) {
        this._messengerService = messengerService;
        this.submissions = {};
        this._leaderBoards = {};
        this.overAllLeaderboard = new BehaviorSubject<OverallLeaderboardInterface | null>( null);

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

        this._recalculateOverall();
    }

    private _recalculateOverall(): void {
        let overAll: { performance: Record<string, number>, characters: Record<string, number>, memory: Record<string, number> } = {
            performance: {},
            characters: {},
            memory: {}
        };

        for (let leaderboard of Object.values(this._leaderBoards)) {
            leaderboard.value.performance.forEach((record: RecordInterface, index: number) => {
                if (!overAll.performance[record.user]) {
                    overAll.performance[record.user] = 0;
                }

                overAll.performance[record.user] += Math.max(5 - index, 1);
            });

            leaderboard.value.memory.forEach((record: RecordInterface, index: number) => {
                if (!overAll.memory[record.user]) {
                    overAll.memory[record.user] = 0;
                }

                overAll.memory[record.user] += Math.max(5 - index, 1);
            });

            leaderboard.value.characters.forEach((record: RecordInterface, index: number) => {
                if (!overAll.characters[record.user]) {
                    overAll.characters[record.user] = 0;
                }

                overAll.characters[record.user] += Math.max(5 - index, 1);
            });
        }

        const overAllLeaderBoard: OverallLeaderboardInterface = {
            performance: [],
            memory: [],
            characters: []
        };

        for (let user in overAll.performance) {
            if (!overAll.performance.hasOwnProperty(user)) {
                continue;
            }

            overAllLeaderBoard.performance.push({ user, points: overAll.performance[user] });
        }

        for (let user in overAll.memory) {
            if (!overAll.memory.hasOwnProperty(user)) {
                continue;
            }

            overAllLeaderBoard.memory.push({ user, points: overAll.memory[user] });
        }

        for (let user in overAll.characters) {
            if (!overAll.characters.hasOwnProperty(user)) {
                continue;
            }

            overAllLeaderBoard.characters.push({ user, points: overAll.characters[user] });
        }

        overAllLeaderBoard.performance.sort((a, b) => {
            if (a.points < b.points) {
                return 1;
            }

            if (a.points > b.points) {
                return -1;
            }

            return 0;
        });

        overAllLeaderBoard.memory.sort((a, b) => {
            if (a.points < b.points) {
                return 1;
            }

            if (a.points > b.points) {
                return -1;
            }

            return 0;
        });

        overAllLeaderBoard.characters.sort((a, b) => {
            if (a.points < b.points) {
                return 1;
            }

            if (a.points > b.points) {
                return -1;
            }

            return 0;
        });

        this.overAllLeaderboard.next(overAllLeaderBoard)
    }
}
