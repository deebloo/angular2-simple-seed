import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'developer',
    styles: [`
        button {
            background: red;
        }
    `],
    template: `
        <button (click)="btnClicked()">{{name}}</button>
    ` 
})
export class DeveloperComponent {
    @Input()
    name:string;
    
    @Output()
    selected:EventEmitter<String> = new EventEmitter();
    
    btnClicked() {
        this.selected.emit(this.name);
    }
}