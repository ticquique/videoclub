'use strict';

import { rule, shield, IRule, and } from 'graphql-shield'

/**
 * Authentication middleware
 **/
export class AuthMiddleware {
    isAuthenticated: IRule;
    isAdmin: IRule;

    constructor() {
        this.isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.member !== null || ctx.member !== undefined)
        this.isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.administrator !== null || ctx.administrator !== undefined)
    }

    getMiddleware = (...rules: { route: string, privileges: 'admin' | 'authenticated' }[]) => {
        return shield({
            Query: rules.reduce((old, current) => ({
                ...old,
                [current.route]: current.privileges === 'admin' ?
                    and(this.isAuthenticated, this.isAdmin) : this.isAuthenticated
            }), {}),
        })
    }
}


/*

const isAuthenticated = rule({ cache: 'contextual' })(
    async (parent, args, ctx, info) => {
        return ctx.user !== null
    },
);

const isAdmin = rule({ cache: 'contextual' })(
    async (parent, args, ctx, info) => {
        return ctx.user.privileges === 'admin'
    },
);

const isUser = rule({ cache: 'contextual' })(
    async (parent, args, ctx, info) => {
        return ctx.user.privileges === 'user'
    },
);

export const permissions = shield({
    Query: {
        // users: and(isAuthenticated, isAdmin)
    },
}) */