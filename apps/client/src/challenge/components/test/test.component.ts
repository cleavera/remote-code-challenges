import { Component, Input, OnInit } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';
import { ResultInterface } from '@hdc/submission';
import { SubmitService } from '../../../submission';

@Component({
    selector: 'challenge-test',
    styleUrls: ['./test.component.css'],
    templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
    @Input()
    public challenge!: ChallengeInterface;

    @Input()
    public submission!: string;

    public get defaultInput(): string {
        return JSON.stringify(this.challenge.validation[0].input[0]);
    }

    public get defaultOutput(): string {
        return JSON.stringify(this.challenge.validation[0].output);
    }

    public input!: string;
    public output!: string;

    public result: Promise<ResultInterface> | null = null;
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
            description: this.challenge.description,
            title: this.challenge.title,
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
        this.input = JSON.parse(value);
    }

    public onOutputChange(value: string): void {
        this.output = JSON.parse(value);
    }
}
