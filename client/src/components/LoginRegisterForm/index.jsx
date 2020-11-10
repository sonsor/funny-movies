import {useState, useEffect} from 'react'
import {Form, Input, Button} from 'antd';
import user from '../../store/modules/user'
import {useDispatch, useSelector} from "react-redux";

export const LoginRegisterForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState(); // To disable submit button at the beginning.
    const [loading, error] = useSelector(user.selectors.getMetas())
    const dispatch = useDispatch()

    useEffect(() => {
        forceUpdate({});
    }, []);

    useEffect(() => {
        /*  form.setFields({
              passsword: {
                  value: '',
                  errors: [new Error('Invalid Password')],
              },
          })*/
    }, [error])

    const onFinish = values => {
        dispatch(user.actions.authenticateUser({
            username: values.username,
            password: values.password
        }))

    }

    return (
        <div className="text-justify-right">
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
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 8,
                            message: 'password minimum 8 characters.'
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
                                !form.isFieldsTouched() ||
                                form.getFieldsError().filter(({errors}) => errors.length).length ||
                                loading
                            }
                        >
                            Login / Register
                            {form.getFieldsError().filter(({errors}) => errors.length).length}
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    )
}