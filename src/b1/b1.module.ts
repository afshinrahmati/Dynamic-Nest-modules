import { Module } from '@nestjs/common';
import { B1Service } from './b1.service';
import { B1Controller } from './b1.controller';
import { C1Module } from 'src/c1/c1.module';

@Module({
  imports:[C1Module.forRoot("yellow")],
  providers: [B1Service],
  controllers: [B1Controller]
})
export class B1Module {}
