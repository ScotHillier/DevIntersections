System.register([], function(exports_1) {
    var Welcome;
    return {
        setters:[],
        execute: function() {
            //modules export something to be used in an Angular 2 component
            Welcome = (function () {
                function Welcome() {
                }
                Welcome.getMessage = function () {
                    return 'Hello, World!';
                };
                return Welcome;
            })();
            exports_1("Welcome", Welcome);
        }
    }
});
//# sourceMappingURL=app.module.js.map