import * as mongoose from 'mongoose';
import { AccSchema } from '../account/account.schema';

export const ReviewSchema = new mongoose.Schema({
  review: String,
  rating: Number,
  createAt: {type: Date, default: Date.now()},
  product: String,
  user: AccSchema,
});
