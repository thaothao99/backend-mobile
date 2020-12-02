import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { throws } from 'assert';
import { Model } from 'mongoose';
import { Account } from '../account/account.interface';
import { CartService } from '../cart/cart.service';
import { VariantProductService } from '../variant-product/variant-product.service';
import { Order } from './order.interface';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel('Order')
        private readonly orderModel: Model<Order>,
        private readonly cartSer: CartService,
        private readonly variantSer: VariantProductService
    ){}
    
    async create(name: string, phone: string, address: string, variants: any, price: any, user: Account){
        let variantProduct = []
        variants.forEach( async(i) => {
            await this.cartSer.deleteAfterOrder(user, i.variant)
            const variant = await this.variantSer.getById(i.variant)
            const data = {
                variant: variant,
                quantity: i.quantity
            }
            variantProduct.push(data)
        });
        const data = {
            name: name,
            phone: phone,
            address: address,
            variants: variantProduct,
            price: price,
            note: '',
            user: user
        }
        const newOrder = await new this.orderModel(data)
        return newOrder.save()
    }
    async getByUser(user: Account ){
        const data = await this.orderModel.find({"user._id": user._id})
        return data
    }
    async getByid(_id: string){
        return await this.orderModel.findOne({_id})
    }
}
