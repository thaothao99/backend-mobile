import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  ratingsAverage: {type: Number, max: 5, min: 1},
  ratingsQuantity: Number,
  price: Number,
  description: String,
  imageCover: String,
  images: [String],
  categories: [String],
  brand: String,
  date: Date
});
