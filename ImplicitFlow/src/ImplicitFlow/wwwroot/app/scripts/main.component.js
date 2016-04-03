System.register(['angular2/core', 'angular2/router', './profile.component', './announcement.component', './newform.component', './nav.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, profile_component_1, announcement_component_1, newform_component_1, nav_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (announcement_component_1_1) {
                announcement_component_1 = announcement_component_1_1;
            },
            function (newform_component_1_1) {
                newform_component_1 = newform_component_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'app-main',
                        templateUrl: '/app/templates/main.html',
                        directives: [router_1.RouterOutlet, router_1.RouterLink, router_1.ROUTER_DIRECTIVES, nav_component_1.NavComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/announcements', name: 'AnnouncementList', component: announcement_component_1.AnnouncementComponent },
                        { path: '/new', name: 'NewForm', component: newform_component_1.NewFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map