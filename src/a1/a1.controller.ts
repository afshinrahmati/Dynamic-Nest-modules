import { Controller, Get, Res } from '@nestjs/common';
import { A1Service } from './a1.service';

@Controller('a1')
export class A1Controller {
  constructor(private s: A1Service) {}
  @Get()
  getColor(@Res() res: any) {
    const n = this.s.getPink();
    res.json(n);
  }
}
