import { Document } from 'mongoose';

export interface Product extends Document {
    readonly  name: string,
    readonly ratingsAverage: number,
    readonly ratingsQuantity: number,
    readonly price: number,
    readonly description: string,
    readonly imageCover: string,
    readonly images: string[],
    readonly categories: string[],
    readonly brand: string,
    readonly date: string
}
