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
import { TypeProductService } from './type-product.service';

@Controller('type-product')
export class TypeProductController {
  constructor(private readonly typeSer: TypeProductService) {}
  @Get('all')
  async getAllType(@Res() res) {
    const types = await this.typeSer.getAll();
    return res.status(HttpStatus.OK).json(types);
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
}
