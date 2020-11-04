import {useState, useEffect} from 'react'
import services from "../../services";

export const useVideo = videoId => {

    const [video, setVideo] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getVideo(videoId).then(data => {
            setVideo(data)
            setLoading(false)
        }).catch(err => {
            setVideo({})
            setLoading(false)
        })
    }, [videoId])

    const getVideo = async videoId => {
        const {data} = await services.get('videos').getVideo(videoId)
        return {
            id: data.items[0].id,
            title: data.items[0].snippet.title,
            description: data.items[0].snippet.description,
        }
    }

    return {
        video,
        loading
    }

}