import { Component, Input } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { ChallengeService } from '../../services/challenge.service';

@Component({
    selector: 'challenges-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    @Input()
    public challenge!: ChallengeInterface;
    private _challengeService: ChallengeService;

    constructor(challengeService: ChallengeService) {
        this._challengeService = challengeService;
    }

    public onStart(): void {
        this._challengeService.startChallenge(this.challenge);
    }
}
