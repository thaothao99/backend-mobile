import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountService } from '../account/account.service';
import { Review } from './review.interface';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel('Review')
        private readonly reviewModel: Model<Review>,
        private readonly accSer: AccountService
    ){}
    async getAll(): Promise<Review[]>{
        return await this.reviewModel.find().exec()
    }
    async create(data) : Promise<Review> {
        const user = await this.accSer.getMe(data.user)
        console.log(user)
        const dataCreate = {
            review: data.review,
            rating: data.rating,
            product: data.product,
            user: user
        }
        const newReview = await new this.reviewModel(dataCreate)
        return newReview.save();
    }
    async getReviewByProduct(product: string):Promise<Review[]>{
        return await this.reviewModel.find({product: product}).exec()
    }
}
