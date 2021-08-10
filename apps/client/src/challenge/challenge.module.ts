import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditorModule } from '../editor';
import { FormModule } from '../form';
import { SubmissionModule } from '../submission';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { DetailsComponent } from './components/details/details.component';
import { SubmissionComponent } from './components/submission/submission.component';

@NgModule({
    declarations: [
        ChallengeComponent,
        DetailsComponent,
        SubmissionComponent
    ],
    imports: [
        CommonModule,
        EditorModule,
        FormModule,
        SubmissionModule
    ],
    exports: [
        ChallengeComponent,
        DetailsComponent
    ],
    providers: []
})
export class ChallengeModule {
}
