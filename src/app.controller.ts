import * as fs from 'fs';
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface EstateTransaction {
  year: number;
  prefectureCode: number;
  type: number;
  data: {
    result: {
      prefectureCode: string;
      prefectureName: string;
      type: string;
      years: {
        year: number;
        value: number;
      }[];
    };
  };
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/v1/townPlanning/estateTransaction/bar')
  getPrice(
    @Query('year') year: number,
    @Query('prefectureCode') prefectureCode: number,
    @Query('type') type: number,
  ): EstateTransaction['data']['result'][] {
    const jsonBuffer = fs.readFileSync('src/assets/estate_transactions.json');
    const estateTransactions = JSON.parse(
      jsonBuffer.toString(),
    ) as EstateTransaction[];

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
