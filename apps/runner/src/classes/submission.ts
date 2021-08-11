import { SubmissionInterface, TestCaseInterface } from '@hdc/submission';
import { Script } from 'vm';

import { Execution } from './execution';
import { Results } from './results';
import { Sandbox } from './sandbox';
import { ScriptFactory } from './script.factory';

export class Submission {
    public submission: SubmissionInterface;

    constructor(submission: SubmissionInterface) {
        this.submission = submission;
    }

    public async run(): Promise<Results> {
        const results: Results = Results.Create(this.submission);
        const validation: Execution = await this.validate();
        results.addExecution(validation);

        if (!results.passing()) {
            return results;
        }

        if (this.submission.memory) {
            const memory: Execution = await this.memory(this.submission.memory);

            results.addExecution(memory);

            if (!results.passing()) {
                return results;
            }

            results.addMemory(memory);
        }

        if (this.submission.performance) {
            const performance: Execution = await this.performance(this.submission.performance);

            results.addExecution(performance);

            if (!results.passing()) {
                return results;
            }

            results.addPerformanceData(performance);
        }

        return results;
    }

    public async validate(): Promise<Execution> {
        let execution: Execution | null = null;

        for (let testCase of this.submission.tests) {
            const script: string = `
                ${this.submission.submission}

                const value = JSON.stringify(submission(${testCase.input.map((input: any) => JSON.stringify(input)).join(', ')}));

                if (JSON.stringify(${testCase.output}) !== value) {
                    console.error(new Error('Input: ${JSON.stringify(testCase.input)} => Expected: ${testCase.output}; Got: ' + value));
                }
            `;

            execution = await this._execute(script);

            if (execution.errors.length) {
                break;
            }
        }

        if (execution === null) {
            throw new Error('No tests were run');
        }

        return execution;
    }

    public async memory(testCase: TestCaseInterface): Promise<Execution> {
        const script: string = `
            ${this.submission.submission}

            submission(${testCase.input.map((input: any) => JSON.stringify(input)).join(', ')});
        `;

        const runs: Array<Execution> = [];

        for (let x = 0; x < 100; x++) {
            runs.push(await this._execute(script));
        }

        runs.sort((a: Execution, b: Execution) => {
            if (a.memory < b.memory) {
                return -1;
            }

            if (a.memory > b.memory) {
                return 1;
            }

            return 0;
        });

        return runs[49];
    }

    public performance(testCase: TestCaseInterface): Promise<Execution> {
        const script: string = `
            ${this.submission.submission}

            while (__profile.running()) {
                submission(${testCase.input.map((input: any) => JSON.stringify(input)).join(', ')});
            }
        `;

        return this._execute(script);
    }

    private async _execute(scriptContent: string): Promise<Execution> {
        const execution: Execution = Execution.Create();

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
