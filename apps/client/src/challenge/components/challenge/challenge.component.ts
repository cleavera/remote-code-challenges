import { Component } from '@angular/core';
import { ResultInterface } from '@hdc/submission';
import { MISSING_NUMBERS_CHALLENGE } from '../../constants/1 - missing-numbers.challenge';
import { ChallengeInterface } from '../../interfaces/challenge.interface';

@Component({
    selector: 'challenge-challenge',
    styleUrls: ['./challenge.component.css'],
    templateUrl: './challenge.component.html'
})
export class ChallengeComponent {
    public challenge: ChallengeInterface = MISSING_NUMBERS_CHALLENGE;
    public value: string;
    public result!: Promise<ResultInterface>;
    public panel: string = 'details';

    constructor() {
        this.value = 'function submission(arr) {\n\n}';
    }

    public onSolutionChange(value: string): void {
        this.value = value;
    }

    public setPanel(name: string): void {
        this.panel = name;
    }
}
