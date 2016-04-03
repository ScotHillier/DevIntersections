System.register(['angular2/platform/browser', './outlook.component'], function(exports_1) {
    var browser_1, outlook_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (outlook_component_1_1) {
                outlook_component_1 = outlook_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(outlook_component_1.OutlookComponent, []);
        }
    }
});
//# sourceMappingURL=boot.js.map