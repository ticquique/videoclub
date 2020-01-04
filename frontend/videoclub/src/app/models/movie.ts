import { Videoclub } from './videoclub';

export interface Movie {
  _id: string;
  id: string;
  name: string;
  director: string;
  released_at: string;
  rent_price: number;
  videoclub_code: string;
  videoclub: Videoclub
  created_at: String
  updated_at: String
}
