/*  - Código del videoclub (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfigMap } from "graphql";
import { UserType } from "./typedef";
import { getAll, getOne } from "./resolver";


export const userQueries: GraphQLFieldConfigMap<any, any, any> = {
    user: {
        type: UserType,
        description: 'Retrieve single user by id',
        args: {
            id: { type: GraphQLString }
        },
        resolve: getOne
    },
    users: {
        type: GraphQLList(UserType),
        description: 'Find users',
        resolve: getAll
    },
}