import {Component, OnInit} from 'angular2/core'
import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'
import {TimeService} from './time.service'
import {ProductService} from './product.service'

@Component({
    selector: 'app-main',
    template: `<h1>{{currentTime1}}</h1>
               <h1>{{currentTime2 | async }}</h1>
               <table class="table table-striped">
                   <caption>Products</caption>
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Price</th>
                       </tr>
                   </thead>
                   <tr *ngFor="#product of products">
                       <td>{{ product.ProductName }}</td>
                       <td>{{ product.UnitPrice | currency:'USD':true:'1.2-2' }}</td>
                   </tr>
               </table>`,
    providers: [TimeService, ProductService]
})

export class AppComponent {

    currentTime1: string;
    currentTime2: Observable<string>;
    products: Array<any>;

    constructor(ts:TimeService, ps:ProductService) {

        ts.getAsyncTime().subscribe(
            data => { this.currentTime1 = data; },
            err => { console.error(err); },
            () => { console.info('completed async time'); }
        );

        this.currentTime2 = ts.getAsyncTime();

        ps.getProducts().subscribe(
            products => { this.products = products; },
            err => { console.error(err); },
            () => { console.info('completed getProducts'); }
        );

        ps.getCategoriesAndProducts().subscribe(
            results => {
                var categories = results[0];
                var products = results[1];
            },
            err => { console.error(err); },
            () => { console.info('completed getCategoriesAndProducts'); }
        );
         
        ps.getProductsByCategoryName("Beverages").subscribe(
            products => { var products = products; },
            err => { console.error(err); },
            () => { console.info('completed getProductsByCategoryName'); }
        );

    }

}