'use strict';

import { Administrator } from "@models/index";

export const getAll = async () => {
    const data = await Administrator.find({}).exec();
    return data;
}

export const getOne = async (_, { id }) => {
    const data = await Administrator.findById(id).exec();
    return data;
}