'use strict';

import { Statistic } from "../../../models";
import { IStatistic } from "../../../interfaces";
import { All } from "../../methods";

export class StatisticResolver extends All<IStatistic>{
    constructor() { 
        super(Statistic);
        this.model = Statistic 
    }
}
