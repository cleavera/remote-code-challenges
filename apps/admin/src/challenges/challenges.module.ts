import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollaborationModule } from '../collaboration';
import { SubmissionsModule } from '../submissions';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { DetailsComponent } from './components/details/details.component';
import { JsonPipe } from './pipes/json.pipe';
import { CHALLENGES_PROVIDER } from './providers/challenges.provider';
import { ChallengeService } from './services/challenge.service';

@NgModule({
    declarations: [
        ChallengesComponent,
        DetailsComponent,
        JsonPipe
    ],
    exports: [
        ChallengesComponent
    ],
    imports: [
        CommonModule,
        CollaborationModule,
        SubmissionsModule
    ],
    providers: [
        CHALLENGES_PROVIDER,
        ChallengeService
    ]
})
export class ChallengesModule {

}
