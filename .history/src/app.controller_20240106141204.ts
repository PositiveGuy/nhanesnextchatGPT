import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('myGPT')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('message/')
  getHello(): string {
    return this.appService.getHello()
  }
}
