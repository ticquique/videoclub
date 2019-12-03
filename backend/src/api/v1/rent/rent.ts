/*  - Código del rent (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfigMap, GraphQLFieldConfig } from "graphql";
import { RentType } from "./typedef";
import { getAll, getOne } from "./resolver";
import { IRoute } from "@app/api/route";
/**
 * Video routes
 *
 * @export
 * @class RentRouter
 * @extends {IRoute}
 */
export class RentRouter extends IRoute<RentRouter> {

    rent: GraphQLFieldConfig<any, any, any> = {
        type: RentType,
        description: 'Retrieve single rent by id',
        args: { id: { type: GraphQLString } },
        resolve: getOne
    }


    rents: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(RentType),
        description: 'Find rents',
        resolve: getAll
    }

    constructor() {
        super();
        this.routes = { rent: this.rent, rents: this.rents };
        this.protectedRoutes = [{ route: 'rent', privileges: 'admin' }]
    }
}
