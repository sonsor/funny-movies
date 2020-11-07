import {takeLatest, takeEvery, call, put, all} from 'redux-saga/effects'
import video from './index'
import _ from 'lodash'

export class VideoRepository {
    constructor(services) {
        this.services = services
    }

    * init() {
        yield all([
            takeEvery(video.constants.FETCH_ALL_VIDEOS, this.all.bind(this)),
            takeLatest(video.constants.SHARE_VIDEO, this.share.bind(this))
        ])
    }

    * all(action) {
        yield put(video.actions.setLoading(true))
        try {
            const {data} = yield call(
                [this.services.get('videos'), 'getVideos']
            )

            const videos = _.keyBy(data, 'videoId')

            const details = yield all(data.map(video => call(
                [this.services.get('videos'), 'getVideo'],
                video.videoId
            )))

            details.forEach(video => {
                videos[_.get(video, 'data.items.0.id')] = {
                    id: _.get(video, 'data.items.0.id'),
                    title: _.get(video, 'data.items.0.snippet.title', ''),
                    description: _.get(video, 'data.items.0.snippet.description', ''),
                    shareBy: _.get(videos, 'shareBy.username', '')
                }
            })

            yield put(video.actions.updateAllVideos(Object.values(videos)))

        } catch (e) {
            console.log(e)
            yield put(video.actions.setError(true))
        }
        yield put(video.actions.setLoading(false))
    }

    *share(action) {
        try {
            const {data} = yield call(
                [this.services.get('videos'), 'share'],
                action.payload
            )

            yield put(video.actions.isShared(true))
            yield put(video.actions.fetchAllVideos())
        } catch (e) {
            console.log(e)
        }
    }
}