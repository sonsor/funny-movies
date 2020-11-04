import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    salt: string;

    @Prop({ default: true })
    active: boolean

    @Prop({ default: false })
    deleted: boolean

    @Prop()
    consumerKey: string

    @Prop()
    consumerSecret: string
}

export const UserSchema = SchemaFactory.createForClass(User);