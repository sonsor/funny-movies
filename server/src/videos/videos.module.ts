import { Module } from '@nestjs/common';
import { VideosController } from './controllers/videos.controller';
import { VideosService } from './services/videos.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Video, VideoSchema} from './schemas/video.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Video.name,
      schema: VideoSchema
    }])
  ],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
