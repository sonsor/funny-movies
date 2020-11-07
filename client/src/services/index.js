import { Http } from '../utils/http'
import config from '../config'
import {VideosService} from "./videos.service";
import {AuthService} from "./auth.service";

class Services {

    constructor() {
        this.services = new Map()
        this.init()
    }

    init() {

        const http = new Http(config)
        const videos = new VideosService(config, http)
        const auth = new AuthService(config, http)

        this.add('auth', auth)
        this.add('videos', videos)
    }

    add(name, service) {
        this.services.set(name, service)
    }

    get(name) {
        if (!this.services.has(name)) {
            throw new Error('Service Not Exists')
        }
        return this.services.get(name)
    }
}

const services = new Services()
export default services