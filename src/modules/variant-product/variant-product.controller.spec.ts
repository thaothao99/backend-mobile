import { Test, TestingModule } from '@nestjs/testing';
import { VariantProductController } from './variant-product.controller';

describe('VariantProductController', () => {
  let controller: VariantProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariantProductController],
    }).compile();

    controller = module.get<VariantProductController>(VariantProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
