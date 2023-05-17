import { ChallengeInterface } from '../interfaces/challenge.interface';

export const MULTIPLES_CHALLENGE: ChallengeInterface = {
    title: 'Multiples',
    description: 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n' +
        '\n' +
        'You will be given a number and you should return the sum of all the numbers below that that are multiples of 3 and 5',
    validation: [
        {
            input: [10],
            output: 23
        },
        {
            input: [100],
            output: 2318
        },
        {
            input: [1000],
            output: 233168
        }
    ],
    memory: {
        input: [1000],
        output: 233168
    },
    performance: {
        input: [100],
        output: 2318
    }
}
