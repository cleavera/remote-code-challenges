import { Injectable } from '@angular/core';
import { ChallengeInterface } from '@hackdaychallenges/challenges';
import { SubmissionInterface } from '@hackdaychallenges/submission';

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
