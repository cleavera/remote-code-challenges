import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MISSING_NUMBERS_CHALLENGE, OVERLAPPING_RANGES_CHALLENGE, STRING_ENCODING_CHALLENGE } from '@hdc/challenges';
import { EditorModule } from '../editor';
import { FormModule } from '../form';
import { SubmissionModule } from '../submission';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { DetailsComponent } from './components/details/details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { TestComponent } from './components/test/test.component';
import { CHALLENGES_TOKEN } from './tokens/challenges.token';

@NgModule({
    declarations: [
        ChallengeComponent,
        LoaderComponent,
        DetailsComponent,
        SubmissionComponent,
        TestComponent
    ],
    imports: [
        CommonModule,
        EditorModule,
        FormModule,
        SubmissionModule
    ],
    exports: [
        ChallengeComponent,
        DetailsComponent,
        LoaderComponent
    ],
    providers: [
        {
            provide: CHALLENGES_TOKEN,
            useValue: [
                MISSING_NUMBERS_CHALLENGE,
                STRING_ENCODING_CHALLENGE,
                OVERLAPPING_RANGES_CHALLENGE
            ]
        }
    ]
})
export class ChallengeModule {
}
