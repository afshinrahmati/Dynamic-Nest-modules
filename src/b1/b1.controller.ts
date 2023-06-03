import { Controller, Get, Res } from '@nestjs/common';
import { B1Service } from './b1.service';

@Controller('b1')
export class B1Controller {
  constructor(private service: B1Service) {}
  @Get()
  test(@Res() res: any) {
    res.send(this.service.getAuthenticatedUsers());
  }
}
