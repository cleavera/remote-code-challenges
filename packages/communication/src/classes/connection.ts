import { Subject } from 'rxjs';
import { MessageInterface } from '../interfaces/message.interface';

export class Connection {
    public messages$: Subject<MessageInterface>;
    private _channelName: string;
    private _socket: WebSocket;

    private constructor(channelName: string, socket: WebSocket) {
        this._channelName = channelName;
        this._socket = socket;
        this.messages$ = new Subject<any>();

        this._initSocket()
    }

    private _initSocket(): void {
        this._socket.addEventListener('message', (message: MessageEvent<string>) => {
            this.messages$.next(JSON.parse(message.data));
        });
    }

    public send(data: MessageInterface): void {
        this._socket.send(JSON.stringify(data));
    }

    public static async Create(channelName: string): Promise<Connection> {
        return new Promise((resolve: (connection: Connection) => void) => {
            const socket: WebSocket = new WebSocket('ws://wsecho.azurewebsites.net');

            socket.addEventListener('open', () => {
                resolve(new Connection(channelName, socket));
            });
        });
    }
}
