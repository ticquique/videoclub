/*  - Código del rent (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { RentType } from "./typedef";
import { RentResolver } from "./resolver";
import { IRoute } from "../../route";
import { CreateOptions, FindOptions } from "../../methods";
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
        args: { id: { type: GraphQLString } },
        resolve: (_, args) => this.resolver.find(null, { resource: { _id: args.id } })
    }


    rents: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(RentType),
        description: 'Find rents',
        resolve: (_, args: FindOptions<IRent>) => this.resolver.find(null, args)
    }

    mutations = {
        rent: {
            type: RentType,
            description: 'Insert or update videoclub',
            resolve: (_, args: CreateOptions<IRent>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'rent', privileges: 'admin' }] */
    }
}
