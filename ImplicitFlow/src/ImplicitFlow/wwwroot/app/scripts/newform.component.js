System.register(['angular2/core', './list.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, list_service_1, router_1;
    var NewFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewFormComponent = (function () {
                function NewFormComponent(ls, r) {
                    this.listService = ls;
                    this.router = r;
                }
                NewFormComponent.prototype.add = function () {
                    var _this = this;
                    this.listService.addItem(this.title, this.body).subscribe(function (data) { _this.router.navigate(['/AnnouncementList']); }, function (err) { console.error(err); });
                };
                NewFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/templates/new.html'
                    }), 
                    __metadata('design:paramtypes', [list_service_1.ListService, router_1.Router])
                ], NewFormComponent);
                return NewFormComponent;
            })();
            exports_1("NewFormComponent", NewFormComponent);
        }
    }
});
//# sourceMappingURL=newform.component.js.map