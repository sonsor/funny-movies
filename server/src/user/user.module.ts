import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './services/user.service';
import { User, UserSchema } from "./schemas/user.schema";
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }])
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController]
})
export class UserModule {}