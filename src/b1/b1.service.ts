import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Cservice } from 'src/c1/nameService';

@Injectable()
export class B1Service {
  constructor(private readonly s: Cservice) {}
  getAuthenticatedUsers(){
    const G = this.s.getColorName();
    console.log("users");
    return G;
  }
}
