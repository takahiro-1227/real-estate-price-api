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
}: Partial<RealEstateTransactionVariables>): RealEstateTransactionVariables => {
  const errorMessages = [];

  if (!year) {
    errorMessages.push('年が指定されていません。');
  }

  if (!prefectureCode) {
    errorMessages.push('都道府県コードが指定されていません。');
  }

  if (!type) {
    errorMessages.push('用途地域コードが指定されていません。');
  }

  if (year && !validYears.includes(year)) {
    errorMessages.push(`無効な年です。有効な年：${validYears.join(', ')}`);
  }

  if (prefectureCode && !kantoPrefectureCodes.includes(prefectureCode)) {
    errorMessages.push(
      `無効な都道府県コードです。有効な都道府県コード：${kantoPrefectureCodes.join(', ')}`,
    );
  }

  if (type && !zoneTypes.includes(type)) {
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

  // この前時点でパラメータ不足の場合はエラーになっているはずだが、
  // 型推論のために再度チェックを行う
  if (!year || !prefectureCode || !type) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        messages: errorMessages,
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  return {
    year,
    prefectureCode,
    type,
  };
};
