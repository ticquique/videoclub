import { Model, Document } from "mongoose";
import { GraphQLScalarType } from "graphql";

export interface CountableOptions {
  resource: any;
}

export class Countable<T> {
  model: Model<T & Document>;

  constructor(model: Model<T & Document>) {
    this.model = model;
  }

  CountableType = {
    element: {
      type: new GraphQLScalarType({
        name: 'CountableScalar',
        description: 'Countable type',
        serialize(value: string) { return JSON.parse(value) },
        parseValue(value: T) { return JSON.stringify(value) }
      })
    },
  };

  count = async (_, resource: CountableOptions) => {
    let query = resource ? this.model.countDocuments(resource) : this.model.countDocuments({});
    return await query.exec();
  }
}
