import React from 'react';
import { Card, Rate } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const App = ({ title, description, time, rating }) => (
    <Card
        bordered={false}
        style={{
            width: 400,
        }}
        className="dish-card"
    >
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
        <p style={{ fontSize: '20px' }}>{description}</p>
    </Card>
);
export default App;
