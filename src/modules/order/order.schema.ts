import * as mongoose from 'mongoose';
import { AccSchema } from '../account/account.schema';
export const OrderSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  note:String,
  variants: [
    {
      variant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductVariant',
        required: [true, 'Order must belong to a product!'],
      },
      quantity: {
        type: Number,
        required: [true, 'Please tell us quantity of product'],
      },
    },
  ],
  user: AccSchema,
  price: Number,
  createAt: {type: Date, default: Date.now()},
  paid: {type: Boolean, default: false}
});
