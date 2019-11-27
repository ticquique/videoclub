'use strict';

import { IAdministrator } from "@interfaces/index";
import { IMember } from "@interfaces/index";
import { IRent } from "@interfaces/index";

export interface IStatistic {
    _id: any;
    id?: any;
    administrator: IAdministrator;
    member: IMember;
    rents: IRent[];
    amount: number;
    created_at: Date;
    updated_at: Date;
}