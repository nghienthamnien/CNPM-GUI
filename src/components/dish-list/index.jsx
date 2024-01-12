import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import DishElement from './dish-element';
import callAPI from '../../util/callAPI';
import './index.css';

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        callAPI.get('http://localhost:8080/api/v1/dish?limit=6').then((res) => {
            setData(res.data.data);
        });
    }, []);
    const dishes = data.map((item) => (
        <Col span={8} key={item.id} className="dish-element">
            <Link
                to={`recipes/${item.slug}`}
                state={{ id: item.id, title: item.title }}
            >
                <DishElement dishInfo={item} />
            </Link>
        </Col>
    ));
    return (
        <div className="dish-list">
            <Row gutter={[16, 24]}>{dishes}</Row>
        </div>
    );
};
export default App;
