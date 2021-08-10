import { InjectionToken } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';

export const CHALLENGES_TOKEN: InjectionToken<Array<ChallengeInterface>> = new InjectionToken<Array<ChallengeInterface>>('Challenges');
