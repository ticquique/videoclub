'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLEnumType, GraphQLList, GraphQLFloat, GraphQLNonNull } from 'graphql';
import { AdministratorType } from '../administrator/typedef';
import { MemberType } from '../member/typedef';
import { RentType } from '../rent/typedef';
import { MemberResolver } from '../member/resolver';
import { AdministratorResolver } from '../administrator/resolver';
import { RentResolver } from '../rent/resolver';

const memberResolver = new MemberResolver()
const administratorResolver = new AdministratorResolver()
const rentResolver = new RentResolver()

export const StatisticType = new GraphQLObjectType({
    name: 'StatisticType',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        administrator: { 
            resolve: async (parent, _) => (await administratorResolver.find(null, { page: 1, perPage: 1, resource: { _id: parent.administrator } }))?.[0] ?? null,
            type: AdministratorType
        },
        member: {
            resolve: async (parent, _) => (await memberResolver.find(null, { page: 1, perPage: 1, resource: { _id: parent.member } }))?.[0] ?? null,
            type: MemberType 
        },
        rents: { 
            resolve: async (parent, _) => await rentResolver.find(null, { page: 1, perPage: 1, resource: { _id: {$in: parent.administrator} } }),
            type: GraphQLList(RentType)
        },
        amount: { type: GraphQLFloat },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});

export const StatisticInputType = new GraphQLObjectType({
    name: 'StatisticInputType',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        administrator: { type: GraphQLNonNull(GraphQLString) },
        member: { type: GraphQLNonNull(GraphQLString) },
        rents: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
        amount: { type: GraphQLFloat },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});
