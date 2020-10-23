import * as mongoose from 'mongoose';

export const ProdutSchema = new mongoose.Schema({
  name: String,
  price: Int16Array,
  urlImage: String,
  describle: String,
  size: Int16Array,
});
