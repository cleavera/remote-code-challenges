import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ARRAY_SUMS_CHALLENGE, FACTORIALS_CHALLENGE, MISSING_NUMBERS_CHALLENGE, OVERLAPPING_RANGES_CHALLENGE, PROPER_BRACKETS_CHALLENGE, STRING_ENCODING_CHALLENGE } from '@hackdaychallenges/challenges';
import { EditorModule } from '../editor';
import { FormModule } from '../form';
import { SubmissionModule } from '../submission';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { DetailsComponent } from './components/details/details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { TestComponent } from './components/test/test.component';
import { ChallengeService } from './services/challenge.service';
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
        ChallengeService,
        {
            provide: CHALLENGES_TOKEN,
            useValue: [
                MISSING_NUMBERS_CHALLENGE,
                STRING_ENCODING_CHALLENGE,
                OVERLAPPING_RANGES_CHALLENGE,
                ARRAY_SUMS_CHALLENGE,
                PROPER_BRACKETS_CHALLENGE,
                FACTORIALS_CHALLENGE
            ]
        }
    ]
})
export class ChallengeModule {
}
