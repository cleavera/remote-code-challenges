import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChallengesModule } from '../challenges/challenges.module';

import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ChallengesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CoreModule {
}
