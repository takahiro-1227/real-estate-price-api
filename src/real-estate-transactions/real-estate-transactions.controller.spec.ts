import { Test, TestingModule } from '@nestjs/testing';
import { RealEstateTransactionsController } from './real-estate-transactions.controller';
import { RealEstateTransactionService } from './real-estate-transactions.service';
import { RealEstateTransactionRepository } from './real-estate-transactions.repository';

describe('不動産取引価格API', () => {
  let controller: RealEstateTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealEstateTransactionsController],
      providers: [
        RealEstateTransactionService,
        {
          provide: RealEstateTransactionRepository,
          useClass: RealEstateTransactionRepository,
        },
      ],
    }).compile();

    controller = module.get<RealEstateTransactionsController>(
      RealEstateTransactionsController,
    );
  });

  it('正常レスポンス', () => {
    const year = 2015;
    const prefectureCode = 10;
    const type = 1;
    const res = controller.getPrice(year, prefectureCode, type);
    res.forEach(({ years, prefectureCode, type }) => {
      years.forEach(({ year, value }) => {
        expect(year).toBe(year);
        expect(typeof value).toBe('number');
      });
      expect(prefectureCode).toBe(prefectureCode);
      expect(type).toBe(type);
    });
  });

  it('不正な年ならエラー', () => {
    expect(() => controller.getPrice(2014, 8, 1)).toThrow();
  });

  it('不正な都道府県コードならエラー', () => {
    expect(() => controller.getPrice(2015, 7, 1)).toThrow();
  });

  it('不正な用途地域コードならエラー', () => {
    expect(() => controller.getPrice(2015, 8, 3)).toThrow();
  });

  it('パラメータが不足している場合はエラー', () => {
    expect(() => controller.getPrice(2015, 8)).toThrow();
  });
});
