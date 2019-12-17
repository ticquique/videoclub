'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const VideoclubType = new GraphQLObjectType({
    name: 'Videoclub',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        manager: { type: GraphQLString },
        city: { type: GraphQLString },
        street: { type: GraphQLString },
        postal_code: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});

export const VideoclubInputType = new GraphQLInputObjectType({
    name: 'VideoclubInput',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        manager: { type: GraphQLNonNull(GraphQLString) },
        city: { type: GraphQLNonNull(GraphQLString) },
        street: { type: GraphQLNonNull(GraphQLString) },
        postal_code: { type: GraphQLNonNull(GraphQLString) },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
})