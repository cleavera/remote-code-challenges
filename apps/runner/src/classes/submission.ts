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

    public async run(): Promise<Execution> {
        const validations: Array<Execution> = await this.validate();
        const results = new Execution(new Profile(''));

        validations.map((validation: Execution) => {
            results.message(...validation.messages);
            results.error(...validation.errors);
        });

        if (!results.passed()) {
            return results;
        }

        const memory: Execution = await this.memory();

        if (memory.errors.length > 0) {
            results.error(...memory.errors);

            return results;
        }

        results.setMemory(memory.memory);

        const performance: Execution = await this.performance();

        if (performance.errors.length) {
            results.error(performance.errors[0]);

            return results;
        }

        results.performance = performance.performance;

        return results;
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

    public async memory(): Promise<Execution> {
        const testCase: CaseInterface = this.submission.memory;

        const script: string = `
            ${this.submission.submission}

            submission(${testCase.input.map((input: any) => JSON.stringify(input)).join(', ')});
        `;

        const runs: Array<Execution> = [];

        for (let x = 0; x < 10; x++) {
            runs.push(await this._execute(script))
        }

        runs.sort((a: Execution, b: Execution) => {
            if (a.memory < b.memory) {
                return -1;
            }

            if (a.memory > b.memory) {
                return 1;
            }

            return 0;
        })

        return runs[4];
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
        const execution: Execution = new Execution(new Profile('Run', null, 1e5));

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
