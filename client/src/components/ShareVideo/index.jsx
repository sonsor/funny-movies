import {useState, useEffect} from 'react'
import {Modal, Button, Form, Input} from 'antd';
import {getVideoId} from "../../utils/common";
import {useDispatch, useSelector} from "react-redux";
import video from '../../store/modules/video'
import services from "../../services";
import _ from 'lodash'

export const ShareVideo = () => {
    const [visible, setVisible] = useState(false)
    const [details, setDetails] = useState({})
    const shared = useSelector(video.selectors.isShared())
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    useEffect(() => {
        if (shared) {
            setVisible(false)
            dispatch(video.actions.isShared(false))
        }
    }, [shared])

    const show = () => {
        setVisible(true)
    }

    const cancel = () => {
        setVisible(false)
    }

    const validate = async (rule, value) => {
        setDetails({})
        const videoId = getVideoId(value)
        if (!videoId) {
            return new Error('Invalid youtube video url!');
        }


        try {
            const {data} = await services.get('videos').getVideo(videoId)
            setDetails(data)
        } catch (e) {
            console.log(e)
            return new Error('Invalid youtube video url!');
        }
    }

    const onFinish = values => {
        const {url} = values
        const videoId = getVideoId(url)
        const data = {
            videoId,
            title: _.get(details, 'items.0.snippet.title', ''),
            description: _.get(details, 'items.0.snippet.description', ''),
        }
        dispatch(video.actions.shareVideo(data))
    }

    return (
        <>
            <Button onClick={show} className="top-bar-item">
                Share Video
            </Button>
            <Modal
                title="Share Video"
                visible={visible}
                destroyOnClose={true}
                closable={false}
                footer={[
                    <Button key="back" onClick={cancel}>
                        Cacnel
                    </Button>,
                    <Button
                        form="share-video-form"
                        key="submit"
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>,
                ]}

            >
                <Form form={form} name="share-video-form" onFinish={onFinish}>
                    <Form.Item
                        name="url"
                        rules={[
                            {
                                validator: validate,
                            },
                        ]}
                    >
                        <Input placeholder="https://" size="large"/>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}