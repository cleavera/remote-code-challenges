import { Component, Input, OnInit } from '@angular/core';

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

    public fieldId!: string;

    public ngOnInit(): void {
        this.fieldId = `form-${Date.now()}-${Math.floor(Math.random() * 1296).toString(36)}`;
    }
}
