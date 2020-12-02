import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.schema';
import { VariantProductModule } from '../variant-product/variant-product.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
    ]),
    VariantProductModule
  ],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}
