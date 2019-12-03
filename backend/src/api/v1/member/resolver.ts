'use strict';

import { Member } from "@models/index";

export const getAll = async () => {
    const data = await Member.find({}).exec();
    return data;
}

export const getOne = async (_, { id }) => {
    const data = await Member.findById(id).exec();
    return data;
}