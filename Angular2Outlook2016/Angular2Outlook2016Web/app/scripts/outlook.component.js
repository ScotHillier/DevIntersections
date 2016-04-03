System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var OutlookComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OutlookComponent = (function () {
                function OutlookComponent() {
                    this.responses = ['OK', 'Running late', 'On my way'];
                }
                OutlookComponent.prototype.insertResponse = function (response) {
                    var item = Office.context.mailbox.item;
                    item.body.setSelectedDataAsync(response);
                };
                OutlookComponent = __decorate([
                    core_1.Component({
                        selector: 'outlook-app',
                        templateUrl: '/app/templates/compose.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OutlookComponent);
                return OutlookComponent;
            })();
            exports_1("OutlookComponent", OutlookComponent);
        }
    }
});
//# sourceMappingURL=outlook.component.js.map