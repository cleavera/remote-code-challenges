import { Injectable } from '@angular/core';
import { ChallengeInterface } from '../../challenge';
import { SubmissionInterface } from '../interfaces/submission.interface';

@Injectable()
export class SubmitService {
    public async send(submission: string, challenge: ChallengeInterface): Promise<void> {
        const request: Response = await fetch('http://localhost:7071/api/SubmissionRunner', {
            method: 'POST',
            body: JSON.stringify({
                submission,
                tests: challenge.validation,
                performance: challenge.performance,
                memory: challenge.memory
            } as SubmissionInterface)
        });

        console.log(await request.json());
    }
}
