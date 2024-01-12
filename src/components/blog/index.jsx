import React, { useState, useEffect } from 'react';
import { Col, Row, Divider } from 'antd';
import Blog from './blog';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);
    const blogList = data.map((blog) => (
        <Col span={6} key={blog.id}>
            <Blog
                title={blog.title}
                imgLink={blog.imgSource}
                description={blog.description}
                link={blog.link}
            />
        </Col>
    ));
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/v1/rss/health')
            .then((res) => setData(res.data.data));
    }, []);
    return (
        <div style={{ margin: '32px' }}>
            <Divider orientation="left" plain>
                <h1 style={{ color: '#0066CC' }}>Một số bài báo</h1>
            </Divider>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Row gutter={24}>{blogList}</Row>
            </div>
        </div>
    );
};

export default App;
