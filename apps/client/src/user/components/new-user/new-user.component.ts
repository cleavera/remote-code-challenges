import { Component, OnInit } from '@angular/core';
import { NewUserMessage } from '@hdc/communication';
import { MessengerService } from '../../../collaboration';
import { ProfileService } from '../../services/profile.service';

@Component({
    selector: 'user-new',
    styleUrls: ['./new-user.component.css'],
    templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {
    public name!: string;
    public formNameId!: string;
    private _profileService: ProfileService;
    private _messengerService: MessengerService;

    constructor(profileService: ProfileService, messengerService: MessengerService) {
        this._profileService = profileService;
        this._messengerService = messengerService;
    }

    public ngOnInit(): void {
        this.name = '';
        this.formNameId = `form-name-${Date.now()}-${Math.floor(Math.random() * 1296).toString(36)}`;
    }

    public onCreate(event: Event): void {
        event.preventDefault();
        this._profileService.newUser(this.name);
        this._messengerService.send(new NewUserMessage(this.name));
    }

    public onNameChange(name: string): void {
        this.name = name;
    }
}
