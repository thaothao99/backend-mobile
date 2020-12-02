import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from '../cart/cart.module';
import { VariantProductModule } from '../variant-product/variant-product.module';
import { OrderController } from './order.controller';
import { OrderSchema } from './order.schema';
import { OrderService } from './order.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}]),
        CartModule, 
        VariantProductModule
    ],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}
