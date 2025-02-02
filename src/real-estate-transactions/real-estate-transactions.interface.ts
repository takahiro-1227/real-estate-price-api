export interface RealEstateTransaction {
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

export interface RealEstateTransactionVariables {
  year: number;
  prefectureCode: number;
  type: number;
}
