import { Component, Input, OnChanges } from '@angular/core';
import { ResultInterface } from '@hdc/submission';
import { ChallengeInterface, MISSING_NUMBERS_CHALLENGE } from '@hdc/challenges';

@Component({
    selector: 'challenge-challenge',
    styleUrls: ['./challenge.component.css'],
    templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnChanges {
    @Input()
    public challenge!: ChallengeInterface;

    public value: string;
    public result!: Promise<ResultInterface>;
    public panel: string = 'details';

    constructor() {
        this.value = 'function submission(a) {\n\n}';
    }

    public ngOnChanges(): void {
        this.setPanel('details');
        this.value = 'function submission(a) {\n\n}';
    }

    public onSolutionChange(value: string): void {
        this.value = value;
    }

    public setPanel(name: string): void {
        this.panel = name;
    }
}
