import { IsNotEmpty, IsOptional } from "class-validator";

export class SearchDto {
    @IsNotEmpty()
    name: string;
    @IsOptional()
    beginDate: string;
}