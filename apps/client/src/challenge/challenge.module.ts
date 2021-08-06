import { NgModule } from '@angular/core';
import { EditorModule } from '../editor';
import { SubmissionModule } from '../submission';
import { ChallengeComponent } from './components/challenge/challenge.component';

@NgModule({
    declarations: [
        ChallengeComponent
    ],
    imports: [
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
