'use strict';

import { Member } from "../../../models";
import { IMember } from "../../../interfaces";
import { All } from "../../methods";

export class MemberResolver extends All<IMember>{
    constructor() { 
        super(Member);
        this.model = Member 
    }
}
