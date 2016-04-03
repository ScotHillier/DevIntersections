import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'

interface AuthContextParams {
    instance: string;
    tenant: string;
    clientId: string;
    postLogoutRedirectUri: string;
    cacheLocation: string;
}

export class AuthClass {

    public static authContext: AuthenticationContext = null;
    public static clientId: string = "";
    public static tenantId: string = "";
    public static resourceId: string = "https://[].sharepoint.com";
    public static endpoint: string = "https://shillier.sharepoint.com/sites/appdev/_api/lists/getbyTitle('Announcements')/items";
    public static digestEndpoint: string = "https://shillier.sharepoint.com/sites/appdev/_api/contextInfo";

    public static createAuthContext() {

        //authorization context
        this.authContext = new AuthenticationContext(
            <AuthContextParams>
            {
                instance: 'https://login.microsoftonline.com/',
                tenant: this.tenantId,
                clientId: this.clientId,
                postLogoutRedirectUri: window.location.origin + "/index.html",
                cacheLocation: 'localStorage'
            });

        //save tokens if this is a return from AAD
        this.authContext.handleWindowCallback();

    }

    public static logIn(): void {
        this.authContext.login();
    }

    public static logOut(): void {
        this.authContext.logOut();
    }

    public static isAuthenticated(): boolean {
        let user: CachedUser = this.authContext.getCachedUser();
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }

    public static getWelcomeMessage(): string {
        let user: CachedUser = this.authContext.getCachedUser();
        if (user) {
            return "Welcome, " + user.userName + "!";
        }
        else {
            return "You are not logged in.";
        }
    }

    public static getAccessToken(): Observable<any> {

        let ctx: AuthenticationContext = this.authContext
        let r: string = this.resourceId;

        return Observable.create(observer => {

            ctx.acquireToken(r, function (error, token) {
                if (error || !token) {
                    observer.error(error);
                }
                else {
                    observer.next(token)
                }
                observer.complete();
            });
        });

    }
}