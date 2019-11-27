'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLEnumType } from 'graphql';

const Privileges = new GraphQLEnumType({
    name: 'Privileges',
    values: {
        ADMIN: {
            value: "admin",
        },
        USER: {
            value: undefined,
        }
    }
})

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        privileges: { type: Privileges }
    }
});