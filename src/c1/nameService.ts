import { Injectable } from '@nestjs/common';

@Injectable()
export class Cservice {
  constructor(private readonly colorName: string) {}

  getColorName(): string {
    return this.colorName;
  }
}
