import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty} from "class-validator";

export class VideoDto {

    @ApiProperty({ required: true, type: String })
    @IsNotEmpty()
    videoId: string;

}