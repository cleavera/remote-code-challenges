import { NgModule } from '@angular/core';
import { EditorModule } from '../editor';
import { ChallengeComponent } from './components/challenge/challenge.component';

@NgModule({
    declarations: [
        ChallengeComponent
    ],
    imports: [
        EditorModule
    ],
    exports: [
        ChallengeComponent
    ],
    providers: []
})
export class ChallengeModule {
}
