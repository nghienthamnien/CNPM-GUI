import React from 'react';
import { Col, Row, Divider } from 'antd';
import Blog from './blog';
import data from './data';

const blogList = data.map((blog) => (
    <Col span={6} key={blog.id}>
        <Blog
            title={blog.title}
            imgLink={blog.imgLink}
            description={blog.description}
            link={blog.link}
        />
    </Col>
));

const App = () => (
    <div style={{ margin: '32px' }}>
        <Divider orientation="left" plain>
            <h1 style={{ color: '#0066CC' }}>Một số bài báo</h1>
        </Divider>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Row gutter={24}>{blogList}</Row>
        </div>
    </div>
);

export default App;
