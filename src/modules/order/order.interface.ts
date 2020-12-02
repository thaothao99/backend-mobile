import { Document } from 'mongoose';

export interface Order extends Document {
  readonly name: string;
  readonly address: string;
  readonly phone: string;
  readonly note: string;
  readonly variants: [];
  readonly user: Account;
  readonly price: number;
  readonly paid: boolean;
}
