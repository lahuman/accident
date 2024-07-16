import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('CAR_ACCIDENT_M')
export class CarAccident {
  constructor(partial: Partial<CarAccident>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  accelerometer: string;

  @Column()
  gyroscope: string;

  @Column()
  osInfo: string;

  @Column('decimal', { precision: 38, scale: 0 })
  speed: number;

  @Column('decimal', { precision: 38, scale: 0 })
  acceleration: number;

  @Column('decimal', { precision: 38, scale: 0 })
  rotationRate: number;

  @Column('decimal', { precision: 38, scale: 0 })
  latitude: number;

  @Column('decimal', { precision: 38, scale: 0 })
  longitude: number;

  @Column('decimal', { precision: 38, scale: 0 })
  accelerationThreshold: number;

  @Column('decimal', { precision: 38, scale: 0 })
  rotationRateThreshold: number;

  @Column('decimal', { precision: 38, scale: 0 })
  speedThreshold: number;

  @Column()
  status: string;


  @CreateDateColumn()
  regDtm: Date;
}
