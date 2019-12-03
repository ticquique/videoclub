'use strict';

import { GraphQLObjectType, GraphQLString } from 'graphql';

export const RentType = new GraphQLObjectType({
    name: 'Rent',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});