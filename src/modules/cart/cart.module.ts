import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from '../account/account.module';
import { ProductModule } from '../product/product.module';
import { VariantProductModule } from '../variant-product/variant-product.module';
import { CartController } from './cart.controller';
import { CartSchema } from './cart.schema';
import { CartService } from './cart.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Cart', schema: CartSchema }]),
        AccountModule,
        VariantProductModule,
        ProductModule
    ],
    controllers: [CartController],
    providers: [CartService]
})
export class CartModule {}
