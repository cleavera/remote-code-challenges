import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChallengeModule } from '../challenge';
import { UserModule } from '../user';
import { AppComponent } from './components/app/app.component';
import { LoaderComponent } from '../challenge/components/loader/loader.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ChallengeModule,
        UserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CoreModule {
}
