import { MessageInterface } from '../interfaces/message.interface';

export class RejoinMessage implements MessageInterface {
    public static type: string = 'user-rejoin';
    public type: string = RejoinMessage.type;
    public data: {
        name: string
    };

    constructor(name: string) {
        this.data = {
            name
        };
    }
}
