import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getNumbers(): number {
    const a = 90;
    const b = 3.14;
    const c = a + b ;
    return c;
  }
  
  getStrings(): string {
   const name='MyName';
   const lasName='LastName';
   const fullName = name+'  '+lasName;
   return fullName;
  }
  
  getArrays(): number[] {
    const list: number[] =[1,2,3]
    return list;

  }

}
