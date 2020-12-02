import { Document } from "mongoose";
import { VariantProduct } from "../variant-product/variant-product.interface";

export interface Cart extends Document{
    variant: VariantProduct,
    quantity: number,
    createAt: string,
    user: Account,
}