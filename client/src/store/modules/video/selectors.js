import {createSelector} from "reselect";

const VideosSelector = () => state => state.get('videos')

export const getVideos = () =>
    createSelector(
        VideosSelector(),
        state => [
            Object.values(state.get('byId').toJS()),
            Boolean(state.get('loading'))
        ]
    )

export const isShared = () =>
    createSelector(
        VideosSelector(),
        state => Boolean(state.get('shared'))
    )