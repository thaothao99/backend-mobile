import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderSer: OrderService,
        private readonly accSer: AccountService
    ){}
    @Post('/create')
    async createOrder(@Res() res, @Body() data, @Req() req ) {
        const token = req.headers.authorization.split(' ')[1]
        const user = await this.accSer.getMe(token)
        const {
            name,
            phone,
            address,
            variants,
            price,
        } = data
        const createOrder = await this.orderSer.create(name, phone, address, variants, price, user)
        return res.status(HttpStatus.OK).json('created!')
    }
    @Get('/all')
    async getAll(@Res() res, @Req() req){
        const token = req.headers.authorization.split(' ')[1]
        const user = await this.accSer.getMe(token)
        const data = await this.orderSer.getByUser(user)
        return res.status(HttpStatus.OK).json(data)
    }
    @Get('/:id')
    async get(@Param('id') id: string, @Res() res){
        const data = await this.orderSer.getByid(id)
        return res.status(HttpStatus.OK).json(data)
    }
}
