import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditorModule } from '../editor';
import { SubmissionModule } from '../submission';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
    declarations: [
        ChallengeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        EditorModule,
        SubmissionModule
    ],
    exports: [
        ChallengeComponent
    ],
    providers: []
})
export class ChallengeModule {
}
