/*  - Código del film (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfigMap, GraphQLFieldConfig } from "graphql";
import { FilmType } from "./typedef";
import { getAll, getOne } from "./resolver";
import { IRoute } from "@app/api/route";
/**
 * Video routes
 *
 * @export
 * @class FilmRouter
 * @extends {IRoute}
 */
export class FilmRouter extends IRoute<FilmRouter> {

    film: GraphQLFieldConfig<any, any, any> = {
        type: FilmType,
        description: 'Retrieve single film by id',
        args: { id: { type: GraphQLString } },
        resolve: getOne
    }


    films: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(FilmType),
        description: 'Find films',
        resolve: getAll
    }

    constructor() {
        super();
        this.protectedRoutes = [{ route: 'film', privileges: 'admin' }]
    }
}
