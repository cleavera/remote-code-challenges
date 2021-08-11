import { Component, Input } from '@angular/core';
import { LeaderboardInterface } from '../../interfaces/leaderboard.interface';
import { RecordInterface } from '../../interfaces/record.interface';
import { SubmissionService } from '../../services/submission.service';

@Component({
    selector: 'submission-leaderboard',
    styleUrls: ['./leaderboard.component.css'],
    templateUrl: './leaderboard.component.html'
})
export class LeaderboardComponent {
    public performance: Array<RecordInterface> | null = null;
    public memory: Array<RecordInterface> | null = null;
    public characters: Array<RecordInterface> | null = null;

    @Input()
    public set challenge(challengeName: string) {
        this._submissionService.getLeaderboard(challengeName).subscribe((leaderBoard: LeaderboardInterface) => {
            this.performance = leaderBoard.performance?.slice(0,3) ?? null;
            this.memory = leaderBoard.memory?.slice(0,3) ?? null;
            this.characters = leaderBoard.characters?.slice(0,3) ?? null;
        });
    }

    private _submissionService: SubmissionService;

    constructor(submissionService: SubmissionService) {
        this._submissionService = submissionService;
    }
}
