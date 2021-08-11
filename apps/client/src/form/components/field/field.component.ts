import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'form-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
    @Input()
    public label!: string;

    @Input()
    public type!: string;

    @Input()
    public defaultValue!: any;

    @Input()
    public minLength!: number;

    @Input()
    public maxLength!: number;


    @Output()
    public fieldChange: EventEmitter<any> = new EventEmitter<any>();

    public fieldId!: string;
    public value!: any;

    public ngOnInit(): void {
        this.fieldId = `form-${Date.now()}-${Math.floor(Math.random() * 1296).toString(36)}`;
        this.value = this.defaultValue ?? '';
    }

    public onChange(value: Event): void {
        this.fieldChange.emit((value.target as HTMLInputElement).value);
    }
}
