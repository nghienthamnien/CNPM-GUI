import React from 'react';
import { StarFilled, ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;
const App = ({ dishInfo }) => {
    const { dishImage, title, rating, time } = dishInfo;
    return (
        <Card
            cover={<img alt="example" src={dishImage} />}
            hoverable
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
            <Meta title={title} />
        </Card>
    );
};

App.propTypes = {
    dishInfo: PropTypes.shape({
        dishImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
    }).isRequired,
};
export default App;
