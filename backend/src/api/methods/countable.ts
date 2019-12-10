import { Model, Document } from "mongoose";

export interface CountableOptions {
  resource: any;
}

export class Countable<T> {
  model: Model<T & Document>;
  count = async (_, resource: CountableOptions) => {
    let query = resource ? this.model.countDocuments(resource) : this.model.countDocuments({});
    return await query.exec();
  }
}
