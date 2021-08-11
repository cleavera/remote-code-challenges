import { Injectable } from '@angular/core';
import { Connection, MessageInterface } from '@hackdaychallenges/communication';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class MessengerService {
    private _connection!: Connection;
    private _initialising: Promise<void>;

    constructor() {
        this._initialising = this.init();
    }

    public async init(): Promise<void> {
        this._connection = await Connection.Create('test');
    }

    public async send(message: MessageInterface): Promise<void> {
        await this._initialising;

        this._connection.send(message);
    }

    public async subscribeByType<T extends MessageInterface>(messageType: { type: string, new(...params: Array<any>): T }): Promise<Observable<T>> {
        await this._initialising;

        return (this._connection.messages$.asObservable() as any).pipe(filter((message: MessageInterface): boolean => {
            return message.type === messageType.type;
        }));
    }
}
