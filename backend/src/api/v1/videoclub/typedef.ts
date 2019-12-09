'use strict';

import { GraphQLObjectType, GraphQLString } from 'graphql';

export const VideoclubType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});