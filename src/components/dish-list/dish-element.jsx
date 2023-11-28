import React from 'react';
import { StarFilled, ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const App = ({ dishInfo }) => {
    const { dishImage, title, description, netCarbs, rating, time } = dishInfo;
    return (
        <Card
            cover={<img alt="example" src={dishImage} />}
            actions={[
                <div>
                    {rating}
                    &nbsp;
                    <StarFilled
                        style={{
                            color: 'yellow',
                        }}
                    />
                </div>,
                <div>
                    {time}
                    &nbsp;
                    <ClockCircleOutlined />
                </div>,
            ]}
        >
            <Meta
                // avatar={<Avatar src={netCarbs} />}
                title={title}
                description={description}
            />
        </Card>
    );
};
export default App;
