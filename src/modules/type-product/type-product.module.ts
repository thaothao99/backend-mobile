import { Module } from '@nestjs/common';
import { TypeProductService } from './type-product.service';
import { TypeProductController } from './type-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeProductSchema } from './type-product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TypeProduct', schema: TypeProductSchema },
    ]),
  ],
  providers: [TypeProductService],
  controllers: [TypeProductController],
  exports: [TypeProductService]
})
export class TypeProductModule {}
