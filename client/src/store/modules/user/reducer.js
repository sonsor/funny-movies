import {createReducer} from "@reduxjs/toolkit";
import state from "../../state";
import storage from "../../../utils/storage";
import * as constants from './constants'
import {fromJS} from "immutable";
import {TOKEN_KEY, PROFILE_KEY} from "../../../constants";

export default createReducer(state.get('auth'), {
    [constants.SET_LOADING]: (state, {payload}) => state.set('loading', payload),
    [constants.UPDATE_TOKEN]: (state, {payload}) => {
        storage.set(TOKEN_KEY, payload)
        return state.set('access_token', payload)
    },
    [constants.UPDATE_USER_PROFILE]: (state, {payload}) => {
        storage.set(PROFILE_KEY, payload)
        return state.set('profile', fromJS(payload))
    }
})