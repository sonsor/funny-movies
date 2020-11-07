export class AuthService {

    constructor(config, http) {
        this.config = config
        this.http = http
    }

    authenticate(data) {
        const url = `${this.config.api.url}/auth/authenticate`
        return this.http.post(url, data)
    }

    profile() {
        const url = `${this.config.api.url}/user/profile`
        return this.http.get(url)
    }

    logout() {
        const url = `${this.config.api.url}/auth/logout`
        return this.http.post(url)
    }
}