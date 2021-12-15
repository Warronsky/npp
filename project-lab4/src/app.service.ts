import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): Student {  
    const stud = new Student("Сергій","Котяш",2001,2,122,"бакалавріат","-");
    return stud;
    
  }
  
}
export class Student {
  namef:string;
  namel:string;
  rkna:number;
  course:number;
  prof:number;
  stupin:string;
  obsh:string;

  constructor(namef,namel,rkna,course,prof,stupin,obsh){
          this.namef =namef;
          this.namel =namel;
          this.rkna =rkna;
          this.course =course;
          this.prof =prof;
          this.stupin =stupin;
          this.obsh =obsh;
  }
}