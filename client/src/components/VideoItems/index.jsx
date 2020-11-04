import {VideoItem} from "../VideoItem/VideoItem";
import {useVideos} from "./hook";
import {Loading} from "../Loading";

export const VideoItems = () => {

    const {videos, loading} = useVideos()

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            {videos.map(item => <VideoItem key={item.id} {...item}/>)}
        </>
    )
}