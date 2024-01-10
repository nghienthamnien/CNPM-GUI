import React, { useEffect } from 'react';
import axios from 'axios';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateAuthenticate } from '../../slice/authsSlice';
import './index.css';

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const prevPath = location.state ? location.state.prevPath : '/';
    const isAuth = useSelector((state) => state.auths.isAuthenticate);
    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);
    const onFinish = (values) => {
        const user = { ...values };
        (async () => {
            const { data, status } = await axios.post(
                'http://localhost:8080/api/v1/auth/login',
                user,
                { withCredentials: true },
            );
            if (status === 200) {
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
            size="large"
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
                    placeholder="Tên đăng nhập"
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
                    placeholder="Mật khẩu"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="login-form-forgot ?" href="#">
                    Quên mật khẩu ?
                </a>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ width: '180px' }}
                >
                    Đăng nhập
                </Button>

                <div>
                    Hoặc &nbsp;
                    <a href="http://localhost:5173/auth/signup">
                        Tạo tài khoản mới
                    </a>
                </div>
            </Form.Item>
        </Form>
    );
};
export default App;
