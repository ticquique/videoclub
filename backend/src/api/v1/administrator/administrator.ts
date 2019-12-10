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

/**
 * Video routes
 *
 * @export
 * @class AdministratorRouter
 * @extends {IRoute}
 */
export class AdministratorRouter extends IRoute<AdministratorRouter> {
    resolver = new AdministratorResolver();

    administrator: GraphQLFieldConfig<any, any, any> = {
        type: AdministratorType,
        description: 'Retrieve single administrator by id',
        args: { id: { type: GraphQLString } },
        resolve: (_, args) => this.resolver.find(null, { resource: { _id: args.id } })
    }


    administrators: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(AdministratorType),
        description: 'Find administrators',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IAdministrator>) => this.resolver.find(null, args)
    }

    mutations = {
        administrator: {
            type: AdministratorType,
            description: 'Insert or update videoclub',
            resolve: (_, args: CreateOptions<IAdministrator>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'administrator', privileges: 'admin' }] */
    }
}
