import {useState, useEffect} from 'react'
import {Modal, Button, Form, Input} from 'antd';
import {getVideoId} from "../../utils/common";
import {useDispatch, useSelector} from "react-redux";
import video from '../../store/modules/video'

export const ShareVideo = () => {
    const [visible, setVisible] = useState(false)
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
        const videoId = getVideoId(value)
        console.log("videoId :", videoId)
        if (!videoId) {
            return new Error('Invalid youtube video url!');
        }
    }

    const onFinish = values => {
        const { url } = values
        const videoId = getVideoId(url)
        dispatch(video.actions.shareVideo({
            videoId
        }))
    }

    return (
        <Form form={form} name="share-video-form" layout="inline" onFinish={onFinish}>
            <Button type="primary" onClick={show}>
                Share Video
            </Button>
            <Modal
                title="Share Video"
                visible={visible}
                destroyOnClose={true}
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

                    <Form.Item
                        name="url"
                        rules={[
                            {
                                validator: validate,
                            },
                        ]}
                    >
                        <Input placeholder="https://"/>
                    </Form.Item>


            </Modal>
        </Form>
    )
}