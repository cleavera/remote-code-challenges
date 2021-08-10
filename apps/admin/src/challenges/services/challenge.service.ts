import { Injectable } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { CurrentChallengeMessage, NewUserMessage, StartChallengeMessage } from '@hdc/communication';
import { MessengerService } from '../../collaboration';

@Injectable()
export class ChallengeService {
    public currentChallenge: ChallengeInterface | null = null;
    private _messengerService: MessengerService;

    constructor(messengerService: MessengerService) {
        this._messengerService = messengerService;

        this.init();
    }

    public async init(): Promise<void> {
        (await this._messengerService.subscribeByType(NewUserMessage)).subscribe((message: NewUserMessage) => {
            if (this.currentChallenge !== null) {
                this.broadcastChallenge();
            }
        });
    }

    public broadcastChallenge(): void {
        if (!this.currentChallenge) {
            return;
        }

        this._messengerService.send(new CurrentChallengeMessage(this.currentChallenge.title));
    }

    public startChallenge(challenge: ChallengeInterface): void {
        this.currentChallenge = challenge;
        this._messengerService.send(new StartChallengeMessage(challenge.title));
    }
}
