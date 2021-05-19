import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { TypeProductModule } from './modules/type-product/type-product.module';
import { BrandProductModule } from './modules/brand-product/brand-product.module';
import { ReviewModule } from './modules/review/review.module';
import { WishModule } from './modules/wish/wish.module';
import { CartModule } from './modules/cart/cart.module';
import { VariantProductModule } from './modules/variant-product/variant-product.module';
import { OrderModule } from './modules/order/order.module';

const conectDB =
  'mongodb+srv://sa:TrnO5REDybNbSyGE@cluster0.fpeww.mongodb.net/sneaker-store-dev?retryWrites=true&w=majority';
@Module({
  imports: [
    MongooseModule.forRoot(conectDB, {
      useNewUrlParser: true,
    }),
    AccountModule,
    AuthModule,
    ProductModule,
    TypeProductModule,
    BrandProductModule,
    VariantProductModule,
    ReviewModule,
    WishModule,
    CartModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
