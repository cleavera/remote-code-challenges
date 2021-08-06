import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditorModule } from '../editor';
import { SubmissionModule } from '../submission';
import { ChallengeComponent } from './components/challenge/challenge.component';

@NgModule({
    declarations: [
        ChallengeComponent
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
