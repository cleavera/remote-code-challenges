import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultComponent } from './components/results/result.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { SubmissionFactory } from './services/submission.factory';
import { SubmitService } from './services/submit.service';

@NgModule({
    declarations: [
        ResultComponent,
        SubmissionComponent
    ],
    exports: [
        ResultComponent,
        SubmissionComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        SubmissionFactory,
        SubmitService
    ]
})
export class SubmissionModule {}
