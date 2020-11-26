import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { TypeProductModule } from './modules/type-product/type-product.module';
import { BrandProductModule } from './modules/brand-product/brand-product.module';
import { VariantProductModule } from './modules/variant-product/variant-product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sa:TrnO5REDybNbSyGE@cluster0.fpeww.mongodb.net/mobile-database-dev?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    }),
    AccountModule,
    AuthModule,
    ProductModule,
    TypeProductModule,
    BrandProductModule,
    VariantProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
