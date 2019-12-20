import { Model, Document, QueryPopulateOptions } from "mongoose";
import { GraphQLScalarType, GraphQLString } from "graphql";

export interface CreateOptions<T> {
  element: Partial<T>;
  populate?: QueryPopulateOptions;
}

export class Creable<T> {
  model: Model<T & Document>;

  constructor(model: Model<T & Document>) {
    this.model = model;
  }

  CreableType = {
    element: {
      type: new GraphQLScalarType({
        name: 'CreableScalar',
        description: 'Creable type',
        serialize(value: string) { return JSON.parse(value) },
        parseValue(value: T) { return JSON.stringify(value) }
      })
    },
    populate: { type: GraphQLString }
  };

  create = async (_, params: CreateOptions<T>) => {
    const { element, populate } = params;
    const hasDocument = await this.model.exists({ _id: element['_id'] });
    let document = await (hasDocument ? this.model.findOne(element) : new this.model(element).save());
    document = populate ? await this.model.populate(document, populate) : document;
    return document;
  }
}


