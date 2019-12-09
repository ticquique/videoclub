/*  - Código del statistic (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { StatisticType } from "./typedef";
import { getAll, getOne } from "./resolver";
import { IRoute } from "@app/api/route";
/**
 * Video routes
 *
 * @export
 * @class StatisticRouter
 * @extends {IRoute}
 */
export class StatisticRouter extends IRoute<StatisticRouter> {

    statistic: GraphQLFieldConfig<any, any, any> = {
        type: StatisticType,
        description: 'Retrieve single statistic by id',
        args: { id: { type: GraphQLString } },
        resolve: getOne
    }


    statistics: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(StatisticType),
        description: 'Find statistics',
        resolve: getAll
    }

    constructor() {
        super();
        this.protectedRoutes = [{ route: 'statistic', privileges: 'admin' }]
    }
}
