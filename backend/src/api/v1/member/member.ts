/*  - Código del member (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { MemberType } from "./typedef";
import { IRoute } from "../../route";
import { MemberResolver } from "./resolver";
import { FindOptions, CreateOptions } from "../../methods";
import { IMember } from "../../../interfaces";
/**
 * Video routes
 *
 * @export
 * @class MemberRouter
 * @extends {IRoute}
 */
export class MemberRouter extends IRoute<MemberRouter> {

    resolver = new MemberResolver();

    member: GraphQLFieldConfig<any, any, any> = {
        type: MemberType,
        description: 'Retrieve single member by id',
        args: { id: { type: GraphQLString } },
        resolve: (_, args) => this.resolver.find(null, { resource: { _id: args.id } })
    }


    members: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(MemberType),
        description: 'Find members',
        resolve: (_, args: FindOptions<IMember>) => this.resolver.find(null, args)
    }

    mutations = {
        member: {
            type: MemberType,
            description: 'Insert or update videoclub',
            resolve: (_, args: CreateOptions<IMember>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'member', privileges: 'admin' }] */
    }
}
