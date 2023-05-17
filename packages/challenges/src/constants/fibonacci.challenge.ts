import { ChallengeInterface } from '../interfaces/challenge.interface';

export const FIBONACCI_CHALLENGE: ChallengeInterface = {
    title: 'Fibonacci!',
    description: 'The fibonacci sequence is constructed by starting with the numbers 1,1 you get the next number in the sequence by adding the previous two numbers together. 1,1,2,3,5,8,13,21... You will be given a number n you should return the fibonacci number at that point in the sequence.',
    validation: [
        {
            input: [4],
            output: 3
        },
        {
            input: [10],
            output: 55
        },
        {
            input: [100],
            output: 354224848179261915075
        },
        {
            input: [1000],
            output: 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875
        }
    ],
    memory: {
        input: [100],
        output: 354224848179261915075
    },
    performance: {
        input: [100],
        output: 354224848179261915075
    }
}
