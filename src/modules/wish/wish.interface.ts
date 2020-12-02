import { Document } from "mongoose";
import { Product } from "../product/product.interface";

export interface Wish extends Document{
    product: Product,
    user: Account,
}