'use strict';

import { IVideoclub } from "./videoclub";

export interface IFilm {
    _id: any;
    id?: any;
    videoclub_code: IVideoclub;
    name: string;
    director: string;
    released_at: Date;
    rent_price: number;
    created_at: Date;
    updated_at: Date;
}