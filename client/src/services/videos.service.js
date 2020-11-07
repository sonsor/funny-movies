export class VideosService {

    constructor(config, http) {
        this.config = config
        this.http = http
    }

    getVideos() {
        const url = `${this.config.api.url}/videos`
        return this.http.get(url)
    }

    getVideo(id) {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${id}&key=${this.config.youtube.token}`
        return this.http.get(url)
    }

    share(data) {
        const url = `${this.config.api.url}/videos`
        return this.http.post(url, data)
    }

}