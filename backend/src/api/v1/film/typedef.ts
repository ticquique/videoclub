'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import { VideoclubType } from '../videoclub/typedef';
import { VideoclubResolver } from '../videoclub/resolver';

const videoclubResolver = new VideoclubResolver();

export const FilmType = new GraphQLObjectType({
    name: 'Film',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        videoclub_code: { type: GraphQLString },
        videoclub: {
            type: VideoclubType,
            resolve: async (parent, _) => (await videoclubResolver.find(null, {page: 1, perPage: 1, resource: { _id: parent.videoclub_code } }))?.[0] ?? null
        },
        name: { type: GraphQLString },
        director: { type: GraphQLString },
        released_at: { type: GraphQLString },
        rent_price: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});

export const FilmInputType = new GraphQLInputObjectType({
    name: 'FilmInput',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        videoclub_code: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        director: { type: GraphQLNonNull(GraphQLString) },
        released_at: { type: GraphQLNonNull(GraphQLString) },
        rent_price: { type: GraphQLNonNull(GraphQLInt) },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});
