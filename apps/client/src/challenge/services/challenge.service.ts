import { Inject, Injectable } from '@angular/core';
import { ChallengeInterface } from '@hackdaychallenges/challenges';
import { CurrentChallengeMessage, MessageInterface, StartChallengeMessage } from '@hackdaychallenges/communication';
import { BehaviorSubject } from 'rxjs';
import { MessengerService } from '../../collaboration';
import { CHALLENGES_TOKEN } from '../tokens/challenges.token';

@Injectable()
export class ChallengeService {
    public current$: BehaviorSubject<ChallengeInterface | null> = new BehaviorSubject<ChallengeInterface | null>(null);

    constructor(messengerService: MessengerService, @Inject(CHALLENGES_TOKEN) challenges: Array<ChallengeInterface>) {
        this._init(messengerService, challenges);
    }

    private async _init(messengerService: MessengerService, challenges: Array<ChallengeInterface>): Promise<void> {
        (await messengerService.subscribeByType(StartChallengeMessage)).subscribe((message: MessageInterface) => {
            this.current$.next(challenges.find((challenge: ChallengeInterface) => {
                return challenge.title === message.data.challenge;
            }) ?? null);
        });

        (await messengerService.subscribeByType(CurrentChallengeMessage)).subscribe((message: MessageInterface) => {
            this.current$.next(challenges.find((challenge: ChallengeInterface) => {
                return challenge.title === message.data.challenge;
            }) ?? null);
        });
    }
}
