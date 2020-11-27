import { Document } from "mongoose";

export interface Review extends Document{
    review: string,
    rating: number,
    createAt: string,
    product: string,
    user: Account,
}