import {fromJS} from "immutable";
import * as constants from '../constants'
import storage from '../utils/storage'

export default fromJS({
    auth: {
        access_token: storage.get(constants.TOKEN_KEY, ''),
        profile: storage.get(constants.PROFILE_KEY, {}),
        loading: false,
        error: ''
    },
    videos: {
        list: [],
        error: '',
        success: '',
        shared: false
    }
})
