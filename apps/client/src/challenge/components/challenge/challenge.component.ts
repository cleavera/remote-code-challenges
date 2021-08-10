import { Component, Input } from '@angular/core';
import { ResultInterface } from '@hdc/submission';
import { ChallengeInterface, MISSING_NUMBERS_CHALLENGE } from '@hdc/challenges';

@Component({
    selector: 'challenge-challenge',
    styleUrls: ['./challenge.component.css'],
    templateUrl: './challenge.component.html'
})
export class ChallengeComponent {
    @Input()
    public challenge!: ChallengeInterface;

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
