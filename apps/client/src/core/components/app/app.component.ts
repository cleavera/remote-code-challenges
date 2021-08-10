import { Component } from '@angular/core';
import { Profile, ProfileService } from '../../../user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public profile!: Profile | null;

    constructor(profileService: ProfileService) {
        profileService.user$.subscribe((profile: Profile | null) => {
            this.profile = profile
        });
    }
}
