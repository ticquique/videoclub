'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';
import { FilmType } from '../film/typedef';
import { MemberType } from '../member/typedef';
import { FilmResolver } from '../film/resolver';
import { MemberResolver } from '../member/resolver';

const filmResolver = new FilmResolver();
const memberResolver = new MemberResolver();

export const RentType = new GraphQLObjectType({
    name: 'RentType',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        films: {
            type: GraphQLList(FilmType),
            resolve: async (parent, _) => (await filmResolver.find(null, {resource: { _id: { $in: parent.films } } }))
        },
        member: { 
            type: MemberType,
            resolve: async (parent, _) => (await memberResolver.find(null, { page: 1, perPage: 1, resource: { _id: parent.member } }))?.[0] ?? null
        },
        pickup_date: { type: GraphQLString },
        devolution_date: { type: GraphQLString },
        amount: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});

export const RentInputType = new GraphQLInputObjectType({
    name: 'RentInputType',
    fields: {
        _id: { type: GraphQLString },
        id: { type: GraphQLString },
        films: { type: GraphQLList(GraphQLString) },
        member: { type: GraphQLString },
        pickup_date: { type: GraphQLString },
        devolution_date: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    }
});