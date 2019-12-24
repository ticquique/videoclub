/*  - Código del administrator (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { AdministratorResolver } from "./resolver";
import { IRoute } from "../../route";
import { AdministratorType, AdministratorInputType } from "./typedef";
import { IAdministrator } from "../../../interfaces";
import { CreateOptions, FindOptions, QueryPopulateType } from "../../methods";

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
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
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
            description: 'Insert or update administrator',
            args: { element: { type: GraphQLNonNull(AdministratorInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IAdministrator>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'administrator', privileges: 'admin' }] */
    }
}
