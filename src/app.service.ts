import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GET: Hello World!';
  }

  setHello(): string {
    return 'POST: Hello World!';
  }
}
