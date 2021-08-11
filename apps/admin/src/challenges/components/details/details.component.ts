import { Component, Input } from '@angular/core';
import { ChallengeInterface } from '@hackdaychallenges/challenges';
import { ChallengeService } from '../../services/challenge.service';

@Component({
    selector: 'challenges-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    @Input()
    public challenge!: ChallengeInterface;

    public get started(): boolean {
        return this.challenge === this._challengeService.currentChallenge;
    }

    private _challengeService: ChallengeService;

    constructor(challengeService: ChallengeService) {
        this._challengeService = challengeService;
    }

    public onStart(): void {
        this._challengeService.startChallenge(this.challenge);
    }
}
