import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { FieldComponent } from './components/field/field.component';

@NgModule({
    declarations: [
        ButtonComponent,
        FieldComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        ButtonComponent,
        FieldComponent
    ]
})
export class FormModule {

}
