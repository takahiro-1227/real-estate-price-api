import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  hoge(): string {
    return 'This action returns all cats';
  }
}
