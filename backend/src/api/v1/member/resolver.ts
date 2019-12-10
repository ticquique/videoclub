'use strict';

import { Member } from "@models/index";
import { IMember } from "@interfaces/index";
import { All } from "@app/api/methods";

export class MemberResolver extends All<IMember>{
    constructor() { 
        super();
        this.model = Member 
    }
}
