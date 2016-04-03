System.register(['angular2/core', './time.service', './product.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, time_service_1, product_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (time_service_1_1) {
                time_service_1 = time_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(ts, ps) {
                    var _this = this;
                    ts.getAsyncTime().subscribe(function (data) { _this.currentTime1 = data; }, function (err) { console.error(err); }, function () { console.info('completed async time'); });
                    this.currentTime2 = ts.getAsyncTime();
                    ps.getProducts().subscribe(function (products) { _this.products = products; }, function (err) { console.error(err); }, function () { console.info('completed getProducts'); });
                    ps.getCategoriesAndProducts().subscribe(function (results) {
                        var categories = results[0];
                        var products = results[1];
                    }, function (err) { console.error(err); }, function () { console.info('completed getCategoriesAndProducts'); });
                    ps.getProductsByCategoryName("Beverages").subscribe(function (products) { var products = products; }, function (err) { console.error(err); }, function () { console.info('completed getProductsByCategoryName'); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-main',
                        template: "<h1>{{currentTime1}}</h1>\n               <h1>{{currentTime2 | async }}</h1>\n               <table class=\"table table-striped\">\n                   <caption>Products</caption>\n                   <thead>\n                       <tr>\n                           <th>Name</th>\n                           <th>Price</th>\n                       </tr>\n                   </thead>\n                   <tr *ngFor=\"#product of products\">\n                       <td>{{ product.ProductName }}</td>\n                       <td>{{ product.UnitPrice | currency:'USD':true:'1.2-2' }}</td>\n                   </tr>\n               </table>",
                        providers: [time_service_1.TimeService, product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [time_service_1.TimeService, product_service_1.ProductService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map