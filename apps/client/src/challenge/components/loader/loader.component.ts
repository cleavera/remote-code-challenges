import { Component } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { ChallengeService } from '../../services/challenge.service';

@Component({
    selector: 'challenge-loader',
    styleUrls: ['./loader.component.css'],
    templateUrl: './loader.component.html'
})
export class LoaderComponent {
    public challenge: ChallengeInterface | null = null;

    constructor(challengeService: ChallengeService) {
        challengeService.current$.subscribe((challenge: ChallengeInterface | null) => {
            this.challenge = challenge;
        });
    }
}
