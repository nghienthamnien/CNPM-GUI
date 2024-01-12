import React from 'react';
import { Divider } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import data from './data';
import SuccessStory from './SuccessStory';
import './index.css';

const App = () => {
    const [index, setIndex] = React.useState(0);
    const carousel = data.map((element) => (
        <SuccessStory
            key={element.id}
            imageLink={element.imageLink}
            quote={element.quote}
            info={element.info}
        />
    ));

    return (
        <div className="user-response">
            <Divider orientation="left" plain>
                <h1 style={{ color: '#0066CC' }}>Phản hồi của người dùng</h1>
            </Divider>
            <LeftOutlined
                onClick={() => {
                    setIndex((prevIndex) =>
                        prevIndex === 0 ? 0 : prevIndex - 1,
                    );
                }}
            />
            <div className="slideshow">
                <div
                    className="slideshow-slider"
                    style={{
                        transform: `translate3d(${-index * 33}% , 0, 0)`,
                    }}
                >
                    {carousel}
                </div>
                <div className="slideshowDots">
                    {data.slice(1, -1).map((element) => (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                        <div
                            key={element.id}
                            className={`slideshowDot${
                                index === element.id - 1 ? ' active' : ''
                            }`}
                            onClick={() => setIndex(element.id - 1)}
                        />
                    ))}
                </div>
            </div>
            <RightOutlined
                onClick={() => {
                    setIndex((prevIndex) =>
                        prevIndex === data.length - 3
                            ? data.length - 3
                            : prevIndex + 1,
                    );
                }}
            />
        </div>
    );
};
export default App;
