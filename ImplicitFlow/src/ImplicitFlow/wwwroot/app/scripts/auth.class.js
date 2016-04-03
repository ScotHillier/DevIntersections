System.register(['rxjs/Observable'], function(exports_1) {
    var Observable_1;
    var AuthClass;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AuthClass = (function () {
                function AuthClass() {
                }
                AuthClass.createAuthContext = function () {
                    //authorization context
                    this.authContext = new AuthenticationContext({
                        instance: 'https://login.microsoftonline.com/',
                        tenant: this.tenantId,
                        clientId: this.clientId,
                        postLogoutRedirectUri: window.location.origin + "/index.html",
                        cacheLocation: 'localStorage'
                    });
                    //save tokens if this is a return from AAD
                    this.authContext.handleWindowCallback();
                };
                AuthClass.logIn = function () {
                    this.authContext.login();
                };
                AuthClass.logOut = function () {
                    this.authContext.logOut();
                };
                AuthClass.isAuthenticated = function () {
                    var user = this.authContext.getCachedUser();
                    if (user) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                AuthClass.getWelcomeMessage = function () {
                    var user = this.authContext.getCachedUser();
                    if (user) {
                        return "Welcome, " + user.userName + "!";
                    }
                    else {
                        return "You are not logged in.";
                    }
                };
                AuthClass.getAccessToken = function () {
                    var ctx = this.authContext;
                    var r = this.resourceId;
                    return Observable_1.Observable.create(function (observer) {
                        ctx.acquireToken(r, function (error, token) {
                            if (error || !token) {
                                observer.error(error);
                            }
                            else {
                                observer.next(token);
                            }
                            observer.complete();
                        });
                    });
                };
                AuthClass.authContext = null;
                AuthClass.clientId = "";
                AuthClass.tenantId = "";
                AuthClass.resourceId = "https://[].sharepoint.com";
                AuthClass.endpoint = "https://shillier.sharepoint.com/sites/appdev/_api/lists/getbyTitle('Announcements')/items";
                AuthClass.digestEndpoint = "https://shillier.sharepoint.com/sites/appdev/_api/contextInfo";
                return AuthClass;
            })();
            exports_1("AuthClass", AuthClass);
        }
    }
});
//# sourceMappingURL=auth.class.js.map