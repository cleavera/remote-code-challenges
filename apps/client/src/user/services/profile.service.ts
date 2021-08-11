import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../classes/profile';

@Injectable()
export class ProfileService {
    public user$: BehaviorSubject<Profile | null> = new BehaviorSubject<Profile | null>(null);

    public newUser(name: string): void {
        const user: Profile = new Profile(name);

        this.user$.next(user);
    }
}
