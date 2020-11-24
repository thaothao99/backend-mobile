import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { BrandProductService } from './brand-product.service';

@Controller('brand-product')
export class BrandProductController {
    constructor(private readonly brandSer: BrandProductService){}
    @Get('/type-brand')
    async getAllTypeBrand(@Res() res){
        const data = await this.brandSer.getALlTypeBrand();
        return res.status(HttpStatus.OK).json(data)
    }
    @Get('/all')
    async getAll(@Res() res){
        const brands = await this.brandSer.getAll();
        return res.status(HttpStatus.OK).json(brands)
    }
    @Get('/:name')
    async getName(@Res() res, @Param() name: string){
        const brand = await this.brandSer.getbyName(name);
        return res.status(HttpStatus.OK).json(brand)
    }
    @Post('/create')
    async create(@Req() req, @Res() res, @Body() data){
        const {name, urlImg} = data
        const createdBrand = await this.brandSer.addBrand(name, urlImg)
        return res.status(HttpStatus.OK).json(createdBrand)
    }
}
