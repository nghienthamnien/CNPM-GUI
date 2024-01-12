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
                width: 300,
                height: 450,
            }}
            cover={
                <img alt="example" src={imgLink} style={{ height: '170px' }} />
            }
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
                description={
                    <p style={{ whiteSpace: 'normal' }}>{description}</p>
                }
            />
        </Card>
    );
};
export default App;
