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

  @Column()
  speed: number;

  @Column()
  acceleration: number;

  @Column()
  rotationRate: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  accelerationThreshold: number;

  @Column()
  rotationRateThreshold: number;

  @Column()
  speedThreshold: number;

  @Column()
  status: string;


  @CreateDateColumn()
  regDtm: Date;
}
