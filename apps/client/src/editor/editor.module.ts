import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
    declarations: [
        EditorComponent
    ],
    imports: [
        FormsModule,
        MonacoEditorModule.forRoot()
    ],
    exports: [
        EditorComponent
    ],
    providers: []
})
export class EditorModule {
}
