import { Module } from '@nestjs/common';
import { A1Service } from './a1.service';
import { A1Controller } from './a1.controller';
import { C1Module } from 'src/c1/c1.module';

@Module({
  imports: [C1Module.forRoot('pink')],
  providers: [A1Service],
  controllers: [A1Controller],
})
export class A1Module {}
