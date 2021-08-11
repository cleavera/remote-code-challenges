import { Component, Input, OnInit } from '@angular/core';
import { ChallengeInterface } from '@hackdaychallenges/challenges';
import { ResultInterface } from '@hackdaychallenges/submission';
import { SubmitService } from '../../../submission';

@Component({
    selector: 'challenge-test',
    styleUrls: ['./test.component.css'],
    templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
    @Input()
    public set challenge(value: ChallengeInterface) {
        this.result = null;

        this._challenge = value;
    }

    @Input()
    public submission!: string;

    public get defaultInput(): string {
        return JSON.stringify(this._challenge.validation[0].input[0]);
    }

    public get defaultOutput(): string {
        return JSON.stringify(this._challenge.validation[0].output);
    }

    public input!: string;
    public output!: string;
    public result: Promise<ResultInterface> | null = null;

    private _challenge!: ChallengeInterface;
    private _submitService: SubmitService;

    constructor(submitService: SubmitService) {
        this._submitService = submitService;
    }

    public ngOnInit(): void {
        this.onInputChange(this.defaultInput);
        this.onOutputChange(this.defaultOutput);
    }

    public async onValidate(): Promise<void> {
        this.result = this._submitService.validate(this.submission, {
            description: this._challenge.description,
            title: this._challenge.title,
            validation: [
                {
                    input: [this.input],
                    output: this.output
                }
            ],
            performance: null,
            memory: null
        });
    }

    public onInputChange(value: string): void {
        if (value === '') {
            value = 'null';
        }

        this.input = JSON.parse(value);
    }

    public onOutputChange(value: string): void {
        if (value === '') {
            value = 'null';
        }

        this.output = JSON.parse(value);
    }
}
