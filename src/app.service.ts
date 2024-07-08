import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarAccident } from './entity/carAccident.entity';
import { Repository } from 'typeorm';
import { CreateAccidentDto } from './dto/accident.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CarAccident)
    private repository: Repository<CarAccident>,
  ) {}

  async saveAccident(accident: CreateAccidentDto): Promise<void> {
    const entity =  new CarAccident({ ...accident, regDtm: new Date() });
    await this.repository.save(entity);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
