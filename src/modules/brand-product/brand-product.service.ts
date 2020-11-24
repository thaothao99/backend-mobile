import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { type } from 'os';
import { TypeProductService } from '../type-product/type-product.service';
import { BrandProduct } from './brand-product.interface';

@Injectable()
export class BrandProductService {
    constructor(
        private readonly typeServ: TypeProductService,
        @InjectModel('BrandProduct')
        private readonly brandModel: Model<BrandProduct>
    ){}
    async getALlTypeBrand() :Promise<any> {
        const brands =  await this.getAll();
        const types = await this.typeServ.getAll();
        return {
            brands,
            types
        }
    }
    async getAll(): Promise<BrandProduct[]>{
        const brands= await this.brandModel.find().exec();
        return brands
    }
    async getById(id: string): Promise<BrandProduct>{
        const brand = await this.brandModel.findById(id).exec();
        if(!brand) {
            throw new HttpException('Not found!', HttpStatus.NOT_FOUND)
        }
        return brand
    }
    async getbyName(name: string): Promise<BrandProduct>{
        const brand = await this.brandModel.findOne({name}).exec();
        if(!brand) {
            throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
        }
        return brand
    }
    async addBrand(name: string, urlImg: string): Promise<BrandProduct> {
        const existedBrand = await this.brandModel.findOne({name}).exec();
        if(existedBrand) {
            throw new HttpException('Name has been taken', HttpStatus.CONFLICT)
        }
        else{
            const data = {
                name:name,
                urlImg: urlImg
            }
            const newBrand = await new this.brandModel(data);
            return newBrand.save()
        }
    }
    
}
