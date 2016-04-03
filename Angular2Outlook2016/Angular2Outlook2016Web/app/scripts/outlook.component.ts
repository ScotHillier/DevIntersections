import {Component} from 'angular2/core'

@Component({
    selector: 'outlook-app',
    templateUrl: '/app/templates/compose.html'
})

export class OutlookComponent {

    responses: Array<any>;

    constructor() {
        this.responses = ['OK', 'Running late', 'On my way'];
    }

    public insertResponse(response: string): void {
        var item: Office.Types.ItemCompose = <Office.Types.ItemCompose>Office.context.mailbox.item;
        item.body.setSelectedDataAsync(response);
    }

}