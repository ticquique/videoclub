'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

export const AdministratorType = new GraphQLObjectType({
    name: 'Administrator',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});


export const AdministratorInputType = new GraphQLInputObjectType({
    name: 'AdministratorInput',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        username: { type: new GraphQLNonNull(GraphQLString) },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});