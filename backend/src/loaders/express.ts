'use strict';

import getEnv from "@env";
import ILoader from "@loaders/interfaces";
import { schema } from '../api/v1';
import * as express from "express";
import * as log4js from 'log4js';
import { httpLogger, initialLogger } from "@utils/logger";
/**
 * Loader for express application
 *
 * @export
 * @class ExpressLoader
 * @implements {ILoader<Express.Application>}
 */
export class ExpressLoader implements ILoader<Express.Application> {
    async load() {
        const app = express();
        const env = await getEnv();

        const port = +env.express.port;
        const host = env.express.host;

        app.use(log4js.connectLogger(httpLogger, { level: 'debug' }));
        app.use(
            '/graphql',
            schema,
        );

        app.listen(port, host, () => {
            initialLogger.info(`STARTING SERVER  http://${host}:${port} on ${env.production ? 'PRODUCTION' : 'DEVELOPMENT'} mode`);
        });
        return app;
    }
}
