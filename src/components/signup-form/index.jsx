import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { updateAuthenticate } from '../../slice/authsSlice';
import './index.css';

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (value) => {
        (async () => {
            const { data } = await axios.post(
                'http://localhost:8080/api/v1/auth/signup',
                value,
            );
            console.log(data);

            const token = data.data.access_token;
            const userName = `${data.data.last_name} ${data.data.first_name}`;
            localStorage.setItem('auth_token', token);
            localStorage.setItem(
                'user_info',
                JSON.stringify({
                    name: userName,
                }),
            );
            dispatch(updateAuthenticate(true));
            navigate(`/survey`);
        })();
    };
    return (
        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 16,
                offset: 4,
            }}
            layout="horizontal"
            style={{
                maxWidth: 600,
            }}
            onFinish={handleSubmit}
        >
            <Form.Item
                name="first_name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Tên" />
            </Form.Item>
            <Form.Item
                name="last_name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Họ" />
            </Form.Item>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    'The new password that you entered do not match!',
                                ),
                            );
                        },
                    }),
                ]}
            >
                <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>
            <Form.Item
                style={{ paddingTop: '24px' }}
                wrapperCol={{ offset: 9 }}
            >
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        width: '128px',
                        marginLeft: '16px',
                    }}
                >
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
};
export default () => <App />;
