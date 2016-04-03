import {Component, OnInit} from 'angular2/core'
import {RouteConfig, RouterOutlet, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router'
import {ProfileComponent} from './profile.component'
import {AnnouncementComponent} from './announcement.component'
import {NewFormComponent} from './newform.component'
import {NavComponent} from './nav.component'

@Component({
    selector: 'app-main',
    templateUrl: '/app/templates/main.html',
    directives: [RouterOutlet, RouterLink, ROUTER_DIRECTIVES, NavComponent]
})

@RouteConfig([
    { path: '/profile', name: 'Profile', component: ProfileComponent },
    { path: '/announcements', name: 'AnnouncementList', component: AnnouncementComponent },
    { path: '/new', name: 'NewForm', component: NewFormComponent }
])

export class MainComponent {

    constructor() {}
}