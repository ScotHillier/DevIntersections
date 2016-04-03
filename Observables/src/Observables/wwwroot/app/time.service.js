System.register(['rxjs/Observable'], function(exports_1) {
    var Observable_1;
    var TimeService;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TimeService = (function () {
                function TimeService() {
                }
                TimeService.prototype.getAsyncTime = function () {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        var count = 0;
                        var id = setInterval(function () {
                            try {
                                count++;
                                if (count > 10) {
                                    observer.complete(); //complete after 10 values
                                    clearInterval(id);
                                }
                                else {
                                    var d = new Date(); //emit next value
                                    observer.next(_this.pad(d.getHours()) + ":" + _this.pad(d.getMinutes()) + ":" + _this.pad(d.getSeconds()));
                                }
                            }
                            catch (err) {
                                observer.error(err); //emit error
                            }
                        }, 1000);
                        return function () {
                            clearInterval(id);
                        };
                    });
                };
                TimeService.prototype.pad = function (inString) {
                    return inString < 10 ? ("0" + inString) : inString;
                };
                return TimeService;
            })();
            exports_1("TimeService", TimeService);
        }
    }
});
//# sourceMappingURL=time.service.js.map