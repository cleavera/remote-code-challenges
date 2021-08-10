import { Component, Input } from '@angular/core';
import { ResultInterface } from '@hdc/submission';
import { ChallengeInterface } from '@hdc/challenges';

import { SubmitService } from '../../../submission';

@Component({
    selector: 'challenge-submission',
    styleUrls: ['./submission.component.css'],
    templateUrl: './submission.component.html'
})
export class SubmissionComponent {
    @Input()
    public challenge!: ChallengeInterface;

    @Input()
    public submission!: string;

    public result: Promise<ResultInterface> | null = null;
    private _submitService: SubmitService;

    constructor(submitService: SubmitService) {
        this._submitService = submitService;
    }

    public async onSubmit(): Promise<void> {
        this.result = this._submitService.send(this.submission, this.challenge);
    }
}
