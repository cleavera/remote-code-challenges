import { Component } from '@angular/core';

@Component({
    selector: 'challenge-challenge',
    styleUrls: ['./challenge.component.css'],
    templateUrl: './challenge.component.html'
})
export class ChallengeComponent {
    public onSolutionChange(value: string): void {
        console.log(value);
    }
}
