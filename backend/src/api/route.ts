'use strict';

import { GraphQLFieldConfig } from "graphql";

/**
 * Class every exported route must implement
 *
 * @export
 * @class IRoute
 */
export class IRoute<T extends {
    mutations: any
}> {

    routes: Partial<Omit<Omit<T, keyof IRoute<T>>, 'mutations' | 'resolver'>>;
    protectedRoutes: { route: keyof Partial<Omit<T, keyof IRoute<T>>>, privileges: 'admin' | 'authenticated' }[] = []
    mutations: T['mutations']

    constructor() {
    }

    getRoutes() {
        this.routes = Reflect.ownKeys(this).filter(v => v !== 'routes' && v !== 'protectedRoutes' && v !== 'mutations' && v !== 'resolver').reduce((old, current) => ({
            ...old,
            [current]: Reflect.getOwnPropertyDescriptor(this, current).value
        }), {});
        return this.routes;
    };

    getMutations() {
        return this.mutations;
    };

    getProtectedRoutes() {
        return this.protectedRoutes;
    };

}
