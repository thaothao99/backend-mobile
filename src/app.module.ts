import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { TypeProductModule } from './modules/type-product/type-product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-app-mobile', {
      useNewUrlParser: true,
    }),
    AccountModule,
    AuthModule,
    ProductModule,
    TypeProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
