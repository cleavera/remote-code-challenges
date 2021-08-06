import { Injectable } from '@angular/core';
import { SubmissionInterface } from '@hdc/submission';
import { ChallengeInterface } from '../../challenge';

@Injectable()
export class SubmissionFactory {
    public create(submission: string, challenge: ChallengeInterface): SubmissionInterface {
        return {
            submission,
            tests: challenge.validation,
            performance: challenge.performance,
            memory: challenge.memory
        };
    }
}
