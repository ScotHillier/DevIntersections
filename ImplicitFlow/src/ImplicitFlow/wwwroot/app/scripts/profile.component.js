System.register(['./auth.class', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var auth_class_1, core_1;
    var ProfileComponent;
    return {
        setters:[
            function (auth_class_1_1) {
                auth_class_1 = auth_class_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent() {
                    this.welcomeMessage = "";
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.welcomeMessage = auth_class_1.AuthClass.getWelcomeMessage();
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/templates/profile.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileComponent);
                return ProfileComponent;
            })();
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map