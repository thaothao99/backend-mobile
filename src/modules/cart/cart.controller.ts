import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(
        private readonly cartSer: CartService,
    ){}
    @Post('create')
    async create(@Req() req, @Res() res, @Body() data){
        const token = req.headers.authorization.split(' ')[1]
        const {variant, quantity} = data
        const createdCart = await this.cartSer.create(variant, quantity, token)
        return res.status(HttpStatus.OK).json(createdCart)
    }
    @Get('/all')
    async getAll(@Req() req, @Res() res){
        const token = req.headers.authorization.split(' ')[1]
        const data = await this.cartSer.getCartByUser(token)
        return res.status(HttpStatus.OK).json(data)
    }
    @Delete('/:id')
    async del(@Param('id') id: string, @Res() res){
        await this.cartSer.delCart(id)
        return res.status(HttpStatus.OK).json({message: "Deleted!"})
    }
    @Post('/update/:id')
    async update(@Param('id') id: string, @Res() res, @Body() data){
        const {quantity} = data
        console.log(quantity)
        await this.cartSer.update(id, quantity)
        return res.status(HttpStatus.OK).json({message: "updated!"})
    }
}
