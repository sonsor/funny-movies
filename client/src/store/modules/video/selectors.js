import {createSelector} from "reselect";

const VideosSelector = () => state => state.get('videos')

export const getVideos = () =>
    createSelector(
        VideosSelector(),
        state => [
            state.get('list').toJS().map(video => ({
                id: video.videoId,
                title: video.title,
                description: video.description,
                sharedBy: video.sharedBy.username
            })),
            Boolean(state.get('loading'))
        ]
    )

export const isShared = () =>
    createSelector(
        VideosSelector(),
        state => Boolean(state.get('shared'))
    )