import { Controller, Get, Query } from '@nestjs/common';
import { RealEstateTransactionService } from './real-estate-transactions.service';
import { RealEstateTransaction } from './real-estate-transactions.interface';

@Controller('api/v1/townPlanning/estateTransaction')
export class RealEstateTransactionsController {
  constructor(
    private readonly realEstateTransactionService: RealEstateTransactionService,
  ) {}

  @Get('bar')
  getPrice(
    @Query('year') year: number,
    @Query('prefectureCode') prefectureCode: number,
    @Query('type') type: number,
  ): RealEstateTransaction['data']['result'][] {
    return this.realEstateTransactionService.getRealEstateTransactions({
      year,
      prefectureCode,
      type,
    });
  }
}
