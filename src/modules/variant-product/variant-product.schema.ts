import * as mongoose from 'mongoose';
import { ProductSchema } from '../product/product.schema';

export const VariantProductSchema = new mongoose.Schema({
    productId: String,
    size: Number,
    color: String,
    quantity: Number, 
    product: ProductSchema
});
