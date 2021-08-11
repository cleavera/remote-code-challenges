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
    public performance: RecordInterface | null = null;
    public memory: RecordInterface | null = null;
    public characters: RecordInterface | null = null;

    @Input()
    public set challenge(challengeName: string) {
        this._submissionService.getLeaderboard(challengeName).subscribe((leaderBoard: LeaderboardInterface) => {
            this.performance = leaderBoard.performance[0] ?? null;
            this.memory = leaderBoard.memory[0] ?? null;
            this.characters = leaderBoard.characters[0] ?? null;
        });
    }

    private _submissionService: SubmissionService;

    constructor(submissionService: SubmissionService) {
        this._submissionService = submissionService;
    }
}
