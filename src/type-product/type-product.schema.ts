import * as mongoose from 'mongoose';

export const TypeProductSchema = new mongoose.Schema({
  name: String,
  urlImg: String,
});
