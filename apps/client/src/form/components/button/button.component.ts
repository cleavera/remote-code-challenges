import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'form-button',
    styleUrls: ['./button.component.css'],
    templateUrl: './button.component.html'
})
export class ButtonComponent {
    @Input()
    public label!: string;

    @Output()
    public buttonClick: EventEmitter<void> = new EventEmitter<void>();

    public onClick(): void {
        this.buttonClick.emit();
    }
}
