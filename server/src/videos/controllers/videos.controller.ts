import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {VideosService} from "../services/videos.service";
import {LocalAuthGuard} from "../../auth/guard/local-auth.guard";
import {ApiBody} from "@nestjs/swagger";
import {LoginDto} from "../../auth/dto";
import {VideoDto} from "../dto/video.dto";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";

@Controller('videos')
export class VideosController {
    constructor(
        private videosService: VideosService
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Post('/')
    @ApiBody({type: VideoDto})
    async create(@Body() video: VideoDto, @Request() req) {
        return this.videosService.create(video, req.user.userId)
    }

    @Get('/')
    async all() {
        return this.videosService.findAll()
    }
}
