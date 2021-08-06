import { Injectable } from '@angular/core';
import { ResultInterface } from '@hdc/submission';
import { Observable, Subject } from 'rxjs';

import { ChallengeInterface } from '../../challenge';
import { SubmissionFactory } from './submission.factory';

@Injectable()
export class SubmitService {
    private _submissionFactory: SubmissionFactory;

    constructor(submissionFactory: SubmissionFactory) {
        this._submissionFactory = submissionFactory;
    }

    public async send(submission: string, challenge: ChallengeInterface): Promise<ResultInterface> {
        const request: Response = await fetch('http://localhost:7071/api/SubmissionRunner', {
            method: 'POST',
            body: JSON.stringify(this._submissionFactory.create(submission, challenge))
        });

        return request.json();
    }
}
