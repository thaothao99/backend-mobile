import * as mongoose from 'mongoose';

export const VariantProductSchema = new mongoose.Schema({
    productId: String,
    size: Number,
    color: String,
    quantity: Number
});
