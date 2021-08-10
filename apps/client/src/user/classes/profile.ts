import { Subject } from 'rxjs';

export class Profile {
    public change$: Subject<void>;
    private _name: string;

    constructor(name: string) {
        this._name = name;
        this.change$ = new Subject<void>();
    }

    public set name(name: string) {
        this._name = name;

        this.change$.next();
    }

    public get name(): string {
        return this._name;
    }
}
