import { Injectable } from '@angular/core';
import { Connection } from '@hdc/communication';

@Injectable()
export class MessengerService {
    private _connection!: Connection;

    constructor() {
        this.init();
    }

    public async init(): Promise<void> {
        this._connection = await Connection.Create('test');
    }

    public send(message: unknown): void {
        this._connection.send(message);
    }
}
