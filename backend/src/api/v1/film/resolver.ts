'use strict';

import { Film } from "@models/index";
import { IFilm } from "@interfaces/index";
import { All } from "@app/api/methods";

export class FilmResolver extends All<IFilm>{
    constructor() { 
        super();
        this.model = Film 
    }
}
