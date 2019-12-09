'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLEnumType } from 'graphql';

export const StatisticType = new GraphQLObjectType({
    name: 'Statistic',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});