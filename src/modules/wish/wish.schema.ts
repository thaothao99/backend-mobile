import * as mongoose from 'mongoose';
import { AccSchema } from '../account/account.schema';
import { ProductSchema } from '../product/product.schema';

export const WishSchema = new mongoose.Schema({
    product: ProductSchema,
    user: AccSchema
})