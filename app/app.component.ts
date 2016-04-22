import {Component} from 'angular2/core';
import {DeveloperComponent} from './developer.component';
import {DevService} from './dev.service';

@Component({
    selector: 'my-app',
    directives: [DeveloperComponent],
    providers: [DevService],
    template: `
        <h1>Hello World</h1>
       
        <developer 
            *ngFor="#dev of devs.list" 
            [name]="dev" 
            (selected)="devSelected($event)">
        </developer>
    ` 
})
export class AppComponent {
    constructor(public devs:DevService) {
    }
    
    devSelected(name) {
        alert(name);
    }
}