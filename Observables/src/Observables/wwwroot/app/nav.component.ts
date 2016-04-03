import {Component, Directive, View} from 'angular2/core'
import {RouterLink } from 'angular2/router';

@Component({
    selector: 'app-nav'
})

@View({
    directives: [RouterLink],
    templateUrl: '/app/templates/nav.html'
})

export class NavComponent {

    constructor() {
    }

}