import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  fetch(id): string {
    return `Hello World! ${id}`;
  }
}