import { Module } from '@nestjs/common';
import {
  RealEstateTransactionsController,
  RealEstateTransactionService,
  RealEstateTransactionRepository,
} from './real-estate-transactions';

@Module({
  imports: [],
  controllers: [RealEstateTransactionsController],
  providers: [
    RealEstateTransactionService,
    {
      provide: RealEstateTransactionRepository,
      useClass: RealEstateTransactionRepository,
    },
  ],
})
export class AppModule {}
