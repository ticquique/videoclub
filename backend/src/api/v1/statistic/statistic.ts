/*  - Código del statistic (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { StatisticType } from "./typedef";
import { StatisticResolver } from "./resolver";
import { IRoute } from "@app/api/route";
import { FindOptions, CreateOptions } from "@app/api/methods";
import { IStatistic } from "@app/interfaces";
/**
 * Video routes
 *
 * @export
 * @class StatisticRouter
 * @extends {IRoute}
 */
export class StatisticRouter extends IRoute<StatisticRouter> {

    resolver = new StatisticResolver();

    statistic: GraphQLFieldConfig<any, any, any> = {
        type: StatisticType,
        description: 'Retrieve single statistic by id',
        args: { id: { type: GraphQLString } },
        resolve: (_, args) => this.resolver.find(null, { resource: { _id: args.id } })
    }


    statistics: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(StatisticType),
        description: 'Find statistics',
        resolve: (_, args: FindOptions<IStatistic>) => this.resolver.find(null, args)
    }

    mutations = {
        rent: {
            type: StatisticType,
            description: 'Insert or update videoclub',
            resolve: (_, args: CreateOptions<IStatistic>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'statistic', privileges: 'admin' }] */
    }
}
