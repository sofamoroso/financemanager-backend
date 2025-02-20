import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getHello(): string {
    return 'Hello from Category Service!';
  }
}
