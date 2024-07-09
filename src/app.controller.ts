import { Headers, Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAccidentDto } from './dto/accident.dto';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly config: ConfigService
  ) { }


  private isAuthorization(token){
    return `Bearer ${this.config.get("TOKEN")}` !== token
  }
  
  @Post("/accident")
  async save(@Headers("Authorization") token: String,
    @Body() accidentDto: CreateAccidentDto) {

      if(this.isAuthorization(token)) {
        return {status: "FAIL", message: "Not Authorization Request!"}
      }

    try {
      await this.appService.saveAccident(accidentDto);
    } catch (e) {
      return { status: "FAIL", message: e.message }
    }
    return { status: "OK" }
  }

  //TODO : 이름 & 날짜 (옵션) 보다 크다 로 조회 하는 METHOD 생성

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
