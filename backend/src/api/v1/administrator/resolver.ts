'use strict';

import { Administrator } from "@models/index";
import { IAdministrator } from "@interfaces/index";
import { All } from "@app/api/methods";

export class AdministratorResolver extends All<IAdministrator>{
    constructor() { 
        super();
        this.model = Administrator 
    }
}
