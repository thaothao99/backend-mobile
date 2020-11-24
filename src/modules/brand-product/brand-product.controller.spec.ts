import { Test, TestingModule } from '@nestjs/testing';
import { BrandProductController } from './brand-product.controller';

describe('BrandProductController', () => {
  let controller: BrandProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandProductController],
    }).compile();

    controller = module.get<BrandProductController>(BrandProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
