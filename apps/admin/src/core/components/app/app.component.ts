import { Component } from '@angular/core';
import { Connection } from '@hdc/communication';

@Component({
    selector: 'core-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
        this.init()
    }

    private async init(): Promise<void> {
        (await Connection.Create('test')).messages$.subscribe((message: any) => {
            console.log(message);
        });
    }
}
