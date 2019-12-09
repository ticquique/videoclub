/*  - Código del administrator (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { AdministratorType } from "./typedef";
import { getAll, getOne } from "./resolver";
import { IRoute } from "@app/api/route";
/**
 * Video routes
 *
 * @export
 * @class AdministratorRouter
 * @extends {IRoute}
 */
export class AdministratorRouter extends IRoute<AdministratorRouter> {

    administrator: GraphQLFieldConfig<any, any, any> = {
        type: AdministratorType,
        description: 'Retrieve single administrator by id',
        args: { id: { type: GraphQLString } },
        resolve: getOne
    }


    administrators: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(AdministratorType),
        description: 'Find administrators',
        resolve: getAll
    }

    constructor() {
        super();
        this.protectedRoutes = [{ route: 'administrator', privileges: 'admin' }]
    }
}
