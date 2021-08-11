import { ChallengeInterface } from '../interfaces/challenge.interface';

export const FACTORIALS_CHALLENGE: ChallengeInterface = {
    title: 'Factorials!',
    description: 'The factorial of a number is when you take that number and multiply it by all the numbers smaller than it. For instance 3! = 3 x 2 x 1 = 6. You will be given a number you should calculate its factorial and return the number of digits it has.',
    validation: [
        {
            input: [3],
            output: 1
        },
        {
            input: [10],
            output: 7
        },
        {
            input: [5],
            output: 3
        },
        {
            input: [18],
            output: 16
        },
        {
            input: [1000],
            output: 2568
        },
        {
            input: [100],
            output: 158
        }
    ],
    memory: {
        input: [1000],
        output: 2568
    },
    performance: {
        input: [100],
        output: 158
    }
}
