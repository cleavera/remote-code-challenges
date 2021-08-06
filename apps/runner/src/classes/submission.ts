import { Profile } from '@cleavera/benchmark';
import { Script } from 'vm';
import { CaseInterface } from '../interfaces/case.interface';
import { SubmissionInterface } from '../interfaces/submission.interface';
import { Execution } from './execution';
import { Sandbox } from './sandbox';
import { ScriptFactory } from './script.factory';

export class Submission {
    public submission: SubmissionInterface;

    constructor(submission: SubmissionInterface) {
        this.submission = submission;
    }

    public validate(): Promise<Array<Execution>> {
        return Promise.all(this.submission.tests.map((testCase: CaseInterface): Promise<Execution> => {
            const script: string = `
                ${this.submission.submission}

                const value = JSON.stringify(submission(${testCase.input.map((input: any) => JSON.stringify(input)).join(', ')}));

                if (JSON.stringify(${testCase.output}) !== value) {
                    console.error(new Error('Input: ${JSON.stringify(testCase.input)} => Expected: ${testCase.output}; Got: ' + value));
                }
            `;

            return this._execute(script);
        }));
    }

    public memory(): Promise<Execution> {
        const testCase: CaseInterface = this.submission.memory;

        const script: string = `
            ${this.submission.submission}

            submission(${testCase.input.map((input: any) => JSON.stringify(input)).join(', ')});
        `;

        return this._execute(script);
    }

    public performance(): Promise<Execution> {
        const testCase: CaseInterface = this.submission.performance;

        const script: string = `
            ${this.submission.submission}

            while (__profile.running()) {
                submission(${testCase.input.map((input: any) => JSON.stringify(input)).join(', ')});
            }
        `;

        return this._execute(script);
    }

    private async _execute(scriptContent: string): Promise<Execution> {
        const execution: Execution = new Execution(new Profile('Run'));

        let script: Script;

        try {
            script = ScriptFactory.Create(scriptContent);
        } catch (e) {
            execution.error(e);

            return execution;
        }

        const sandbox: Sandbox = Sandbox.Node();

        try {
            await sandbox.executeScript(script, execution);
        } catch (e) {
            execution.error(e);
        }

        return execution;
    }
}

// await ((await fetch('http://localhost:7071/api/SubmissionRunner', { method: 'POST', body: `{
//     "submission": "function submission(input) {        return input - 5;    }",
//     "tests": [
//         {
//             "input": [5],
//             "output": 0
//         },
//         {
//             "input": [7],
//             "output": 2
//         },
//         {
//             "input": [13],
//             "output": 0
//         }
//     ],
//     "memory": {
//         "input": [100],
//         "output": 95
//     }
// }` })).json())
