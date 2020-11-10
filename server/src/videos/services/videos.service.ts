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
        }, {
            _id: 1,
            title: 1,
            description: 1,
            sharedBy: 1,
            videoId: 1
        }, {
            createdAt: 1
        }).populate('sharedBy', 'username')
    }

    async create(data: VideoDto, user: string): Promise<Video> {
        const video = new this.videoModel({
            ...data,
            sharedBy: Types.ObjectId(user)
        })
        return video.save()
    }
}
