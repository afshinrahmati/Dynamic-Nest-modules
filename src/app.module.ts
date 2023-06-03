import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { A1Module } from './a1/a1.module';
import { B1Module } from './b1/b1.module';
import { C1Module } from './c1/c1.module';

@Module({
  imports: [A1Module, B1Module],
  controllers: [],
})
export class AppModule {}
