/*  - Código del videoclub (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { VideoclubType, VideoclubInputType } from "./typedef";
import { VideoclubResolver } from "./resolver";
import { IRoute } from "../../route";
import { FindOptions, CreateOptions, QueryPopulateType } from "../../methods";
import { IVideoclub } from "../../../interfaces";
/**
 * Video routes
 *
 * @export
 * @class VideoclubRouter
 * @extends {IRoute}
 */
export class VideoclubRouter extends IRoute<VideoclubRouter> {

    resolver = new VideoclubResolver();

    videoclub: GraphQLFieldConfig<any, any, any> = {
        type: VideoclubType,
        description: 'Retrieve single videoclub by id',
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    videoclubs: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(VideoclubType),
        description: 'Find videoclubs',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IVideoclub>) => this.resolver.find(null, args)
    }

    mutations = {
        videoclub: {
            type: VideoclubType,
            description: 'Insert or update videoclub',
            args: { element: { type: GraphQLNonNull(VideoclubInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IVideoclub>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'videoclubs', privileges: 'admin' }]; */
    }
}
