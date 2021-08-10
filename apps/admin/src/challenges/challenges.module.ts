import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollaborationModule } from '../collaboration';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { DetailsComponent } from './components/details/details.component';
import { JsonPipe } from './pipes/json.pipe';
import { CHALLENGES_PROVIDER } from './providers/challenges.provider';

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
        CollaborationModule
    ],
    providers: [
        CHALLENGES_PROVIDER
    ]
})
export class ChallengesModule {

}
