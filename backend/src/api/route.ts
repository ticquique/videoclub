'use strict';

import { GraphQLFieldConfig } from "graphql";

interface GenericField { [name: string]: GraphQLFieldConfig<any, any, any> };

/**
 * Class every exported route must implement
 *
 * @export
 * @class IRoute
 */
export class IRoute<T extends {
    mutations: Partial<{ [any: string]: GraphQLFieldConfig<any, any, any> }>
}> {

    routes: Partial<Omit<Omit<T, keyof IRoute<T>>, 'mutations'>>;
    protectedRoutes: { route: keyof Partial<Omit<T, keyof IRoute<T>>>, privileges: 'admin' | 'authenticated' }[]
    mutations: T['mutations']

    constructor() {
        this.routes = Reflect.ownKeys(this).filter(v => v !== 'routes' && v !== 'protectedRoutes' && v !== 'mutations').reduce((old, current) => ({
            ...old,
            [current]: Reflect.getOwnPropertyDescriptor(this, current).value
        }), {});
    }

    getRoutes() {
        return this.routes;
    };

    getMutations() {
        return this.mutations;
    };

    getProtectedRoutes() {
        return this.protectedRoutes;
    };

}
