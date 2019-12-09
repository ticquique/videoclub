'use strict';

import { Statistic } from "@models/index";

export const getAll = async () => {
    const data = await Statistic.find({}).exec();
    return data;
}

export const getOne = async (_, { id }) => {
    const data = await Statistic.findById(id).exec();
    return data;
}