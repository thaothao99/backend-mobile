import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TypeProduct } from './type-prodcut.interface';

@Injectable()
export class TypeProductService {
  constructor(
    @InjectModel('TypeProduct')
    private readonly typeProductModel: Model<TypeProduct>,
  ) {}
  async getAll(): Promise<TypeProduct[]> {
    const types = await this.typeProductModel.find().exec();
    return types;
  }
  async getByName(name: string): Promise<TypeProduct> {
    const type = await this.typeProductModel.findOne({ name }).exec();
    return type;
  }
  async create(name: string, urlImg: string): Promise<TypeProduct> {
    const existedType = await this.typeProductModel.findOne({ name }).exec();
    if (existedType) {
      throw new HttpException('Name has been taken!', HttpStatus.CONFLICT);
    }
    const data = {
      name: name,
      urlImg: urlImg,
    };
    const newType = new this.typeProductModel(data);
    return newType.save();
  }
}
