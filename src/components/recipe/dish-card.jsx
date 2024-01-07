import React, { useState } from 'react';
import { Card, Rate, Button, Modal } from 'antd';
import { ClockCircleOutlined, StarOutlined } from '@ant-design/icons';

const desc = ['Quá tệ', 'Tệ', 'Bình thường', 'Tốt', 'Tuyệt vời'];

const App = ({ title, description, time, rating }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rateValue, setRateValue] = useState(3);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        console.log(rateValue);
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Card bordered={false} className="dish-card">
            <aside role="note">
                <div>
                    <ClockCircleOutlined />
                    &nbsp; {`${time} m`}
                </div>
            </aside>
            <h1
                style={{
                    fontSize: '2.1111111111rem',
                    color: '#7D6666',
                    margin: 0,
                }}
            >
                {title}
            </h1>
            <Rate value={rating} allowClear disabled /> &nbsp;
            <p>{description}</p>
            <Button
                onClick={showModal}
                icon={<StarOutlined />}
                size="large"
                shape="round"
            >
                Đánh giá
            </Button>
            <Modal
                title={
                    <h1
                        style={{
                            fontSize: '2.1111111111rem',
                            color: '#7D6666',
                            margin: 0,
                        }}
                    >
                        {title}
                    </h1>
                }
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        onClick={handleOk}
                        size="large"
                    >
                        Gửi đánh giá
                    </Button>,
                ]}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: ' center',
                    }}
                >
                    <p style={{ lineHeight: 1.1, fontSize: '18px' }}>
                        Bạn thấy công thức này như thế nào ?
                    </p>
                    <Rate
                        style={{ fontSize: 64 }}
                        onChange={setRateValue}
                        value={rateValue}
                        tooltips={desc}
                    />
                    <p>{rateValue ? <span>{desc[rateValue - 1]}</span> : ''}</p>
                </div>
            </Modal>
        </Card>
    );
};
export default App;
