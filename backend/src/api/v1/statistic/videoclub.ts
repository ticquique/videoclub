/*  - Código del videoclub (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfigMap, GraphQLFieldConfig } from "graphql";
import { VideoclubType } from "./typedef";
import { getAll, getOne } from "./resolver";
import { IRoute } from "@app/api/route";
/**
 * Video routes
 *
 * @export
 * @class VideoclubRouter
 * @extends {IRoute}
 */
export class VideoclubRouter extends IRoute<VideoclubRouter> {

    videoclub: GraphQLFieldConfig<any, any, any> = {
        type: VideoclubType,
        description: 'Retrieve single videoclub by id',
        args: { id: { type: GraphQLString } },
        resolve: getOne
    }


    videoclubs: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(VideoclubType),
        description: 'Find videoclubs',
        resolve: getAll
    }

    constructor() {
        super();
        this.routes = { videoclub: this.videoclub, videoclubs: this.videoclubs };
        this.protectedRoutes = [{ route: 'videoclub', privileges: 'admin' }]
    }
}
