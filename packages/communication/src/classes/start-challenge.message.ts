import { MessageInterface } from '../interfaces/message.interface';

export class StartChallengeMessage implements MessageInterface {
    public static type: string = 'start-challenge';
    public type: string = StartChallengeMessage.type;
    public data: {
        challenge: string
    };

    constructor(challenge: string) {
        this.data = {
            challenge
        };
    }
}
