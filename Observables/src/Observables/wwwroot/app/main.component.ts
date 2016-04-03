import {Component, OnInit} from 'angular2/core'
import {RouteConfig, RouterOutlet} from 'angular2/router'
import {NavComponent} from './nav.component'
import {SimpleComponent} from './simple.component'
import {TimeComponent} from './time.component'
import {ProductComponent} from './product.component'

@Component({
    selector: 'app-main',
    templateUrl: '/app/templates/main.html',
    directives: [NavComponent, RouterOutlet]
})

@RouteConfig([
    { path: '/simple', name: 'Simple', component: SimpleComponent },
    { path: '/time', name: 'Time', component: TimeComponent },
    { path: '/product', name: 'Http', component: ProductComponent }

])

export class MainComponent {

    constructor() { }
}