import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Radio, Button, notification } from 'antd';
import callAPI from '../../util/callAPI';
import './index.css';

// const { Option } = Select;

const FormDisabledDemo = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        callAPI
            .post('http://localhost:8080/api/v1/surveys', values)
            .then((res) => {
                console.log(res);
                notification.success({
                    message: 'Gửi khảo sát thành công',
                });
                navigate(`/`);
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
            className="survey-form"
            onFinish={onFinish}
        >
            <Form.Item label="Giới tính" name="gender">
                <Radio.Group>
                    <Radio value="0"> Nam </Radio>
                    <Radio value="1"> Nữ </Radio>
                    <Radio value="2">Khác</Radio>
                </Radio.Group>
            </Form.Item>
            {/* <Form.Item label="Mục tiêu chính" name="goal">
                <Select
                    mode="multiple"
                    placeholder="Please select favourite colors"
                >
                    <Option value="0">
                        Giảm cân để tôi trông đẹp hơn và cảm thấy tốt hơn
                    </Option>
                    <Option value="2">
                        Cải thiện sức khỏe tổng thể của tôi và ngăn ngừa bệnh tật
                    </Option>
                    <Option value="3">
                        Kiểm soát cảm giác thèm ăn, đói hoặc ăn uống theo cảm xúc
                    </Option>
                    <Option value="4">
                        Điều trị một tình trạng sức khỏe cụ thể (chẳng hạn như bệnh
                        tiểu đường loại 2, động kinh, huyết áp cao, PCOS, v.v.)
                    </Option>
                    <Option value="5">
                        Nhận trợ giúp về kế hoạch bữa ăn và cảm hứng nấu ăn
                    </Option>
                    <Option value="6">
                        Tìm sự hỗ trợ từ các chuyên gia và những người khác có trải
                        nghiệm tương tự
                    </Option>
                    <Option value="7">
                        Tìm hiểu về sức khỏe và dinh dưỡng từ khoa học dựa trên bằng
                        chứng mới nhất
                    </Option>
                </Select>
            </Form.Item> */}
            <Form.Item label="Tuổi" name="age">
                <Input type="number" />
            </Form.Item>
            <Form.Item label="Chiều cao" name="height">
                <Input type="number" />
            </Form.Item>
            <Form.Item label="Chiều cao hướng đến" name="goal_height">
                <Input type="number" />
            </Form.Item>
            <Form.Item label="Cân nặng" name="weight">
                <Input type="number" />
            </Form.Item>
            <Form.Item label="Cân nặng hướng đến" name="goal_weight">
                <Input type="number" />
            </Form.Item>
            <Form.Item label="Cường độ tập luyện thể thao" name="physic_active">
                <Radio.Group>
                    <Radio value="0"> Ít vận động </Radio>
                    <Radio value="1"> Thi thoảng </Radio>
                    <Radio value="2">Thường xuyên</Radio>
                </Radio.Group>
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
