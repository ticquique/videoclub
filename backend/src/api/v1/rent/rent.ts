/*  - Código del rent (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { RentType, RentInputType } from "./typedef";
import { RentResolver } from "./resolver";
import { IRoute } from "../../route";
import { CreateOptions, FindOptions, QueryPopulateType } from "../../methods";
import { IRent } from "../../../interfaces";
/**
 * Video routes
 *
 * @export
 * @class RentRouter
 * @extends {IRoute}
 */
export class RentRouter extends IRoute<RentRouter> {

    resolver = new RentResolver()

    rent: GraphQLFieldConfig<any, any, any> = {
        type: RentType,
        description: 'Retrieve single rent by id',
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    rents: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(RentType),
        description: 'Find rents',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IRent>) => this.resolver.find(null, args)
    }

    mutations = {
        rent: {
            type: RentType,
            description: 'Insert or update videoclub',
            args: { element: { type: GraphQLNonNull(RentInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IRent>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'rent', privileges: 'admin' }] */
    }
}
