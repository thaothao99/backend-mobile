import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VariantProductController } from './variant-product.controller';
import {VariantProductSchema} from './variant-product.schema'
import { VariantProductService } from './variant-product.service';
@Module({
    imports:[
        MongooseModule.forFeature([
          { name: 'VariantProduct', schema: VariantProductSchema },
        ]),
      ],
      providers: [VariantProductService],
      controllers: [VariantProductController],
      exports: [VariantProductService]
})
export class VariantProductModule {}
