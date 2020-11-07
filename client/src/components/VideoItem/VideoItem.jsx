import {Typography, Row, Col} from 'antd';
import YouTube from 'react-youtube';
import {string} from 'prop-types'
const {Title, Paragraph} = Typography

export const VideoItem = ({ id, title, description, shareBy }) => {

    return (
        <Row>
            <Col>
                <YouTube
                    videoId={id}
                    id={id}
                    opts={{
                        height: '300',
                        width: '500',
                    }}
                />
            </Col>
            <Col>
                <Title level={3}>{title}</Title>
                <Paragraph>Shared By {shareBy}</Paragraph>
                <Paragraph>{description?.substr(0, 500)}</Paragraph>
            </Col>
        </Row>
    )
}

VideoItem.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    description: string,
    shareBy: string
}