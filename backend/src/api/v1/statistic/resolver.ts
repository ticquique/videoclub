'use strict';

import { Statistic } from "@models/index";
import { IStatistic } from "@interfaces/index";
import { All } from "@app/api/methods";

export class StatisticResolver extends All<IStatistic>{
    constructor() { 
        super();
        this.model = Statistic 
    }
}
