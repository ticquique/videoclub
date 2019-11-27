'use strict';

import { IStatistic } from "./statistic";

export interface IAdministrator {
    _id: any;
    id?: any;
    name: string;
    created_at: Date;
    updated_at: Date;
}