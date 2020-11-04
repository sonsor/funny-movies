import {useState, useEffect} from 'react'
import { Form, Input, Button } from 'antd';

export const LoginRegisterForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = values => {
        console.log('Finish:', values);
    }
    return (
        <Form form={form} name="login-register-form" layout="inline" onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Login / Register
                    </Button>
                )}
            </Form.Item>
        </Form>
    )
}