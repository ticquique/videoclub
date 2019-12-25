/*  - Código del film (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfigMap, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { FilmType, FilmInputType } from "./typedef";
import { FilmResolver } from "./resolver";
import { IRoute } from "../../route";
import { CreateOptions, FindOptions, QueryPopulateType } from "../../methods";
import { IFilm } from "../../../interfaces";
/**
 * Film routes
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
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    films: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(FilmType),
        description: 'Find films',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IFilm>) => this.resolver.find(null, args)
    }

    mutations = {
        film: {
            type: FilmType,
            description: 'Insert or update videoclub',
            args: { element: { type: GraphQLNonNull(FilmInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IFilm>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'film', privileges: 'admin' }] */
    }
}
