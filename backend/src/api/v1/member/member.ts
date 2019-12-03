/*  - Código del member (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { MemberType } from "./typedef";
import { getAll, getOne } from "./resolver";
import { IRoute } from "@app/api/route";
/**
 * Video routes
 *
 * @export
 * @class MemberRouter
 * @extends {IRoute}
 */
export class MemberRouter extends IRoute<MemberRouter> {

    member: GraphQLFieldConfig<any, any, any> = {
        type: MemberType,
        description: 'Retrieve single member by id',
        args: { id: { type: GraphQLString } },
        resolve: getOne
    }


    members: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(MemberType),
        description: 'Find members',
        resolve: getAll
    }

    constructor() {
        super();
        this.routes = { member: this.member, members: this.members };
        this.protectedRoutes = [{ route: 'member', privileges: 'admin' }]
    }
}
