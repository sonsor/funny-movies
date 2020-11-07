import { takeEvery, call, put, all } from 'redux-saga/effects'
import user from './index'

export class UserRepository {

    constructor(services) {
        this.services = services
    }

    *init() {
        yield all([
            takeEvery(user.constants.AUTHENTICATE_USER, this.authenticate.bind(this))
        ])
    }

    *authenticate(action) {
        yield put(user.actions.setLoading(true))
        try {
            const {data} = yield call(
                [this.services.get('auth'), 'authenticate'],
                action.payload
            )

            yield put(user.actions.updateToken(data.access_token))

            const {data: profile} = yield call(
                [this.services.get('auth'), 'profile']
            )

            yield put(user.actions.updateUserData(profile))
        } catch (e) {
            yield put(user.actions.setError(true))
        }
        yield put(user.actions.setLoading(true))
    }

}