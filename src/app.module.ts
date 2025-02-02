import { Module } from '@nestjs/common';
import {
  RealEstateTransactionsController,
  RealEstateTransactionService,
} from './real-estate-transactions';

@Module({
  imports: [],
  controllers: [RealEstateTransactionsController],
  providers: [RealEstateTransactionService],
})
export class AppModule {}
