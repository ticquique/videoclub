'use strict';

import { IRent , IAdministrator, IMember} from "./index";

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