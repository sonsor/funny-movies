import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import {RegisterDto} from "../dto";
import {User} from "../../user/schemas/user.schema";
import { compareSync } from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user) {
            if (compareSync(pass, user.password)) {
                const { password, salt, ...result } = user.toObject()
                return result;
            } else {
                return null
            }
        } else {
            return await this.register(username, pass)
        }
        return null;
    }

    async register(username: string, pass: string): Promise<any> {
        const data = new RegisterDto()
        data.username = username
        data.password = pass
        await this.userService.create(data)
        const user = await this.userService.findOne(username);
        const { password, salt, ...result } = user.toObject()
        return result;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}