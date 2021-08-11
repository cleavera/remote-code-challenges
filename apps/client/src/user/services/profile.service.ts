import { Injectable } from '@angular/core';
import { NewUserMessage, RejoinMessage } from '@hackdaychallenges/communication';
import { BehaviorSubject } from 'rxjs';
import { MessengerService } from '../../collaboration';
import { PersistenceService } from '../../persistence';
import { Profile } from '../classes/profile';

@Injectable()
export class ProfileService {
    public user$: BehaviorSubject<Profile | null>;

    private _persistenceService: PersistenceService;
    private _messengerService: MessengerService;

    constructor(persistenceService: PersistenceService, messengerService: MessengerService) {
        this._persistenceService = persistenceService;
        this._messengerService = messengerService;

        const username: string | null = this._persistenceService.get('HDC-CLIENT-USERNAME')
        let profile : Profile | null = null;

        if (username !== null) {
            profile = new Profile(username);
        }

        this.user$ = new BehaviorSubject<Profile | null>(profile);

        if (profile !== null) {
            this._messengerService.send(new RejoinMessage(profile.name));
        }
    }

    public newUser(name: string): void {
        const user: Profile = new Profile(name);

        this.user$.next(user);
        this._persistenceService.set('HDC-CLIENT-USERNAME', name)
        this._messengerService.send(new NewUserMessage(user.name));
    }
}
