import {Typography, Row, Col, Divider, Card, Tag} from 'antd';
import YouTube from 'react-youtube';
import {string} from 'prop-types'

const {Title, Paragraph} = Typography

export const VideoItem = ({id, title, description, sharedBy}) => {

    return (
        <>
            <Card>
                <Row>
                    <Col span={10}>
                        <YouTube
                            videoId={id}
                            id={id}
                            opts={{
                                height: '300',
                                width: '500',
                            }}
                        />
                    </Col>
                    <Col span={14} pull={1}>
                        <Title level={3}>{title}</Title>
                        <Paragraph>Shared By <Tag>{sharedBy}</Tag></Paragraph>
                        <Paragraph>{description?.substr(0, 500)}</Paragraph>
                    </Col>
                </Row>
            </Card>
            <Divider/>
        </>
    )
}

VideoItem.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    description: string,
    sharedBy: string
}