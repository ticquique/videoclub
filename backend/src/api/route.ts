'use strict';

/**
 * Class every exported route must implement
 *
 * @export
 * @class IRoute
 */
export class IRoute<T> {
    
    routes: Omit<T, keyof IRoute<T>>;
    protectedRoutes: {route: keyof Omit<T, keyof IRoute<T>>, privileges: 'admin' | 'authenticated'}[]

    getRoutes() {
        return this.routes;
    };

    getProtectedRoutes() {
        return this.protectedRoutes;
    };

}
