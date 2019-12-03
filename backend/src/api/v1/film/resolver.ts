'use strict';

import { Film } from "@models/index";

export const getAll = async () => {
    const data = await Film.find({}).exec();
    return data;
}

export const getOne = async (_, { id }) => {
    const data = await Film.findById(id).exec();
    return data;
}