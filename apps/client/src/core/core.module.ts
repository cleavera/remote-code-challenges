import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChallengeModule } from '../challenge';
import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ChallengeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CoreModule {
}
