'use strict';

import { rule, shield } from 'graphql-shield'
import { Rule } from 'graphql-shield/dist/rules';

/**
 * Authentication middleware
 **/
export class AuthMiddleware {
    isAuthenticated: Rule;
    isAdmin: Rule;
    isUser: Rule;

    constructor() {
        this.isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.member !== null)
        this.isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user.privileges === 'admin')
        this.isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user.privileges === 'user')
    }

    protectRules = () => {
        
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