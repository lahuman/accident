import { Headers, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAccidentDto } from './dto/accident.dto';
import { ConfigService } from '@nestjs/config';
import { SearchDto } from './dto/search.dto';
import { Threshlod } from './dto/threshold';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly config: ConfigService
  ) { }


  private isAuthorization(token) {
    return `Bearer ${this.config.get("TOKEN")}` !== token
  }

  @Post("/accident")
  async save(@Headers("Authorization") token: String,
    @Body() accidentDto: CreateAccidentDto) {

    if (this.isAuthorization(token)) {
      return { status: "FAIL", message: "Not Authorization Request!" }
    }

    try {
      await this.appService.saveAccident(accidentDto);
    } catch (e) {
      return { status: "FAIL", message: e.message }
    }
    return { status: "OK" }
  }


  @Get("/accident")
  async get(@Headers("Authorization") token: String,
    @Query() searchDto: SearchDto) {
    if (this.isAuthorization(token)) {
      return { status: "FAIL", message: "Not Authorization Request!" }
    }

    try {
      const list = await this.appService.getAccident(searchDto);
      return {
        status: "OK", data: list
      }
    } catch (e) {
      return { status: "FAIL", message: e.message }
    }

  }


  @Get("/accdent/threshlod")
  getThreshlod(): Threshlod {
    // accelerationThreshold: number;
    // rotationRateThreshold: number;
    // speedThreshold: number;
    // timeThreshlod: number;
    return new Threshlod(1.5,2, 20, 10) 
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
