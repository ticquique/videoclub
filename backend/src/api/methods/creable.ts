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
    const {element, populate} = params;
    console.log(element, populate);
    console.log(params);
    let newElement = await this.model.create(element);
    newElement = populate ? await this.model.populate(newElement, populate) : newElement;
    return newElement;
  }
}


