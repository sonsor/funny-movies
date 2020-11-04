import {Controller, Post, Request, Body, UseGuards} from '@nestjs/common';
import {ApiBody} from '@nestjs/swagger';
import {LocalAuthGuard} from "../guard/local-auth.guard";
import {AuthService} from "../services/auth.service";
import {LoginDto, RegisterDto} from "../dto";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @ApiBody({type: LoginDto})
    async login(@Body() data: LoginDto, @Request() req) {
        return this.authService.login(req.user);
    }

    @Post('/register')
    async register(@Body() data: RegisterDto) {
        console.log("data :", data)
        const user = this.authService.register(data)
        return this.authService.login(user);
    }
}