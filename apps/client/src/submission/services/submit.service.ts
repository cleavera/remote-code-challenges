import { Injectable } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { SubmissionMessage } from '@hdc/communication';
import { ResultInterface } from '@hdc/submission';

import { MessengerService } from '../../collaboration';
import { Profile, ProfileService } from '../../user';

import { SubmissionFactory } from './submission.factory';

@Injectable()
export class SubmitService {
    private _submissionFactory: SubmissionFactory;
    private _messengerService: MessengerService;
    private _profile: Profile | null = null;

    constructor(submissionFactory: SubmissionFactory, messengerService: MessengerService, profileService: ProfileService) {
        this._submissionFactory = submissionFactory;
        this._messengerService = messengerService;
        profileService.user$.subscribe((profile: Profile | null) => {
            this._profile = profile;
        });
    }

    public async validate(submission: string, challenge: ChallengeInterface): Promise<ResultInterface> {
        const request: Response = await fetch('http://localhost:7071/api/SubmissionRunner', {
            method: 'POST',
            body: JSON.stringify(this._submissionFactory.create(submission, challenge))
        });

        return await request.json();
    }

    public async send(submission: string, challenge: ChallengeInterface): Promise<ResultInterface> {
        const response: ResultInterface = await this.validate(submission, challenge);

        if (response.errors.length > 0) {
            return response;
        }

        if (!this._profile) {
            throw new Error('No profile created');
        }

        this._messengerService.send(new SubmissionMessage(submission, response, this._profile.name, challenge.title));

        return response;
    }
}
