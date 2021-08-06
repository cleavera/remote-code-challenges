import { HttpRequest } from '@azure/functions';

export class Content {
    public readonly raw: string;
    public readonly type: string | null;

    constructor(raw: string, type: string | null = null) {
        this.raw = raw;
        this.type = type;
    }

    public json<T = unknown>(): T {
        return JSON.parse(this.raw);
    }

    public static FromRequest(request: HttpRequest): Content {
        return new Content(request.rawBody, request.headers['content-type']);
    }
}
