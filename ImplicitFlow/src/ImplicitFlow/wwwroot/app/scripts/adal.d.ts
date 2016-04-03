interface AuthenticationContextConfig {
    instance: string;
    tenant: string;
    clientId: string;
    postLogoutRedirectUri: string;
    cacheLocation: string;
}

interface CachedUser {
    userName(): string;
}

declare class AuthenticationContext {
    constructor(authenticationContextConfig: AuthenticationContextConfig);
    handleWindowCallback(): void;
    login(): void;
    logOut(): void;
    getCachedUser(): CachedUser;
    acquireToken(resource: string, callback: any);
}
