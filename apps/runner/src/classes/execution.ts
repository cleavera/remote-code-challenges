import { Profile } from '@cleavera/benchmark';
import { ResultInterface } from '@hdc/submission';

export class Execution {
    public messages: Array<string>;
    public errors: Array<Error>;
    public memory: number;
    public performance: Profile;

    private constructor(performance: Profile) {
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

    public passed(): boolean {
        return this.errors.length === 0;
    }

    public static Create(): Execution {
        return new Execution(new Profile('Run', null, 2e4));
    }
}
