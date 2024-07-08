import { IsNotEmpty } from "class-validator";

export class CreateAccidentDto {

    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    accelerometer: string;
    @IsNotEmpty()
    gyroscope: string;
    @IsNotEmpty()
    speed: number;
    @IsNotEmpty()
    acceleration: number;
    @IsNotEmpty()
    rotationRate: number;
    @IsNotEmpty()
    latitude: number;
    @IsNotEmpty()
    longitude: number;
  
}