'use strict';

import { rule, shield, IRule, and } from 'graphql-shield'
import { sign, verify } from 'jsonwebtoken';
import { IUser } from '@app/interfaces/user';
import getEnv from '@env';
import { User } from '@models/index';

export enum Privileges {
    'admin',
    'user'
}
/**
 * Interface of the decoded tokens
 *
 * @interface Token
 */
interface Token {
    iss: string;
    sub: any;
    iat: number;
    privileges: Privileges;
    exp: number;
}

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

    /**
     * Create token for the user provided
     *
     * @param {IUser} user
     * @returns Token generated
     * @memberof AuthService
     */
    async createToken(user: IUser) {
        const today = new Date();
        const env = await getEnv();
        const payload: Token = {
            iss: env.application.domain,
            sub: user._id,
            iat: today.getTime(),
            privileges: user.privileges,
            exp: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).getTime(),
        };
        const token = sign(payload, env.application.secret, { algorithm: 'HS256' });
        return token;
    }

    /**
     * Validate if received token is correct
     *
     * @param {string} token
     * @returns decoded token
     * @memberof AuthService
     */
    async validateToken(token: string) {
        if (typeof token !== 'string') throw Error('Invalid token provided');
        const parts = token.split(' ');
        if (parts.length !== 2) throw Error('Invalid credentials');

        const scheme = parts[0].trim();
        let credentials = parts[1].trim();
        if (credentials.startsWith('"')) credentials = credentials.substring(1);
        if (credentials.endsWith('"')) credentials = credentials.substring(0, credentials.length - 1);

        if (!/^Bearer$/i.test(scheme)) throw Error('Format is Authorization: Bearer [token]');
        const env = await getEnv();
        const decoded = verify<Token>(credentials, env.application.secret, { algorithms: ['HS256'] });
        if (env.application.revoquedTokens.indexOf(decoded.sub) > -1) throw Error('User banned for some reason, check your email');
        return decoded;
    }

    /**
     * Get user by token received
     *
     * @param {(Token | string)} token
     * @returns user asociated with the token
     * @memberof AuthService
     */
    async tokenToUser(token: Token | string) {
        let user: IUser = null;
        if (token) {
            token = typeof token === 'string' ? await this.validateToken(token) : token;
            user = await User.findById(token.sub);
        }
        return user;
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