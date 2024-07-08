import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAccidentDto } from './dto/accident.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/accident")
  async save(@Body() accidentDto: CreateAccidentDto ) {
    await this.appService.saveAccident(accidentDto);
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
