import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductService } from '../product/product.service';
import { VariantProduct } from './variant-product.interface';
const dataDev = [
    {
        productId: "5fbe3dd85d4da226b59fe9c2",
        size: 5,
        color: "red",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c2",
        size: 3,
        color: "red",
        quantity: 2
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c2",
        size: 4.5,
        color: "yellow",
        quantity: 20
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c2",
        size: 5.5,
        color: "red",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c2",
        size: 6,
        color: "red",
        quantity: 2
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c2",
        size: 5.5,
        color: "blue",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c2",
        size: 4.5,
        color: "black",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c5",
        size: 4,
        color: "red",
        quantity: 4
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c5",
        size: 5.5,
        color: "red",
        quantity: 6
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c5",
        size: 4,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c5",
        size: 4.5,
        color: "black",
        quantity: 3
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c5",
        size: 4,
        color: "white",
        quantity: 7
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c5",
        size: 4.5,
        color: "white",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c3",
        size: 5.5,
        color: "red",
        quantity: 8
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c3",
        size: 4.5,
        color: "red",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c3",
        size: 5,
        color: "black",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c9",
        size: 4.5,
        color: "white",
        quantity: 8
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c9",
        size: 5,
        color: "white",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c9",
        size: 4,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c9",
        size: 3.5,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c8",
        size: 4.5,
        color: "black",
        quantity: 9
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c8",
        size: 5,
        color: "black",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cb",
        size: 4.5,
        color: "white",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cb",
        size: 3.5,
        color: "white",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cb",
        size: 3.5,
        color: "black",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c4",
        size: 5.5,
        color: "gray",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c7",
        size: 4.5,
        color: "green",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c7",
        size: 5,
        color: "green",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c7",
        size: 3.5,
        color: "white",
        quantity: 13
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c7",
        size: 4.5,
        color: "white",
        quantity: 11
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c7",
        size: 5,
        color: "white",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9ca",
        size: 4,
        color: "white",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9ca",
        size: 5.5,
        color: "white",
        quantity: 14
    },
    {
        productId: "5fbe3dd85d4da226b59fe9ca",
        size: 5,
        color: "black",
        quantity: 18
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cc",
        size: 4,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cd",
        size: 5.5,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cd",
        size: 5,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c6",
        size: 3.5,
        color: "red",
        quantity: 16
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c6",
        size: 5,
        color: "red",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9c6",
        size: 4.5,
        color: "blue",
        quantity: 13
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cf",
        size: 4.5,
        color: "white",
        quantity: 8
    },
    {
        productId: "5fbe3dd85d4da226b59fe9cf",
        size: 5.5,
        color: "white",
        quantity: 14
    },
    {
        productId: "5fbe3dd85d4da226b59fe9ce",
        size: 5.5,
        color: "black",
        quantity: 19
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d0",
        size: 5.5,
        color: "black",
        quantity: 17
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d0",
        size: 3.5,
        color: "black",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d0",
        size: 4.5,
        color: "white",
        quantity: 11
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d1",
        size: 4.5,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d1",
        size: 5,
        color: "white",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d2",
        size: 4.5,
        color: "white",
        quantity: 18
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d2",
        size: 5,
        color: "white",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d2",
        size: 3.5,
        color: "white",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d2",
        size: 5,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d3",
        size: 5,
        color: "black",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d3",
        size: 4.5,
        color: "black",
        quantity: 14
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d3",
        size: 3.5,
        color: "black",
        quantity: 13
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d3",
        size: 5.5,
        color: "black",
        quantity: 10
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d3",
        size: 3.5,
        color: "red",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d3",
        size: 5,
        color: "blue",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d4",
        size: 5.5,
        color: "blue",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d4",
        size: 5,
        color: "blue",
        quantity: 19
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d4",
        size: 3.5,
        color: "black",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d4",
        size: 4.5,
        color: "black",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d4",
        size: 5,
        color: "black",
        quantity: 18
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d6",
        size: 5,
        color: "blue",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d6",
        size: 4.5,
        color: "blue",
        quantity: 13
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d6",
        size: 4.5,
        color: "black",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d6",
        size: 3.5,
        color: "black",
        quantity: 14
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d5",
        size:3.5,
        color: "yellow",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d5",
        size: 4,
        color: "yellow",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d5",
        size: 4,
        color: "white",
        quantity: 17
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d5",
        size: 5,
        color: "white",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d7",
        size: 3.5,
        color: "white",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d7",
        size: 4.5,
        color: "black",
        quantity: 11
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d7",
        size: 5,
        color: "black",
        quantity: 16
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d7",
        size: 5.5,
        color: "black",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d9",
        size: 5.5,
        color: "blue",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d9",
        size: 3.5,
        color: "white",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d9",
        size: 5,
        color: "black",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d8",
        size: 4.5,
        color: "blue",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d8",
        size: 5,
        color: "blue",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d8",
        size: 4.5,
        color: "black",
        quantity: 13
    },
    {
        productId: "5fbe3dd85d4da226b59fe9d8",
        size: 5.5,
        color: "black",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9da",
        size: 3.5,
        color: "black",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9da",
        size: 5,
        color: "yellow",
        quantity: 13
    },
    {
        productId: "5fbe3dd85d4da226b59fe9da",
        size: 4.5,
        color: "yellow",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9dd",
        size: 4.5,
        color: "blue",
        quantity: 13
    },
    {
        productId: "5fbe3dd85d4da226b59fe9dd",
        size: 5,
        color: "blue",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9dc",
        size: 5.5,
        color: "grey",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9dc",
        size: 3.5,
        color: "grey",
        quantity: 12
    },
    {
        productId: "5fbe3dd85d4da226b59fe9dc",
        size: 5.5,
        color: "blue",
        quantity: 11
    },
    {
        productId: "5fbe3dd85d4da226b59fe9de",
        size: 5.5,
        color: "black",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9de",
        size: 4.5,
        color: "gray",
        quantity: 15
    },
    {
        productId: "5fbe3dd85d4da226b59fe9de",
        size: 4,
        color: "gray",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9de",
        size: 3.5,
        color: "gray",
        quantity: 1
    },
    ,
    {
        productId: "5fbe3dd85d4da226b59fe9db",
        size: 3.5,
        color: "black",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9db",
        size: 3.5,
        color: "white",
        quantity: 1
    },
    {
        productId: "5fbe3dd85d4da226b59fe9db",
        size: 4.5,
        color: "black",
        quantity: 1
    }
]
@Injectable()
export class VariantProductService {
    constructor(
        @InjectModel('VariantProduct')
        private readonly variantModel : Model<VariantProduct>,
        // private readonly productSer: ProductService
    ){}
    async getByProduct(productId: string) {
        console.log(productId)
        const data = await this.variantModel.find({productId: productId});
        return data
    }
    async getAll() {
        return await this.variantModel.find()
    }
    async create() {
        dataDev.forEach(async(i)=> {
            // const product = await this.productSer.getProduct(i.productId)
            // const data ={
            //     productId: i.productId,
            //     color: i.color,
            //     quantity: i.quantity,
            //     size: i.size,
            //     product: product
            // }
            // // console.log(product)
            
            // const re = new this.variantModel(data);
            const re = new this.variantModel(i);

            return re.save()
        })
        return true
    }
    async getById(_id){
        const data = await this.variantModel.findOne({_id})
        return data
    }
}
