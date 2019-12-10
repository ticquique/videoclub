'use strict';

import { Videoclub } from "@models/index";
import { IVideoclub } from "@interfaces/index";
import { All } from "@app/api/methods";

export class VideoclubResolver extends All<IVideoclub>{
    constructor() { 
        super();
        this.model = Videoclub 
    }
}
