import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { FieldComponent } from './components/field/field.component';

@NgModule({
    declarations: [
        ButtonComponent,
        FieldComponent
    ],
    exports: [
        ButtonComponent,
        FieldComponent
    ]
})
export class FormModule {

}
