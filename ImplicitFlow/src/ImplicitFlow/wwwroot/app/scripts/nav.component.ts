import {AuthClass} from './auth.class'
import {Component, Directive, View} from 'angular2/core'
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'app-nav',
    templateUrl: '/app/templates/nav.html',
    directives: [RouterLink]
})

export class NavComponent {

    isAuthenticated: boolean;

    constructor() {
        AuthClass.createAuthContext();
        this.isAuthenticated = AuthClass.isAuthenticated();
    }

    logIn(): void {
        AuthClass.logIn();
    }

    logOut(): void {
        AuthClass.logOut();
    }
}