import { Movie } from './movie';
import { Customer } from './customer';

export interface Rent {
  _id: string;
  id: string;
  films: [Movie];
  member: Customer;
  pickup_date: string;
  devolution_date: string;
  amount: number;
  created_at: string;
  updated_at: string;
}
