import { Injectable } from '@nestjs/common';
import { Cservice } from 'src/c1/nameService';

@Injectable()
export class A1Service {
  constructor(private readonly pink: Cservice) {}
  getPink() {
    return this.pink;
  }
}
