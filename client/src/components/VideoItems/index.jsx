import {useEffect} from 'react'
import {VideoItem} from "../VideoItem/VideoItem";
import {Loading} from "../Loading";
import videos from '../../store/modules/video'
import {useDispatch, useSelector} from "react-redux";

export const VideoItems = () => {
    const [data, loading] = useSelector(videos.selectors.getVideos())
    const dispatch = useDispatch()

    useEffect(()  => {
        dispatch(videos.actions.fetchAllVideos())
    }, [dispatch])

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            {data.map(item => <VideoItem key={item.id} {...item}/>)}
        </>
    )
}