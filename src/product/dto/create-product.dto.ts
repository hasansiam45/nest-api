import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    name: string;
    @ApiProperty()
    @IsNumber()
    price: number;
    @ApiProperty()
    @IsNumber()
    quantity: number;
}
