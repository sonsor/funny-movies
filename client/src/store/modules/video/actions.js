import {createAction} from "@reduxjs/toolkit";
import * as constants from './constants'

export const setLoading = createAction(constants.SET_LOADING)
export const setError = createAction(constants.SET_ERROR)
export const fetchAllVideos = createAction(constants.FETCH_ALL_VIDEOS)
export const updateAllVideos = createAction(constants.UPDATE_ALL_VIDEOS)
export const shareVideo = createAction(constants.SHARE_VIDEO)
export const isShared = createAction(constants.VIDEO_SHARED)