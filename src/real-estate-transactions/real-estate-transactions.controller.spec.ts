import { Test, TestingModule } from '@nestjs/testing';
import { RealEstateTransactionsController } from './real-estate-transactions.controller';

describe('RealEstateTransactionsController', () => {
  let controller: RealEstateTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealEstateTransactionsController],
    }).compile();

    controller = module.get<RealEstateTransactionsController>(
      RealEstateTransactionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
