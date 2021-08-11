import { Component, Input } from '@angular/core';
import { ResultInterface } from '@hackdaychallenges/submission';

@Component({
    selector: 'submission-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent {
    @Input()
    public result!: ResultInterface | null;
}
