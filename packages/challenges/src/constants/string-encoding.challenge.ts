import { ChallengeInterface } from '../interfaces/challenge.interface';

export const STRING_ENCODING_CHALLENGE: ChallengeInterface = {
    title: 'String encoding',
    description: `You can a string and convert it to another string by taking each letter and use its position in the alphabet as the output string so \`e\` becomes \`5\`, \`r\` becomes \`18\` etc. You can then concatenate these numbers together to form a new string.

        You will be given an already encoded string, your task is to figure out how many possible input strings could have been the source.`,
    validation: [
        {
            input: ['85121215'],
            output: 13
        },
        {
            input: ['239121225'],
            output: 26
        },
        {
            input: ['1234567891011121314151617181920212223242526'],
            output: 1775616
        },
        {
            input: ['191817152412352224'],
            output: 480
        }
    ],
    memory: {
        input: ['1234567891011121314151617181920212223242526'],
        output: 1775616
    },
    performance: {
        input: ['19181715241235'],
        output: 96
    }
}
