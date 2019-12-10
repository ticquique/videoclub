/*  - Código del administrator (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { AdministratorResolver } from "./resolver";
import { IRoute } from "@app/api/route";
import { AdministratorType } from "./typedef";
import { IAdministrator } from "@app/interfaces";
import { CreateOptions, FindOptions } from "@app/api/methods";

const resolver = new AdministratorResolver();

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
        resolve: (_, args) => resolver.find(null, { resource: { _id: args.id } })
    }


    administrators: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(AdministratorType),
        description: 'Find administrators',
        args: resolver.FindableType,
        resolve: (_, args: FindOptions<IAdministrator>) => resolver.find(null, args)
    }

    mutations = {
        administrator: {
            type: AdministratorType,
            description: 'Insert or update videoclub',
            resolve: (_, args: CreateOptions<IAdministrator>) => resolver.create(null, args)
        }
    }

    constructor() {
        super();
        this.protectedRoutes = [{ route: 'administrator', privileges: 'admin' }]
    }
}
