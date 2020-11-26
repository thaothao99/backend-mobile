import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { VariantProductService } from './variant-product.service';

@Controller('variant-product')
export class VariantProductController {
    constructor(private readonly variantSer: VariantProductService){}
    @Get('/all')
    async getall(@Res() res){
        const data = await this.variantSer.getAll()
        return res.status(HttpStatus.OK).json(data)
    }
}
