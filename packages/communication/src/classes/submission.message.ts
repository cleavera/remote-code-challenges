import { ResultInterface } from '@hdc/submission';
import { MessageInterface } from '../interfaces/message.interface';

export class SubmissionMessage implements MessageInterface {
    public static type: string = 'submission';
    public type: string = SubmissionMessage.type;
    public data: {
        challenge: string,
        submission: string,
        result: ResultInterface,
        user: string
    };

    constructor(submission: string, result: ResultInterface, user: string, challenge: string) {
        this.data = {
            challenge,
            submission,
            result,
            user
        };
    }
}
