import {WelcomeService} from './app.service'
import {Component} from 'angular2/core'
import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'

@Component({
    selector: 'app-main',
    template: '<h1>{{message | async}}</h1>',
    providers: [WelcomeService]
})

export class AppComponent {

    message: Observable<string>;

    constructor(ws:WelcomeService) {
        this.message = ws.getMessage();
    }

}