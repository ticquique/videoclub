'use strict';

import getEnv from "../env";
import ILoader from "./interfaces";
import { connect } from "mongoose";
import { MongoClientOptions } from "mongodb";

/**
 * Loader for mongoose application
 *
 * @export
 * @class MongooseLoader
 * @implements {ILoader<typeof import("mongoose")>}
 */
export class MongooseLoader implements ILoader<typeof import("mongoose")> {
    async load() {
        const env = await getEnv();
        const auth = { user: env.mongo.username, password: env.mongo.password };
        const options: MongoClientOptions = {auth, useNewUrlParser: true, authSource: 'admin', useUnifiedTopology: true }
        const mongoose = await connect(`mongodb://mongo:27017/${env.mongo.database}`, options);
        return mongoose;
    }
}
