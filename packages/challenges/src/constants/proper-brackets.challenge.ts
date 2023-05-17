import { ChallengeInterface } from '../interfaces/challenge.interface';

export const PROPER_BRACKETS_CHALLENGE: ChallengeInterface = {
    title: 'Proper brackets',
    description: 'You will be given a number, this number defines a number of bracket pairs. You should write a program to figure out how many valid combinations you can make for that number of bracket pairs. For instance 1 only have 1 valid combination `"()"` however 3 has 5 valid combinations `"((()))","(()())","(())()","()(())","()()()"`.',
    validation: [
        {
            input: [3],
            output: 5
        },
        {
            input: [1],
            output: 1
        },
        {
            input: [0],
            output: 0
        },
        {
            input: [10],
            output: 16796
        }
    ],
    memory: {
        input: [10],
        output: 16796
    },
    performance: {
        input: [6],
        output: 132
    }
}
