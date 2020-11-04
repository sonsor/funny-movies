import { IsNotEmpty, MinLength, isBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {Match} from "../../shared/validators/match";

export class RegisterDto {

    @ApiProperty({ required: true, type: String })
    @IsNotEmpty()
    username: string;

    @ApiProperty({ required: true, type: String })
    @IsNotEmpty()
    @MinLength(8)
    password: string;

}