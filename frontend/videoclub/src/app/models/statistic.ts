import { Admin } from './admin';
import { Rent } from './rent';
import { Customer } from './customer';

export interface Statistic {
    _id: string;
    id: string;
    administrator: Admin;
    member: Customer;
    rents: [Rent];
    month: number;
    amount: number;
    created_at: string;
    updated_at: string;
}
