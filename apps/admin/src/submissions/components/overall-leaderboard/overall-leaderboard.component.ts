import { Component } from '@angular/core';
import { OverallLeaderboardInterface } from '../../interfaces/overall-leaderboard.interface';
import { SubmissionService } from '../../services/submission.service';

@Component({
    selector: 'submission-overall-leaderboard',
    styleUrls: ['./overall-leaderboard.component.css'],
    templateUrl: './overall-leaderboard.component.html'
})
export class OverallLeaderboardComponent {
    public overAllLeaderBoard: OverallLeaderboardInterface | null = null;

    private _submissionService: SubmissionService;

    constructor(submissionService: SubmissionService) {
        this._submissionService = submissionService;

        this._submissionService.overAllLeaderboard.subscribe((overAllLeaderBoard: OverallLeaderboardInterface | null) => {
            this.overAllLeaderBoard = overAllLeaderBoard;
        });
    }
}
