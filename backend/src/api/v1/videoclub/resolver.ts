'use strict';

import { Videoclub } from "../../../models";
import { IVideoclub } from "../../../interfaces";
import { All } from "../../methods";

export class VideoclubResolver extends All<IVideoclub>{
    constructor() {
        super(Videoclub);
    }
}
