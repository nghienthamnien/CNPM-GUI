import React from 'react';
import axios from 'axios';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox } from 'antd';
import { updateAuthenticate } from '../../slice/authsSlice';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const prevPath = location.state ? location.state.prevPath : '/';
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const user = { ...values };
        (async () => {
            const { data } = await axios.post(
                'http://localhost:8080/api/v1/auth/login',
                user,
                { withCredentials: true },
            );
            console.log(data);
            if (data.success) {
                const { token, userName } = data.payload;
                localStorage.setItem('auth_token', token);
                localStorage.setItem(
                    'user_info',
                    JSON.stringify({
                        name: userName,
                    }),
                );
                dispatch(updateAuthenticate(true));
                navigate(`${prevPath}`);
            }
        })();
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 15, offset: 4 }}
            style={{ minWidth: 600 }}
            size={'large'}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot ?" href="">
                    Forgot password
                </a>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ width: '180px' }}
                >
                    Log in
                </Button>
                <div>
                    Or
                    <a href="http://localhost:5173/auth/signup">
                        register now!
                    </a>
                </div>
            </Form.Item>
        </Form>
    );
};
export default App;
