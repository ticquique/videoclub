/*  - Código del statistic (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { StatisticType, StatisticInputType } from "./typedef";
import { StatisticResolver } from "./resolver";
import { IRoute } from "../../route";
import { FindOptions, CreateOptions, QueryPopulateType } from "../../methods";
import { IStatistic } from "../../../interfaces";
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
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    statistics: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(StatisticType),
        description: 'Find statistics',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IStatistic>) => this.resolver.find(null, args)
    }

    mutations = {
        statistic: {
            type: StatisticType,
            description: 'Insert or update videoclub',
            args: { element: { type: GraphQLNonNull(StatisticInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IStatistic>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'statistic', privileges: 'admin' }] */
    }
}
