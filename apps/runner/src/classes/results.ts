import { ResultInterface, SubmissionInterface } from '@hackdaychallenges/submission';

import { Execution } from './execution';

export class Results {
    public submission: string;
    public messages: Array<string>;
    public errors: Array<Error>;
    public performance: bigint | null;
    public memory: number | null;

    constructor(submission: string) {
        this.submission = submission;
        this.messages = [];
        this.errors = [];
        this.performance = null;
        this.memory = null;
    }

    public addExecution(execution: Execution, errorsOnly: boolean = false): void {
        if (!errorsOnly){
            this.messages = this.messages.concat(execution.messages);
        }

        this.errors = this.errors.concat(execution.errors);
    }

    public addPerformanceData(execution: Execution): void {
        this.performance = execution.performance.best;
    }

    public addMemory(execution: Execution): void {
        this.memory = execution.memory;
    }

    public serialise(): ResultInterface {
        return {
            characters: this.submission.length,
            memory: this.memory,
            performance: this.performance?.toString(10) ?? '',
            messages: this.messages,
            errors: this.errors.map((error: Error) => {
                return error.stack ?? error.message;
            })
        };
    }

    public passing(): boolean {
        return this.errors.length === 0;
    }

    public static Create(submission: SubmissionInterface): Results {
        return new Results(submission.submission);
    }
}
