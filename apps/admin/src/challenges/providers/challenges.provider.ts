import { Provider } from '@angular/core';
import { ARRAY_SUMS_CHALLENGE, FACTORIALS_CHALLENGE, FIBONACCI_CHALLENGE, MISSING_NUMBERS_CHALLENGE, OVERLAPPING_RANGES_CHALLENGE, PROPER_BRACKETS_CHALLENGE, STRING_ENCODING_CHALLENGE } from '@hackdaychallenges/challenges';
import { MULTIPLES_CHALLENGE } from '@hackdaychallenges/challenges/dist/constants/multiples.challenge';
import { CHALLENGES_TOKEN } from '../tokens/challenges.token';

export const CHALLENGES_PROVIDER: Provider = {
    provide: CHALLENGES_TOKEN,
    useValue: [
        MISSING_NUMBERS_CHALLENGE,
        STRING_ENCODING_CHALLENGE,
        OVERLAPPING_RANGES_CHALLENGE,
        ARRAY_SUMS_CHALLENGE,
        PROPER_BRACKETS_CHALLENGE,
        FACTORIALS_CHALLENGE,
        FIBONACCI_CHALLENGE,
        MULTIPLES_CHALLENGE
    ]
};
