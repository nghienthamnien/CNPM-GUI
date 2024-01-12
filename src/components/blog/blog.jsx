import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const App = ({ imgLink, title, description, link }) => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <Card
            hoverable
            style={{
                width: 200,
            }}
            cover={<img alt="example" src={imgLink} />}
            onClick={() => {
                openInNewTab(link);
            }}
        >
            <Meta
                title={
                    <div style={{ whiteSpace: 'initial', color: '#404040' }}>
                        {title}
                    </div>
                }
                description={description}
            />
        </Card>
    );
};
export default App;
