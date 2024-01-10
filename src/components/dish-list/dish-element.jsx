import React from 'react';
import { StarFilled, ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;
const App = ({ dishInfo }) => {
    const dishImage =
        'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/pho-style-beef-noodle-soup-f314a261.jpg';
    const { title, rating, time } = dishInfo;
    return (
        <Card
            cover={<img alt="example" src={dishImage} />}
            hoverable
            actions={[
                <div>
                    {rating || 4}
                    &nbsp;
                    <StarFilled
                        style={{
                            color: 'yellow',
                        }}
                    />
                </div>,
                <div>
                    {time || 30}&nbsp;
                    <ClockCircleOutlined />
                </div>,
            ]}
        >
            <Meta
                title={
                    <div style={{ whiteSpace: 'initial', color: '#404040' }}>
                        {title}
                    </div>
                }
            />
        </Card>
    );
};

App.propTypes = {
    dishInfo: PropTypes.shape({
        dishImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
};
export default App;
