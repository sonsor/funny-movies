import {Typography, Card, Row, Col} from 'antd';
import YouTube from 'react-youtube';
import {string} from 'prop-types'
import {useVideo} from "./hook";
import {Loading} from "../Loading";
const {Title, Paragraph} = Typography

export const VideoItem = ({id, videoId }) => {
    const {video, loading} = useVideo(videoId)

    if (loading) {
        return <Loading/>
    }

    return (
        <Row>
            <Col>
                <YouTube
                    videoId={video.id}
                    id={video.id}
                    opts={{
                        height: '300',
                        width: '500',
                    }}
                />
            </Col>
            <Col>
                <Title level={3}>{video.title}</Title>
                <Paragraph>Shared By wasif@g.com</Paragraph>
                <Paragraph>{video.description?.substr(0, 500)}</Paragraph>
            </Col>
        </Row>
    )
}

VideoItem.propTypes = {
    id: string.isRequired,
    videoId: string.isRequired
}