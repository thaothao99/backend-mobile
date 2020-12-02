import { Document } from 'mongoose';
import { Product } from '../product/product.interface';

export interface VariantProduct extends Document {
  readonly productId: string;
  readonly size: number;
  readonly color: string;
  readonly quantity: number,
  readonly product: Product
}
