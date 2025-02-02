import * as fs from 'fs';
import {
  RealEstateTransaction,
  IRealEstateTransactionRepository,
} from './real-estate-transactions.interface';

export class RealEstateTransactionRepository
  implements IRealEstateTransactionRepository
{
  fetchAll() {
    const jsonBuffer = fs.readFileSync('src/assets/estate_transactions.json');
    return JSON.parse(jsonBuffer.toString()) as RealEstateTransaction[];
  }
}
