import { Injectable } from '@angular/core';
import { Connection, MessageInterface } from '@hdc/communication';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class MessengerService {
    private _connection!: Connection;

    constructor() {
        this.init();
    }

    public async init(): Promise<void> {
        this._connection = await Connection.Create('test');
    }

    public send(message: MessageInterface): void {
        this._connection.send(message);
    }

    public subscribeByType(type: string): Observable<MessageInterface> {
        return (this._connection.messages$.asObservable() as any).pipe(filter((message: MessageInterface): boolean => {
            return message.type === type;
        }));
    }
}
