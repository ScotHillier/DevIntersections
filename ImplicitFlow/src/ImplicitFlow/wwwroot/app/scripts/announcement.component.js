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
    var AnnouncementComponent;
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
            AnnouncementComponent = (function () {
                function AnnouncementComponent(ls, z) {
                    this.listService = ls;
                    this.zone = z;
                    this.items = [];
                    this.ready = false;
                }
                AnnouncementComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.listService.getItems().subscribe(function (res) {
                        _this.zone.run(function () {
                            for (var i = 0; i < res.length; i++) {
                                _this.items.push({
                                    Title: res[i].Title,
                                    Body: res[i].Body.replace(/(<([^>]+)>)/ig, "")
                                });
                            }
                            _this.ready = true;
                        });
                    });
                };
                AnnouncementComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/templates/list.html',
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [list_service_1.ListService, core_1.NgZone])
                ], AnnouncementComponent);
                return AnnouncementComponent;
            })();
            exports_1("AnnouncementComponent", AnnouncementComponent);
        }
    }
});
//# sourceMappingURL=announcement.component.js.map