import { IsNotEmpty } from "class-validator";

export class CreateAccidentDto {

    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    accelerometer: string;
    @IsNotEmpty()
    gyroscope: string;
    speed: number;
    acceleration: number;
    rotationRate: number;
    latitude: number;
    longitude: number;
  
}