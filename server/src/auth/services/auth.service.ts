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
        let user = await this.userService.findOne(username);
        if (user) {
            if (compareSync(pass, user.password)) {
                const { password, salt, ...result } = user
                return result;
            } else {
                return null
            }
        } else {
            user = await this.register({
                username,
                password: pass
            })

            const { password, salt, ...result } = user
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(data: RegisterDto): Promise<User> {
        return await this.userService.create(data)
    }

}