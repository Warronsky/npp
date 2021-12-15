import { Controller, Get} from '@nestjs/common';
import { AppService,Student } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Student {
    return this.appService.getHello();
  }


  

}
