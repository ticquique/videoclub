'use strict';

import { IFilm } from "./film";

export interface IRent {
    _id: any;
    id?: any;
    films: IFilm[];
    pickup_date: Date;
    devolution_date: Date;
    amount: number;
    created_at: Date;
    updated_at: Date;
}