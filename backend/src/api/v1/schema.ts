
import * as graphqlHTTP from "express-graphql";
import getEnv from "../../env";
import { AuthMiddleware } from "../../middleware";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { VideoclubRouter } from "./videoclub";
import { applyMiddleware } from "graphql-middleware";
import { StatisticRouter } from "./statistic";
import { RentRouter } from "./rent";
import { MemberRouter } from "./member";
import { FilmRouter } from "./film";
import { AdministratorRouter } from "./administrator";

export default graphqlHTTP(async (request) => {

    const env = await getEnv();
    const authService = new AuthMiddleware();
    const routers = [
        new VideoclubRouter(),
        new StatisticRouter(),
        new RentRouter(),
        new MemberRouter(),
        new FilmRouter(),
        new AdministratorRouter(),
    ];

    const routes = routers.reduce((o,c) => ({...o, ...c.getRoutes()}), {})
    const protectedRoutes = routers.reduce((o,c) => [...o, ...c.getProtectedRoutes()], [])
    const mutations = routers.reduce((o,c) => ({...o, ...c.getMutations()}), {})

    return {
        schema: applyMiddleware(new GraphQLSchema({
            query: new GraphQLObjectType({
                name: 'Query',
                fields: routes
            }),
            mutation: new GraphQLObjectType({
                name: 'Mutation',
                fields: mutations
            })
        }), authService.getMiddleware(...protectedRoutes)),
        graphiql: !env.production,
        context: {
            user: await authService.tokenToUser(request.headers.authorization)
        }
    }
}) 