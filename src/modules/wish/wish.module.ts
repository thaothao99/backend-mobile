import { Module } from '@nestjs/common';
import { WishService } from './wish.service';
import { WishController } from './wish.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WishSchema } from './wish.schema';
import { AccountModule } from '../account/account.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Wish', schema: WishSchema}]),
    AccountModule,
    ProductModule
  ],
  providers: [WishService],
  controllers: [WishController]
})
export class WishModule {}
