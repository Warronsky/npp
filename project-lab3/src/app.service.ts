import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): Promise<any> {
    let a,b;
    a =12342;
    b = 20000;
    const res = this.TwoNumber(a,b);
    return res;
  }

  public async TwoNumber(a:number,b:number):Promise<any>{
     let one:string = "Число" + ".\n\n" + a + ".\n\n" + "більше ніж" + ".\n\n" + b;
     let two:string = "Число" + ".\n\n" + b + ".\n\n" + "більше ніж" + ".\n\n" + a;

     if (a > b) {
       return one; 
     }
     else{
      return two;
     }


  }



  
 

}
