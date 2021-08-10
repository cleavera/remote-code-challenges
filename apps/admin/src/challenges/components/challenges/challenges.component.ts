import { Component, Inject } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { CHALLENGES_TOKEN } from '../../tokens/challenges.token';

@Component({
    selector: 'challenges-list',
    styleUrls: ['./challenges.component.css'],
    templateUrl: './challenges.component.html'
})
export class ChallengesComponent {
    public challenges: Array<ChallengeInterface>;
    public selectedChallenge: ChallengeInterface | null = null;

    constructor(@Inject(CHALLENGES_TOKEN) challenges: Array<ChallengeInterface>) {
        this.challenges = challenges;
    }

    public onSelect(challenge: ChallengeInterface): void {
        this.selectedChallenge = challenge;
    }
}
