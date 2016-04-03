System.register(['rxjs/Observable'], function(exports_1) {
    var Observable_1;
    var Welcome;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                }
                Welcome.prototype.getMessage = function () {
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
                return Welcome;
            })();
            exports_1("Welcome", Welcome);
        }
    }
});
//# sourceMappingURL=app.module.js.map