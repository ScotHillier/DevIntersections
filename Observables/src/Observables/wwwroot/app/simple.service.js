System.register([], function(exports_1) {
    var SimpleService;
    return {
        setters:[],
        execute: function() {
            SimpleService = (function () {
                function SimpleService() {
                }
                SimpleService.prototype.getMessage = function () {
                    return "Hello, World!";
                };
                return SimpleService;
            })();
            exports_1("SimpleService", SimpleService);
        }
    }
});
//# sourceMappingURL=simple.service.js.map