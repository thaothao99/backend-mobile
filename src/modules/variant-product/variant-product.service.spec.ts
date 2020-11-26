import { Test, TestingModule } from '@nestjs/testing';
import { VariantProductService } from './variant-product.service';

describe('VariantProductService', () => {
  let service: VariantProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariantProductService],
    }).compile();

    service = module.get<VariantProductService>(VariantProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
