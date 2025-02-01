import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import {
  RealEstateTransaction,
  RealEstateTransactionVariables,
} from './real-estate-transactions.interface';
import { validate } from './real-estate-transactions.validation';

@Injectable()
export class RealEstateTransactionService {
  getRealEstateTransactions(variables: RealEstateTransactionVariables) {
    validate(variables);

    const { year, prefectureCode, type } = variables;

    const jsonBuffer = fs.readFileSync('src/assets/estate_transactions.json');
    const estateTransactions = JSON.parse(
      jsonBuffer.toString(),
    ) as RealEstateTransaction[];

    return estateTransactions
      .filter(
        (estateTransactions) =>
          estateTransactions.year === year &&
          estateTransactions.prefectureCode === prefectureCode &&
          estateTransactions.type === type,
      )
      .map(({ data }) => data.result);
  }
}
