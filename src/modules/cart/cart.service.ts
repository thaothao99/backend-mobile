import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from '../account/account.interface';
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
    async deleteAfterOrder(user: Account, variantId: string){
        return await this.cartModel.deleteOne({"user._id": user._id, "variant._id" : variantId})
    }
    async create(variantId, quantity, token): Promise<Cart>{
        const user = await this.accSer.getMe(token)
        let variant
        variant = await this.variantSer.getById(variantId)
        let existed = await this.cartModel.findOne({"user._id": user._id, "variant._id" : variantId})
        if(existed) {
            throw new HttpException('The product has been added in your cart!', HttpStatus.CONFLICT)
        }
        variant.quantity = variant.quantity - 1
        variant.save()
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
        let existed = await this.cartModel.findOne({_id})
        let variant 
        variant = this.variantSer.getById(existed.variant._id);
        (await variant).quantity = variant.quantity - (existed.quantity)
        variant.save()

        return this.cartModel.findOneAndDelete({_id})
    }
    async update(_id: string, quantity){
        let existed =  await this.cartModel.findOne({_id})
        let variant 
        variant = await this.variantSer.getById(existed.variant._id);
        variant.quantity = variant.quantity - (quantity - existed.quantity)
        variant.save()
        existed.quantity = quantity
        existed.save()
        return existed
    }
}

