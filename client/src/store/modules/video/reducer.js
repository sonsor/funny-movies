import {createReducer} from "@reduxjs/toolkit";
import state from "../../state";
import {fromJS} from "immutable";
import {keyBy} from 'lodash'
import * as constants from './constants'

export default createReducer(state.get('videos'), {
    [constants.SET_LOADING]: (state, {payload}) => state.set('loading', payload),
    [constants.SET_ERROR]: (state, {payload}) => state.set('error', payload),
    [constants.UPDATE_ALL_VIDEOS]: (state, {payload}) => {
        const videos = fromJS(keyBy(payload, 'id'))
        return state.set('byId', videos)
    },
    [constants.VIDEO_SHARED]: (state, {payload}) => state.set('shared', payload)
})