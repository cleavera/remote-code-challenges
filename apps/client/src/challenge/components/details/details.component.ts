import { Component, Input } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';

@Component({
    selector: 'challenge-details',
    styleUrls: ['./details.component.css'],
    templateUrl: './details.component.html'
})
export class DetailsComponent {
    @Input()
    public challenge!: ChallengeInterface;
}
