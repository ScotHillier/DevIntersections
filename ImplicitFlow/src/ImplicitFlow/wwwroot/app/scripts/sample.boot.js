System.register(['angular2/platform/browser', './main.component', './list.service', 'angular2/http', 'angular2/router'], function(exports_1) {
    var browser_1, main_component_1, list_service_1, http_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_component_1.MainComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, list_service_1.ListService]);
        }
    }
});
//# sourceMappingURL=sample.boot.js.map