/*  - Código del videoclub (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig } from "graphql";
import { VideoclubType } from "./typedef";
import { VideoclubResolver } from "./resolver";
import { IRoute } from "@app/api/route";
import { CreateOptions, FindOptions } from "@app/api/methods";
import { IVideoclub } from "@app/interfaces";
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
        args: { id: { type: GraphQLString } },
        resolve: (_, args) => this.resolver.find(null, { resource: { _id: args.id } })
    }


    videoclubs: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(VideoclubType),
        description: 'Find videoclubs',
        resolve: (_, args: FindOptions<IVideoclub>) => this.resolver.find(null, args)
    }

    mutations = {
        videoclub: {
            type: VideoclubType,
            description: 'Insert or update videoclub',
            resolve: (_, args: CreateOptions<IVideoclub>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        this.protectedRoutes = [{ route: 'videoclub', privileges: 'admin' }];
    }
}
