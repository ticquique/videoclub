import { Model, Document, QueryPopulateOptions } from "mongoose";

export interface CreateOptions<T> {
  element: Partial<T>;
  populate?: QueryPopulateOptions;
}

export class Creable<T> {
  model: Model<T & Document>;

  create = async (_, params: CreateOptions<T>) => {
    const {element, populate} = params;
    let newElement = await this.model.create(element);
    newElement = populate ? await this.model.populate(newElement, populate) : newElement;
    return newElement;
  }
}


