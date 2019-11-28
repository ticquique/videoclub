/*  - Código del videoclub (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfigMap, GraphQLFieldConfig } from "graphql";
import { VideoclubType } from "./typedef";
import { getAll, getOne } from "./resolver";
import IRoute from "@app/api/route";

export class VideoclubRouter extends IRoute
{

    user: GraphQLFieldConfig<any, any, any> = {
        type: VideoclubType,
        description: 'Retrieve single user by id',
        args: { id: { type: GraphQLString } },
        resolve: getOne
    }


    users: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(VideoclubType),
        description: 'Find users',
        resolve: getAll
    }

    constructor()
    {
        super();
        this.routes = {user: this.user, users: this.users};
    }
}
