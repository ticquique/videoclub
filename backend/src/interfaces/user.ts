'use strict';
export enum Privileges {
    'admin',
    'user'
}

export interface IUser {
    _id: any;
    id?: any;
    username: Date;
    created_at: Date;
    updated_at: Date;
    privileges: Privileges;
    password?: string;
}