import { Document } from 'mongoose';

export interface TypeProduct extends Document {
  readonly name: string;
  readonly urlImg: string;
}
