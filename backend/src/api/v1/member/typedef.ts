'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLEnumType, GraphQLInt, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

export const MemberType = new GraphQLObjectType({
    name: 'Member',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});

export const MemberInputType = new GraphQLInputObjectType({
    name: 'MemberInput',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});