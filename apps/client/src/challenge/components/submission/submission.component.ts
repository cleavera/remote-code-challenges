import { Component, Input } from '@angular/core';
import { ChallengeInterface } from '@hackdaychallenges/challenges';
import { ResultInterface } from '@hackdaychallenges/submission';

import { SubmitService } from '../../../submission';

@Component({
    selector: 'challenge-submission',
    styleUrls: ['./submission.component.css'],
    templateUrl: './submission.component.html'
})
export class SubmissionComponent {
    @Input()
    public set challenge(value: ChallengeInterface) {
        this.result = null;

        this._challenge = value;
    }

    @Input()
    public submission!: string;

    public result: Promise<ResultInterface> | null = null;
    private _challenge!: ChallengeInterface;
    private _submitService: SubmitService;

    constructor(submitService: SubmitService) {
        this._submitService = submitService;
    }

    public async onSubmit(): Promise<void> {
        this.result = this._submitService.send(this.submission, this._challenge);
    }

    public async onValidate(): Promise<void> {
        this.result = this._submitService.validate(this.submission, this._challenge);
    }
}
