import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { OverallLeaderboardComponent } from './components/overall-leaderboard/overall-leaderboard.component';
import { SubmissionService } from './services/submission.service';

@NgModule({
    declarations: [
        LeaderboardComponent,
        OverallLeaderboardComponent
    ],
    exports: [
        LeaderboardComponent,
        OverallLeaderboardComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        SubmissionService
    ]
})
export class SubmissionsModule {

}
