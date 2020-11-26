import { Document } from 'mongoose';

export interface VariantProduct extends Document {
  readonly productId: string;
  readonly size: number;
  readonly color: string;
  readonly quantity: number
}
