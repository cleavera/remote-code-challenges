import { Provider } from '@angular/core';
import { MISSING_NUMBERS_CHALLENGE, OVERLAPPING_RANGES_CHALLENGE, STRING_ENCODING_CHALLENGE } from '@hdc/challenges';
import { CHALLENGES_TOKEN } from '../tokens/challenges.token';

export const CHALLENGES_PROVIDER: Provider = {
    provide: CHALLENGES_TOKEN,
    useValue: [
        MISSING_NUMBERS_CHALLENGE,
        STRING_ENCODING_CHALLENGE,
        OVERLAPPING_RANGES_CHALLENGE
    ]
};
