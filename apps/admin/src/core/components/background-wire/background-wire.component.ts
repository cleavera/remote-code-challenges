import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-background-wire',
    templateUrl: './background-wire.component.html',
    styleUrls: ['./background-wire.component.css']
})
export class BackgroundWireComponent implements OnInit {
    private _element: HTMLElement;

    constructor(element: ElementRef) {
        this._element = element.nativeElement;
    }

    public ngOnInit(): void {
        const animationLength: number = this.randomAnimationLength();
        this._element.style.setProperty('--wire-animation-rotation', this.randomAngle());
        this._element.style.setProperty('--wire-animation-length', `${animationLength}s`);
        this._element.style.setProperty('--wire-animation-delay', this.animationDelay(animationLength));
        this._element.style.setProperty('--wire-animation-offset', this.randomOffset());
    }

    public randomAngle(): string {
        return `${Math.floor(Math.random() * 360)}deg`;
    }

    public randomOffset(): string {
        return `${Math.floor(Math.random() * 50) - 25}vw`;
    }

    public randomAnimationLength(): number {
        return Math.floor(Math.random() * 60) + 30;
    }

    public animationDelay(animationLength: number): string {
        return `-${Math.floor(Math.random() * animationLength)}s`;
    }
}
