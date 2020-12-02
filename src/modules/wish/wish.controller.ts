import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Req, Res } from '@nestjs/common';
import { WishService } from './wish.service';

@Controller('wish')
export class WishController {
    constructor(
        private readonly wishSer: WishService
    ){}
    @Get('/acc')
    async getOne(@Res() res, @Req() req){
        const token = req.headers.authorization.split(' ')[1]
        const data = await this.wishSer.getByUser(token)
        return res.status(HttpStatus.OK).json(data)
    }
    @Post('/create')
    async create(@Res() res, @Body('product') product: string, @Req() req){
        const token = req.headers.authorization.split(' ')[1]
        // console.log(token, product)
        const data = await this.wishSer.create(token, product)
        // if (!data) throw new NotFoundException('The product has been added in your wish list!');
        return res.status(HttpStatus.OK).json(data)  
    }
    @Delete('/:id')
    async del(@Param('id') id: string, @Res() res){
        await this.wishSer.del(id)
        return res.status(HttpStatus.OK).json({message: "Deleted!"})
    }
}
