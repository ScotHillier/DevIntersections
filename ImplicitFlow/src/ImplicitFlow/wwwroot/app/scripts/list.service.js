System.register(['./auth.class', 'rxjs/Observable', 'angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var auth_class_1, Observable_1, core_1, http_1;
    var ListService;
    return {
        setters:[
            function (auth_class_1_1) {
                auth_class_1 = auth_class_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ListService = (function () {
                function ListService(http) {
                    this.httpService = http;
                }
                ListService.prototype.getItems = function () {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        auth_class_1.AuthClass.getAccessToken().subscribe(function (token) {
                            if (token.length > 0) {
                                _this.httpService.get(auth_class_1.AuthClass.endpoint, {
                                    headers: new http_1.Headers({
                                        "Authorization": "Bearer " + token,
                                        "Accept": "application/json"
                                    })
                                }).subscribe(function (res) {
                                    if (res.status === 200) {
                                        observer.next(res.json().value);
                                    }
                                    else {
                                        observer.error(res.status);
                                    }
                                });
                            }
                        });
                    });
                };
                ListService.prototype.addItem = function (title, body) {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        auth_class_1.AuthClass.getAccessToken().subscribe(function (token) {
                            if (token.length > 0) {
                                _this.httpService.post(auth_class_1.AuthClass.endpoint, JSON.stringify({
                                    "Title": title,
                                    "Body": body
                                }), { headers: new http_1.Headers({
                                        "Authorization": "Bearer " + token,
                                        "Accept": "application/json",
                                        "Content-Type": "application/json"
                                    })
                                }).subscribe(function (res) {
                                    if (res.status === 201) {
                                        observer.next(true);
                                    }
                                    else {
                                        observer.error(res.status);
                                    }
                                });
                            }
                        });
                    });
                };
                ListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ListService);
                return ListService;
            })();
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=list.service.js.map