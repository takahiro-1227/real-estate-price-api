import { HttpException, HttpStatus } from '@nestjs/common';
import { RealEstateTransactionVariables } from './real-estate-transactions.interface';

const validYears = [2015, 2016, 2017, 2018];

const kantoPrefectureCode = {
  ibaraki: 8,
  tochigi: 9,
  gunma: 10,
  saitama: 11,
  chiba: 12,
  tokyo: 13,
  kanagawa: 14,
};

const kantoPrefectureCodes = Object.values(kantoPrefectureCode);

const zoneType = {
  residential: 1,
  commercial: 2,
};

const zoneTypes = Object.values(zoneType);

export const validate = ({
  year,
  prefectureCode,
  type,
}: RealEstateTransactionVariables) => {
  const errorMessages = [];

  if (!validYears.includes(year)) {
    errorMessages.push(`無効な年です。有効な年：${validYears.join(', ')}`);
  }

  if (!kantoPrefectureCodes.includes(prefectureCode)) {
    errorMessages.push(
      `無効な都道府県コードです。有効な都道府県コード：${kantoPrefectureCodes.join(', ')}`,
    );
  }

  if (!zoneTypes.includes(type)) {
    errorMessages.push(
      `無効な用途地域コードです。有効な用途地域コード：${zoneTypes.join(', ')}`,
    );
  }

  if (errorMessages.length > 0) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        messages: errorMessages,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
};
