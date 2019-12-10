'use strict';

import { Rent } from "@models/index";
import { IRent } from "@interfaces/index";
import { All } from "@app/api/methods";

export class RentResolver extends All<IRent>{
    constructor() { 
        super();
        this.model = Rent 
    }
}
