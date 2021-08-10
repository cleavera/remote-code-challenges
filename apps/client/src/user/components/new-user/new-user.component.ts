import { Component, OnInit } from '@angular/core';
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

    constructor(profileService: ProfileService) {
        this._profileService = profileService;
    }

    public ngOnInit(): void {
        this.name = '';
        this.formNameId = `form-name-${Date.now()}-${Math.floor(Math.random() * 1296).toString(36)}`;
    }

    public onCreate(event: Event): void {
        event.preventDefault();
        this._profileService.newUser(this.name);
    }
}
