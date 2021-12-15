import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  

  @Get()
  getNumbers(): number {
    return this.appService.getNumbers();
  }

  @Get()
  getStrings(): string{
    return this.appService.getStrings();
  }

  @Get()
  getArrays(): number[]{
    return this.appService.getArrays();
  }
  

}
