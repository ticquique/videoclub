
import * as graphqlHTTP from "express-graphql";
import getEnv from "../../env";
import { AuthMiddleware } from "../../middleware";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { VideoclubRouter } from "./videoclub";
import { applyMiddleware } from "graphql-middleware";

export default graphqlHTTP(async (request) => {

    const env = await getEnv();
    const authService = new AuthMiddleware();
    const videoclubRouter = new VideoclubRouter();

    const routes = {
        ...videoclubRouter.getRoutes()
    }

    const protectedRoutes = [
        ...videoclubRouter.getProtectedRoutes()
    ]

    const mutations = {
        ...videoclubRouter.getMutations()
    }

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