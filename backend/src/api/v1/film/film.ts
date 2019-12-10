/*  - Código del film (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfigMap, GraphQLFieldConfig } from "graphql";
import { FilmType } from "./typedef";
import { FilmResolver } from "./resolver";
import { IRoute } from "@app/api/route";
import { CreateOptions, FindOptions } from "@app/api/methods";
import { IFilm } from "@app/interfaces";
/**
 * Video routes
 *
 * @export
 * @class FilmRouter
 * @extends {IRoute}
 */
export class FilmRouter extends IRoute<FilmRouter> {
    
    resolver = new FilmResolver();

    film: GraphQLFieldConfig<any, any, any> = {
        type: FilmType,
        description: 'Retrieve single film by id',
        args: { id: { type: GraphQLString } },
        resolve: (_, args) => this.resolver.find(null, { resource: { _id: args.id } })
    }


    films: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(FilmType),
        description: 'Find films',
        resolve: (_, args: FindOptions<IFilm>) => this.resolver.find(null, args)
    }

    mutations = {
        film: {
            type: FilmType,
            description: 'Insert or update videoclub',
            resolve: (_, args: CreateOptions<IFilm>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'film', privileges: 'admin' }] */
    }
}
