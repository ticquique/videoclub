'use strict';

import { IFilm } from "./film";
import { IMember } from "./member";

export interface IRent {
    _id: any;
    id?: any;
    films: IFilm[];
    member: IMember;
    pickup_date: Date;
    devolution_date: Date;
    amount: number;
    created_at: Date;
    updated_at: Date;
}