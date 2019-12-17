/*  - Código del member (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { MemberType, MemberInputType } from "./typedef";
import { IRoute } from "../../route";
import { MemberResolver } from "./resolver";
import { FindOptions, CreateOptions, QueryPopulateType } from "../../methods";
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
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    members: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(MemberType),
        args: this.resolver.FindableType,
        description: 'Find members',
        resolve: (_, args: FindOptions<IMember>) => this.resolver.find(null, args)
    }

    mutations = {
        member: {
            type: MemberType,
            description: 'Insert or update videoclub',
            args: { element: { type: MemberInputType }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IMember>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'member', privileges: 'admin' }] */
    }
}
