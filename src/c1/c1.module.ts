import { DynamicModule, Module, Provider, forwardRef } from '@nestjs/common';
import { Cservice } from './nameService';
import { B1Module } from 'src/b1/b1.module';

@Module({
  providers: [Cservice],
})
export class C1Module {
  static forRoot(colorName: string): DynamicModule {
    return {
      module: C1Module,
      providers: [
        {
          provide: Cservice,
          useValue: new Cservice(colorName),
        },
      ],
      exports: [Cservice],
    };
  }
}
