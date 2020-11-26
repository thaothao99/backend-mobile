import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productSer : ProductService
    ){}
    @Get('/all')
    async getAllProduct(@Res() res) {
        const products= await this.productSer.getAll()
        return res.status(HttpStatus.OK).json(products)
    }
    @Get('/new-arrival')
    async getNewArrival(@Res() res){
        const products = await this.productSer.getNewArrival()
        return res.status(HttpStatus.OK).json(products)
    }
    @Get('/rating-highest')
    async getRatingsAverage(@Res() res){
        const products = await this.productSer.getRatingsAverage()
        return res.status(HttpStatus.OK).json(products)
    }
    @Get('/:id')
    async getProduct(@Res() res, @Param('id') id: string ){
        console.log(id)
        const data = await this.productSer.getProduct(id);
        return res.status(HttpStatus.OK).json(data)
    }
    @Get('/') 
    async getProductBy(
        @Res() res,
        @Query('brand') brand: string, 
        @Query('categories') categories: string, 
        @Query('name') name: string,
        @Query('sort') sort: string
        ){
        // console.log(sort)
        const data = await this.productSer.getByBrand(brand, categories, name, sort);
        return res.status(HttpStatus.OK).json(data)
    }   
    @Post('/create')
    async createProduct(@Res() res, @Body() body) {
        // console.log(body)
        let data
        data = {
            name: body.name,
            ratingsAverage: parseInt(body.ratingsAverage),
            ratingsQuantity: parseInt(body.ratingsQuantity),
            price: parseInt(body.price),
            description: body.description,
            imageCover: body.imageCover,
            images: body.images,
            categories: body.categories,
            brand: body.brand
        }
        const createdProduct = await this.productSer.create(data)
        return res.status(HttpStatus.OK).json(createdProduct)
    }
}
