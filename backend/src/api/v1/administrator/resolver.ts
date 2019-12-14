'use strict';

import { Administrator } from "../../../models";
import { IAdministrator } from "../../../interfaces";
import { All } from "../../methods";

export class AdministratorResolver extends All<IAdministrator>{
    constructor() { 
        super();
        this.model = Administrator 
    }
}
