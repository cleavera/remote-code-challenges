import { Component, Input } from '@angular/core';
import { ChallengeInterface } from '@hdc/challenges';

@Component({
    selector: 'challenges-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    @Input()
    public challenge!: ChallengeInterface;
}
