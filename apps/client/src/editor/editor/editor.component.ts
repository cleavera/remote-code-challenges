import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'editor-editor',
    styleUrls: ['./editor.component.css'],
    templateUrl: './editor.component.html'
})
export class EditorComponent {
    @Input()
    public set defaultValue(value: string) {
        this.code = value;
    }

    @Output()
    public editorChange: EventEmitter<string> = new EventEmitter<string>();

    public onChange(): void {
        this.editorChange.emit(this.code);
    }

    public editorOptions = {
        theme: 'vs-dark',
        language: 'javascript'
    };

    public code: string = '';
}
