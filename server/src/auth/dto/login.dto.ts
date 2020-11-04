import { MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {

    @ApiProperty({ required: true, type: String })
    @IsNotEmpty()
    username: string;

    @ApiProperty({ required: true, type: String })
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}