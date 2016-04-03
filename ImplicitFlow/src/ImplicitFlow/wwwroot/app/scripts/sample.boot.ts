import {bootstrap} from 'angular2/platform/browser'
import {MainComponent} from './main.component'
import {ListService} from './list.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(MainComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, ListService])