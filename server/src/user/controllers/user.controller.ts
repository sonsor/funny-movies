import {Controller, Get, Req, UseGuards, Request} from '@nestjs/common';
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";

@Controller('user')
export class UserController {

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async profile(@Request() req) {
        console.log("req : ", req.user)
        return req.user
    }
}
