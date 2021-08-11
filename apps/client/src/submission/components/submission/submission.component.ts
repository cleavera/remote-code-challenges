import { Component, Input } from '@angular/core';
import { ResultInterface } from '@hackdaychallenges/submission';

@Component({
    selector: 'submission-submission',
    templateUrl: './submission.component.html',
    styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {
    @Input()
    public resultPromise!: Promise<ResultInterface>;
}
