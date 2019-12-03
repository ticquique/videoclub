'use strict';

import { Videoclub } from "@models/index";

export const getAll = async () => {
    const data = await Videoclub.find({}).exec();
    return data;
}

export const getOne = async (_, { id }) => {
    const data = await Videoclub.findById(id).exec();
    return data;
}