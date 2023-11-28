import React from 'react';
import { Button, Form, Input } from 'antd';
import './index.css';

const App = () => {
    const handleSubmit = (value) => {
        console.log(value);
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
                name={'fisrt_name'}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Họ" />
            </Form.Item>
            <Form.Item
                name={'last_name'}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Tên" />
            </Form.Item>
            <Form.Item
                name={'username'}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item
                name={'password'}
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
