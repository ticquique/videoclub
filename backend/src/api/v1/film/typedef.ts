'use strict';

import { GraphQLObjectType, GraphQLString } from 'graphql';

export const FilmType = new GraphQLObjectType({
    name: 'Film',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});