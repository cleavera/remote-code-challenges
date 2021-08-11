import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { SubmissionService } from './services/submission.service';

@NgModule({
    declarations: [
        LeaderboardComponent
    ],
    exports: [
        LeaderboardComponent
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
