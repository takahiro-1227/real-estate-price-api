import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('不動産取引価格API (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('正常レスポンス', () => {
    return request(app.getHttpServer())
      .get('/api/v1/townPlanning/estateTransaction/bar?year=2015&prefectureCode=12&type=1')
      .expect(200);
  });

  it('不正なクエリパラメータでエラー', () => {
    return request(app.getHttpServer())
      .get('/api/v1/townPlanning/estateTransaction/bar?year=2014&prefectureCode=8&type=1')
      .expect(400);
  })
});
