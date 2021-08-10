import { Component, Input } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { StartChallengeMessage } from '@hdc/communication';
import { MessengerService } from '../../../collaboration';

@Component({
    selector: 'challenges-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    @Input()
    public challenge!: ChallengeInterface;
    private _messengerService: MessengerService;

    constructor(messengerService: MessengerService) {
        this._messengerService = messengerService;
    }

    public onStart(): void {
        this._messengerService.send(new StartChallengeMessage(this.challenge.title));
    }
}
