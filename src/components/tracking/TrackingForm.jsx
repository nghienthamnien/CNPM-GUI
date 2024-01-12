import React from 'react';
import { Form, Button, notification, InputNumber } from 'antd';
import callAPI from '../../util/callAPI';
import './index.css';

const FormDisabledDemo = ({ hide }) => {
    const onFinish = (values) => {
        callAPI.post('/tracking', values).then((res) => {
            notification.success({
                message: 'Success',
            });
            console.log(res);
            hide();
        });
    };
    return (
        <Form
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="vertical"
            style={{
                maxWidth: 400,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            onFinish={onFinish}
        >
            <Form.Item label="Chiều cao" name="height">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Cân nặng" name="weight">
                <InputNumber />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormDisabledDemo;
