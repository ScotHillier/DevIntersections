import {Component} from 'angular2/core'
import {ListService} from './list.service'
import {Observable} from 'rxjs/Observable'
import {Router} from 'angular2/router'

@Component({
    templateUrl: '/app/templates/new.html'
})

export class NewFormComponent {

    title: string;
    body: string;
    listService: ListService;
    router: Router;

    constructor(ls: ListService, r: Router) {
        this.listService = ls;
        this.router = r;
    }

    add(): void {
        this.listService.addItem(this.title, this.body).subscribe(
            data => { this.router.navigate(['/AnnouncementList']); },
            err => { console.error(err); }
        );
    }
}