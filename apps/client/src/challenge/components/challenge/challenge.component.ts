import { Component } from '@angular/core';
import { SubmitService } from '../../../submission';
import { MISSING_NUMBERS_CHALLENGE } from '../../constants/1 - missing-numbers.challenge';

@Component({
    selector: 'challenge-challenge',
    styleUrls: ['./challenge.component.css'],
    templateUrl: './challenge.component.html'
})
export class ChallengeComponent {
    public value: string;
    private _submitService: SubmitService;

    constructor(submitService: SubmitService) {
        this._submitService = submitService;

        this.value = 'function submission(arr) {\n\n}'
    }

    public onSolutionChange(value: string): void {
        this.value = value;
    }

    public onSubmit(): void {
        this._submitService.send(this.value, MISSING_NUMBERS_CHALLENGE);
    }
}
