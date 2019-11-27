'use strict';

import { User } from "";

export const getAll = async () => {
    const data = await User.find({}).exec();
    return data;
}

export const getOne = async (_, { id }) => {
    const data = await User.findById(id).exec();
    return data;
}