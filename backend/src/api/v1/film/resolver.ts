'use strict';

import { Film } from "../../../models";
import { IFilm } from "../../../interfaces";
import { All } from "../../methods";

export class FilmResolver extends All<IFilm>{
    constructor() { 
        super();
        this.model = Film 
    }
}
