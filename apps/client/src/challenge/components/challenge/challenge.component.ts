import { Component } from '@angular/core';
import { ResultInterface } from '@hdc/submission';

import { SubmitService } from '../../../submission';
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
    public result!: ResultInterface;
    private _submitService: SubmitService;

    constructor(submitService: SubmitService) {
        this._submitService = submitService;

        this.value = 'function submission(arr) {\n\n}'
    }

    public onSolutionChange(value: string): void {
        this.value = value;
    }

    public async onSubmit(): Promise<void> {
        this.result = await this._submitService.send(this.value, this.challenge);
    }
}
