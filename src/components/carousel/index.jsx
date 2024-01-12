import React from 'react';
import { Divider } from 'antd';
import data from './data';
import SuccessStory from './success-story';
import './index.css';

const App = () => {
    const [index, setIndex] = React.useState(0);
    const delay = 5000;
    const carousel = data.map((element) => (
        <SuccessStory
            key={element.id}
            imageLink={element.imageLink}
            quote={element.quote}
            info={element.info}
        />
    ));
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === data.length - 1 ? 0 : prevIndex + 1,
                ),
            delay,
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div style={{ width: '80%', marginTop: '64px' }}>
            <Divider orientation="left" plain>
                <h1 style={{ color: '#0066CC' }}>Phản hồi của người dùng</h1>
            </Divider>
            <div className="slideshow">
                <div
                    className="slideshow-slider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {carousel}
                </div>
                <div className="slideshowDots">
                    {data.map((element) => (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                        <div
                            key={element.id}
                            className={`slideshowDot${
                                index === element.id ? ' active' : ''
                            }`}
                            onClick={() => setIndex(element.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default App;
