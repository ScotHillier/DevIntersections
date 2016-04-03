import {AuthClass} from './auth.class'
import {Component, OnInit} from 'angular2/core'

@Component({
    templateUrl: '/app/templates/profile.html',
})

export class ProfileComponent {

    welcomeMessage: string;

    constructor() {
        this.welcomeMessage = "";
    }

    ngOnInit(): void {
        this.welcomeMessage = AuthClass.getWelcomeMessage();
    }
}