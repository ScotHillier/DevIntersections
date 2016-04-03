System.register(['rxjs/Observable'], function(exports_1) {
    var Observable_1;
    var WelcomeService;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WelcomeService = (function () {
                function WelcomeService() {
                }
                WelcomeService.prototype.getMessage = function () {
                    return Observable_1.Observable.create(function (observer) {
                        this.ctx = new SP.ClientContext.get_current();
                        this.user = this.ctx.get_web().get_currentUser();
                        this.ctx.load(this.user);
                        this.ctx.executeQueryAsync(Function.createDelegate(this, function () {
                            observer.next("Welcome, " + this.user.get_title() + "!");
                        }), Function.createDelegate(this, function (sender, args) {
                            observer.error(args.get_message());
                        }));
                    });
                };
                return WelcomeService;
            })();
            exports_1("WelcomeService", WelcomeService);
        }
    }
});
//# sourceMappingURL=app.service.js.map