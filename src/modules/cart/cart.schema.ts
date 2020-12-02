import * as mongoose from 'mongoose';
import { AccSchema } from '../account/account.schema';
import { VariantProductSchema } from '../variant-product/variant-product.schema';

export const CartSchema = new mongoose.Schema({
    variant: VariantProductSchema,
    quantity: Number,
    createAt: {type: Date, default: Date.now()},
    user: AccSchema,
});
