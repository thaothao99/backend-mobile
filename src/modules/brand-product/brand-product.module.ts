import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeProductModule } from '../type-product/type-product.module';
import { BrandProductController } from './brand-product.controller';
import { BrandProductSchema } from './brand-product.schema';
import { BrandProductService } from './brand-product.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BrandProduct', schema: BrandProductSchema },
    ]),
    TypeProductModule
  ],
  controllers: [BrandProductController],
  providers: [BrandProductService]
})
export class BrandProductModule {}
