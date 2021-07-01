import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { ProductService } from '../product/product.service';
import { TypeProductService } from './type-product.service';

@Controller('type-product')
export class TypeProductController {
  constructor(
    private readonly typeSer: TypeProductService,
    private readonly proSer: ProductService,
  ) {}
  @Get('all')
  async getAllType(@Res() res) {
    const types = await this.typeSer.getAll();
    let resData = [];
    for (const el of types) {
      const pro = await this.proSer.getByBrand(null, el.name, null, null);
      resData.push({
        _id: el._id,
        name: el.name,
        urlImg: el.urlImg,
        quantity: pro.length,
      });
    }
    return res.status(HttpStatus.OK).json(resData);
  }
  @Get('/:name')
  async getType(@Res() res, @Param('name') name) {
    const type = await this.typeSer.getByName(name);
    if (!type) throw new NotFoundException('Type product does not exist!');
    return res.status(HttpStatus.OK).json(type);
  }
  @Post('/create')
  async createType(@Res() res, @Body() newType: any) {
    const { name, urlImg } = newType;
    const createdType = await this.typeSer.create(name, urlImg);
    return res.status(HttpStatus.OK).json(createdType);
  }
  @Delete('delete/:_id')
  async delete(@Param('_id') _id: string) {
    return await this.typeSer.delete(_id);
  }
  @Post('/update')
  async updateType(@Res() res, @Body() updateType: any) {
    const { _id, name, urlImg } = updateType;
    const updatedType = await this.typeSer.update(_id, name, urlImg);
    return res.status(HttpStatus.OK).json(updateType);
  }
}
