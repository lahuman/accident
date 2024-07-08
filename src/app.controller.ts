import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAccidentDto } from './dto/accident.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/accident")
  async save(req: CreateAccidentDto) {
    this.appService.saveAccident(req);
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
