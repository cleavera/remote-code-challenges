import { MessageInterface } from '../interfaces/message.interface';

export class CurrentChallengeMessage implements MessageInterface {
    public static type: string = 'current-challenge';
    public type: string = CurrentChallengeMessage.type;
    public data: {
        challenge: string
    };

    constructor(challenge: string) {
        this.data = {
            challenge
        };
    }
}
