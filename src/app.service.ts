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
    await this.repository.save(new CarAccident({ ...accident }));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
