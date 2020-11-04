import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Video} from "../schemas/video.schema";
import {VideoDto} from "../dto/video.dto";
import {User} from "../../user/schemas/user.schema";


@Injectable()
export class VideosService {
    constructor(
        @InjectModel(Video.name) private videoModel: Model<Video>
    ) {
    }

    async findAll(): Promise<any[]> {
        return this.videoModel.find({
            deleted: false,
            active: true
        }, null, {
            createdAt: -1
        }).populate('sharedBy', 'username')
    }

    async create(data: VideoDto, user: string): Promise<Video> {
        const video = new this.videoModel({
            videoId: data.videoId,
            sharedBy: Types.ObjectId(user)
        })
        return video.save()
    }
}
