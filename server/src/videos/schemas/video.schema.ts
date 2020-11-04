import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";
import {User} from "../../user/schemas/user.schema";

@Schema({ timestamps: true })
export class Video extends Document {

    @Prop({ required: true })
    videoId: string

    @Prop({ default: false })
    deleted: boolean

    @Prop({ default: true })
    active: boolean

    @Prop({ typ: Types.ObjectId, ref: User.name, required: true })
    sharedBy: Types.ObjectId
}

export const  VideoSchema = SchemaFactory.createForClass(Video)
