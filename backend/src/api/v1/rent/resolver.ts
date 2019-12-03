'use strict';

import { Rent } from "@models/index";

export const getAll = async () => {
    const data = await Rent.find({}).exec();
    return data;
}

export const getOne = async (_, { id }) => {
    const data = await Rent.findById(id).exec();
    return data;
}