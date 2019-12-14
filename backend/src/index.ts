'use strict';

import { ExpressLoader, MongooseLoader } from './loaders';
import { initialLogger } from './utils/logger';

const loaders = [MongooseLoader, ExpressLoader];

(async() => {
    for (const loader of loaders) {
        const loaderInstance = new loader();
        await loaderInstance.load();
        initialLogger.info(`Loaded ${loader.name}`)
    }
})().catch(e => initialLogger.error(e));