import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountService } from '../account/account.service';
import { VariantProductService } from '../variant-product/variant-product.service';
import { Cart } from './cart.interface';

@Injectable()
export class CartService {
    constructor(
        @InjectModel('Cart')
        private readonly cartModel: Model<Cart>,
        private readonly variantSer: VariantProductService,
        private readonly accSer: AccountService,
    ){}
    async create(variantId, quantity, token): Promise<Cart>{
        const user = await this.accSer.getMe(token)
        const variant = await this.variantSer.getById(variantId)
        const existed = await this.cartModel.findOne({"user._id": user._id, "variant._id" : variantId})
        if(existed) {
            throw new HttpException('The product has been added in your cart!', HttpStatus.CONFLICT)
        }
        const data ={
            variant: variant,
            quantity: quantity,
            user: user,        
        }
        const newCart = await new this.cartModel(data)
        return newCart.save()
    }
    async getCartByUser(token): Promise<Cart[]> {
        const user = await this.accSer.getMe(token)
        const data = await this.cartModel.find({"user._id": user._id})
        return data
    }
    async delCart(_id){
        return this.cartModel.findOneAndDelete({_id})
    }
    async update(_id: string, quantity){
        return await this.cartModel.findOneAndUpdate({_id}, {quantity: quantity}, {new: true})
    }
}

