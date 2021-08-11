import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollaborationModule } from '../collaboration';
import { FormModule } from '../form';
import { PersistenceModule } from '../persistence';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ProfileService } from './services/profile.service';

@NgModule({
    declarations: [
        NewUserComponent
    ],
    exports: [
        NewUserComponent
    ],
    imports: [
        CollaborationModule,
        CommonModule,
        FormModule,
        PersistenceModule
    ],
    providers: [
        ProfileService
    ]
})
export class UserModule {}
