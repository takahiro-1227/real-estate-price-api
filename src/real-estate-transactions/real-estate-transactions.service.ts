import { Injectable } from '@nestjs/common';
import { RealEstateTransactionVariables } from './real-estate-transactions.interface';
import { validate } from './real-estate-transactions.validation';
import { RealEstateTransactionRepository } from './real-estate-transactions.repository';

@Injectable()
export class RealEstateTransactionService {
  constructor(
    private readonly realEstateTransactionRepository: RealEstateTransactionRepository,
  ) {}

  getRealEstateTransactions(
    variables: Partial<RealEstateTransactionVariables>,
  ) {
    const validatedVariables = validate(variables);

    const { year, prefectureCode, type } = validatedVariables;
    const estateTransactions = this.realEstateTransactionRepository.fetchAll();

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
