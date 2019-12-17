import { Findable, FindOptions } from './findable'
import { Creable, CreateOptions } from './creable';
import { Countable, CountableOptions } from './countable';
import { Model, Document } from 'mongoose';
import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLInputObjectType } from 'graphql';

export * from './countable'
export * from './creable'
export * from './findable'

export interface FindableCreable<T> extends Findable<T>, Creable<T> { }
export class FindableCreable<T> {

    model = null;
    CreableType
    create: (_: any, resource: CreateOptions<T>) => Promise<(T & Document)>
    find: (_: any, params: FindOptions<T>) => Promise<(T & Document)[]>
    FindableType

    constructor(model: Model<T & Document>) {
        this.model = model;
        const findable = new Findable(model)
        const creable = new Creable(model)
        this.CreableType = creable.CreableType;
        this.FindableType = findable.FindableType;
        this.create = creable.create;
        this.find = findable.find;
    }
}

export interface CreableCountable<T> extends Creable<T>, Countable<T> { }
export class CreableCountable<T> {
    model = null;
    CreableType
    create: (_: any, resource: CreateOptions<T>) => Promise<(T & Document)>
    count: (_: any, resource: CountableOptions) => Promise<number>
    CountableType

    constructor(model: Model<T & Document>) {
        this.model = model;
        const creable = new Creable(model)
        const countable = new Countable(model)
        this.CountableType = countable.CountableType;
        this.CreableType = creable.CreableType;
        this.count = countable.count;
        this.create = creable.create;
    }
}

export interface FindableCountable<T> extends Findable<T>, Countable<T> { }
export class FindableCountable<T> {

    model = null;
    count: (_: any, resource: CountableOptions) => Promise<number>
    CountableType
    find: (_: any, params: FindOptions<T>) => Promise<(T & Document)[]>
    FindableType

    constructor(model: Model<T & Document>) {
        this.model = model;
        const findable = new Findable(model)
        const countable = new Countable(model)
        this.CountableType = countable.CountableType;
        this.FindableType = findable.FindableType;
        this.count = countable.count;
        this.find = findable.find;
    }
}

export interface All<T> extends Findable<T>, Countable<T>, Creable<T> { }
export class All<T> {
    model = null;
    CreableType
    create: (_: any, resource: CreateOptions<T>) => Promise<(T & Document)>
    count: (_: any, resource: CountableOptions) => Promise<number>
    CountableType
    find: (_: any, params: FindOptions<T>) => Promise<(T & Document)[]>
    FindableType

    constructor(model: Model<T & Document>) {
        this.model = model;
        const findable = new Findable(model)
        const creable = new Creable(model)
        const countable = new Countable(model)
        this.CountableType = countable.CountableType;
        this.CreableType = creable.CreableType;
        this.FindableType = findable.FindableType;
        this.count = countable.count;
        this.create = creable.create;
        this.find = findable.find;
    }
}

export const QueryPopulateType  = new GraphQLInputObjectType({
    name: 'QueryPopulateType',
    description: 'Query to populate compressed params of the item',
    fields: {
        path: { type: GraphQLString },
        select : { type: GraphQLString },
        match: {type: GraphQLString},
        model: {type: GraphQLString},
    }
})
