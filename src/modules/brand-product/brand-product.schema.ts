import * as mongoose from 'mongoose';

export const BrandProductSchema = new mongoose.Schema({
  name: String,
  urlImg: String,
});
