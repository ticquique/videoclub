'use strict';

import { Rent } from "../../../models";
import { IRent } from "../../../interfaces";
import { All } from "../../methods";

export class RentResolver extends All<IRent>{
    constructor() { 
        super();
        this.model = Rent 
    }
}
