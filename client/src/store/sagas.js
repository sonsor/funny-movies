import services from '../services'
import { fork, all } from 'redux-saga/effects'
import {UserRepository} from "./modules/user/repository";
import {VideoRepository} from "./modules/video/repository";

function* rootSaga() {
    const user = new UserRepository(services)
    const video = new VideoRepository(services)


    yield all([
        fork(user.init.bind(user)),
        fork(video.init.bind(video)),
    ])
}

export default rootSaga