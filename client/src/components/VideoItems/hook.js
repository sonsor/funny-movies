import {useState, useEffect} from 'react'
import services from "../../services";

export const useVideos = () => {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getVideos().then(data => {
            setVideos(data)
            setLoading(false)
        }).catch(err => {
            setVideos([])
            setLoading(false)
        })
    }, [])

    const getVideos = async () => {
        const {data} = await services.get('videos').getVideos()
        return data.map(item => ({
            id: item._id,
            videoId: item.videoId
        }))
    }


    return {
        videos,
        loading
    }

}