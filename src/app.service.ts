import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarAccident } from './entity/carAccident.entity';
import { Like, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateAccidentDto } from './dto/accident.dto';
import { SearchDto } from './dto/search.dto';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(CarAccident)
    private repository: Repository<CarAccident>,
  ) { }

  async saveAccident(accident: CreateAccidentDto): Promise<void> {
    const entity = new CarAccident({ ...accident, regDtm: new Date() });
    await this.repository.save(entity);
  }

  async getAccident(searchDto: SearchDto) {
    const queryBuilder = this.repository.createQueryBuilder('CarAccident');
  
    if (searchDto.beginDate) {
      const beginDate = new Date(Date.parse(searchDto.beginDate)).toISOString().replace("T", " ").replace("Z", "");
      queryBuilder.andWhere('CarAccident.REG_DTM >= TO_TIMESTAMP(:beginDate, \'YYYY-MM-DD HH24:MI:SS.FF\')', { beginDate });
    }
  
    if (searchDto.name) {
      queryBuilder.andWhere('CarAccident.NAME LIKE :name', { name: `%${searchDto.name}%` });
    }
  
    const accidents = await queryBuilder.getMany();
    
    return accidents;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
