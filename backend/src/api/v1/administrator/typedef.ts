'use strict';

import { GraphQLObjectType, GraphQLString } from 'graphql';

export const AdministratorType = new GraphQLObjectType({
    name: 'Administrator',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});