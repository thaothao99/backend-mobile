import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
    constructor(
        private readonly reviewSer: ReviewService
    ){}
    @Get('/all')
    async getAll(@Res() res){
        const data = await this.reviewSer.getAll()
        return res.status(HttpStatus.OK).json(data)
    }
    @Post('/create')
    async create(@Req() req, @Res()  res, @Body() data: any){
        const token = req.headers.authorization.split(' ')[1]
        const dataCreate = {
            review: data.review,
            rating: data.rating,
            product: data.product,
            user: token
        }
        console.log(dataCreate)

        const createdReview = await this.reviewSer.create(dataCreate)
        return res.status(HttpStatus.OK).json(createdReview)
    }
    @Get('/:product')
    async getByProduct(@Res() res, @Param('product') product: string){
        const data = await this.reviewSer.getReviewByProduct(product)
        return res.status(HttpStatus.OK).json(data)
    }
}
