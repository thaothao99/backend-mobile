import { Document } from 'mongoose';

export interface LoginAccDTO extends Document {
  readonly username: string;
  readonly password: string;
}
export interface CreateAccDTO extends Document {
  readonly username: string;
  readonly password: string;
  readonly email: string;
}
