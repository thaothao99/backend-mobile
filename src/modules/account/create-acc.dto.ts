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
export interface UpdateAccDTO extends Document {
  readonly phone: string;
  readonly email: string;
  readonly address: string;
  readonly urlImgl: string;
}
