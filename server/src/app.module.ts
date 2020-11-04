import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { VideosModule } from './videos/videos.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    VideosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
