import { MessageInterface } from '../interfaces/message.interface';

export class NewUserMessage implements MessageInterface {
    public static type: string = 'new-user';
    public type: string = NewUserMessage.type;
    public data: {
        name: string
    };

    constructor(name: string) {
        this.data = {
            name
        };
    }
}
