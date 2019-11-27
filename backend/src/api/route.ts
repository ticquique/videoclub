'use strict';

import { GraphQLFieldConfigMap } from "graphql";

/**
 * Class every exported route must implement
 *
 * @export
 * @class IRoute
 */
export default class IRoute {
    
    routes: GraphQLFieldConfigMap<any, any, any>;

    constructor(routes: GraphQLFieldConfigMap<any, any, any>) { 
        this.routes = routes;
    }
}

