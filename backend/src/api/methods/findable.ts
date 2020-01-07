import { Model, Document, Aggregate } from "mongoose";
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLScalarType } from 'graphql';

export interface FindOptions<T> {
  page?: number;
  perPage?: number;
  resource?: any;
  sort?: string;
  populate?: string;
  lean?: boolean;
  aggregate?: any;
}

const findableScalar = new GraphQLScalarType({
  name: 'FindableScalar',
  description: 'Findable type',
  serialize(value: string) { return JSON.parse(value) },
  parseValue(value) { return JSON.stringify(value) }
})

export class Findable<T> {

  model: Model<T & Document>;
  findableScalar = findableScalar;

  constructor(model: Model<T & Document>) {
    this.model = model;
  }

  FindableType = {
    page: { type: GraphQLInt },
    perPage: { type: GraphQLInt },
    resource: {
      type: this.findableScalar
    },
    sort: { type: GraphQLString },
    populate: { type: GraphQLString },
    lean: { type: GraphQLString },
    aggregate: {
      type: this.findableScalar
    }
  };

  find = async (_, params: FindOptions<T>) => {
    let { page = 1, perPage = 20, resource, sort, populate, lean, aggregate } = params;
    resource = aggregate ? resource ? { ...resource, $expr: aggregate } : { $expr: aggregate } : resource;
    let query = resource ? this.model.find(typeof resource === 'string' ? JSON.parse(resource) : resource) : this.model.find({});
    query = perPage ? query.limit(perPage) : query;
    query = page && perPage ? query.skip((page - 1) * perPage) : query;
    query = sort ? query.sort(sort) : query;
    query = populate ? query.populate(populate) : query;
    query = lean ? query.lean() : query;
    const data = await query.exec();
    return data;
  }
}
