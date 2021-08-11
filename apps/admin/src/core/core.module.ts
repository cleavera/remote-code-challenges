import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChallengesModule } from '../challenges/challenges.module';

import { AppComponent } from './components/app/app.component';
import { BackgroundWireComponent } from './components/background-wire/background-wire.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
    declarations: [
        AppComponent,
        BackgroundComponent,
        BackgroundWireComponent
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
