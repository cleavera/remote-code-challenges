import { Profile } from '@cleavera/benchmark';
import { ResultInterface } from '@hdc/submission';

export class Execution {
    public messages: Array<string>;
    public errors: Array<Error>;
    public memory: number;
    public performance: Profile;

    constructor(performance: Profile) {
        this.messages = [];
        this.errors = [];
        this.memory = 0;
        this.performance = performance;
    }

    public error(...errors: Array<Error>): void {
        console.error(errors);
        this.errors = this.errors.concat(errors);
    }

    public message(...messages: Array<string>): void {
        this.messages = this.messages.concat(messages);
    }

    public log(...messages: Array<string>): void {
        this.message(...messages);
    }

    public info(...messages: Array<string>): void {
        this.message(...messages);
    }

    public warn(...messages: Array<string>): void {
        this.message(...messages);
    }

    public setMemory(memory: number): void {
        this.memory = memory;
    }

    public serialise(): ResultInterface {
        return {
            memory: this.memory,
            performance: this.performance.best?.toString(10) ?? '',
            messages: this.messages,
            errors: this.errors.map((error: Error) => {
               return error.message;
            })
        };
    }

    public passed(): boolean {
        return this.errors.length === 0;
    }
}
