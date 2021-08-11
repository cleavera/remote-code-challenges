import { Component, Input, OnChanges } from '@angular/core';
import { ChallengeInterface } from '@hackdaychallenges/challenges';
import { ResultInterface } from '@hackdaychallenges/submission';
import { PersistenceService } from '../../../persistence';

@Component({
    selector: 'challenge-challenge',
    styleUrls: ['./challenge.component.css'],
    templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnChanges {
    @Input()
    public challenge!: ChallengeInterface;

    public value!: string;
    public result!: Promise<ResultInterface>;
    public panel: string = 'details';

    private _persistenceService: PersistenceService;

    constructor(persistenceService: PersistenceService) {
        this._persistenceService = persistenceService;
    }

    public ngOnChanges(): void {
        this.setPanel('details');
        this.value = this._getDefaultSubmission();
    }

    public onSolutionChange(value: string): void {
        this.value = value;

        this._persistenceService.set(this._getPersistenceKey(), value);
    }

    public setPanel(name: string): void {
        this.panel = name;
    }

    private _getPersistenceKey(): string {
        return `HDC-CLIENT-${this.challenge.title.toUpperCase()}-SUBMISSION`;
    }

    private _getDefaultSubmission(): string {
        return this._persistenceService.get(this._getPersistenceKey()) ?? 'function submission(input) {\n\n}';
    }
}
