import { Component, Inject } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { CurrentChallengeMessage, MessageInterface, StartChallengeMessage } from '@hdc/communication';
import { MessengerService } from '../../../collaboration';
import { CHALLENGES_TOKEN } from '../../tokens/challenges.token';

@Component({
    selector: 'challenge-loader',
    styleUrls: ['./loader.component.css'],
    templateUrl: './loader.component.html'
})
export class LoaderComponent {
    public challenge: ChallengeInterface | null = null;

    constructor(messengerService: MessengerService, @Inject(CHALLENGES_TOKEN) challenges: Array<ChallengeInterface>) {
        this._init(messengerService, challenges);
    }

    private async _init(messengerService: MessengerService, challenges: Array<ChallengeInterface>): Promise<void> {
        (await messengerService.subscribeByType(StartChallengeMessage)).subscribe((message: MessageInterface) => {
            this.challenge = challenges.find((challenge: ChallengeInterface) => {
                return challenge.title === message.data.challenge;
            }) ?? null;
        });

        (await messengerService.subscribeByType(CurrentChallengeMessage)).subscribe((message: MessageInterface) => {
            this.challenge = challenges.find((challenge: ChallengeInterface) => {
                return challenge.title === message.data.challenge;
            }) ?? null;
        });
    }
}
