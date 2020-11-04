import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'


@Injectable()
export class DatabaseService {
    constructor(
        private configService: ConfigService
    ) {
    }

    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: this.configService.get('database.uri'),
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
    }
}
