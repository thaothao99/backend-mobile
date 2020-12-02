import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountService } from '../account/account.service';
import { ProductService } from '../product/product.service';
import { Wish } from './wish.interface'
@Injectable()
export class WishService {
    constructor(
        @InjectModel('Wish')
        private readonly wishModel: Model<Wish>,
        private readonly accSer: AccountService,
        private readonly productSer: ProductService
    ){}
    async getByUser(token: string): Promise<Wish[]>{
        const user = await this.accSer.getMe(token)
        return await this.wishModel.find({"user._id": user._id})
    }
    async create(token: string, productId: string): Promise<Wish> {
        const user = await this.accSer.getMe(token)
        const existed = await this.wishModel.findOne({"user._id": user._id, "product._id" : productId})
        if(existed) {
            throw new HttpException('The product has been added in wish list!', HttpStatus.CONFLICT)
        }
        const product =  await this.productSer.getProduct(productId)
        const newReview = new this.wishModel({user, product});
        return newReview.save()
    }
    async del(_id: string) {
       return await this.wishModel.deleteOne({_id})
    }
}
