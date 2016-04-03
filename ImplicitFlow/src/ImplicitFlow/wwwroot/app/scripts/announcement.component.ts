import {Component, NgZone} from 'angular2/core'
import {ListService} from './list.service'
import {Observable} from 'rxjs/Observable'
import {RouterLink} from 'angular2/router';
import {NewFormComponent} from './newform.component'

@Component({
    templateUrl: '/app/templates/list.html',
    directives: [RouterLink]
})

export class AnnouncementComponent {

    items: Array<any>;
    ready: boolean;
    zone: NgZone;
    listService: ListService;

    constructor(ls: ListService, z: NgZone) {
        this.listService = ls;
        this.zone = z;
        this.items = [];
        this.ready = false;
    }

    ngAfterViewInit(): void {
        this.listService.getItems().subscribe(res => {
            this.zone.run(() => {
                for (let i = 0; i < res.length; i++) {
                    this.items.push({
                        Title: res[i].Title,
                        Body: res[i].Body.replace(/(<([^>]+)>)/ig, "")
                    });
                }
                this.ready = true;
            });
        });
    }


}