import {Controller, Post, Request, Body, UseGuards} from '@nestjs/common';
import {ApiBody} from '@nestjs/swagger';
import {LocalAuthGuard} from "../guard/local-auth.guard";
import {AuthService} from "../services/auth.service";
import {LoginDto, RegisterDto} from "../dto";
import {JwtAuthGuard} from "../guard/jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('/authenticate')
    @ApiBody({type: LoginDto})
    async authenticate(@Body() data: LoginDto, @Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/logout')
    async logout(@Request() req) {
        return req.logout()
    }
}