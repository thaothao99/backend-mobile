import { Document } from 'mongoose';

export interface BrandProduct extends Document {
  readonly name: string;
  readonly urlImg: string;
}
