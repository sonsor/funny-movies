import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import {UserModule} from '../user/user.module';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {Constants} from "../config/constants";
import {JwtStrategy} from "./strategy/jwt.strategy";
import {LocalStrategy} from "./strategy/local.strategy";
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: Constants.secret,
      signOptions: {expiresIn: '3600s'},
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
