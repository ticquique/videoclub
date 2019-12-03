'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLEnumType } from 'graphql';

export const MemberType = new GraphQLObjectType({
    name: 'Member',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});