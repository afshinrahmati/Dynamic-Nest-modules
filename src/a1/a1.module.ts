import { Module } from '@nestjs/common';
import { A1Service } from './a1.service';
import { A1Controller } from './a1.controller';

@Module({
  providers: [A1Service],
  controllers: [A1Controller]
})
export class A1Module {}
