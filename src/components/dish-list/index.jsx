import React from 'react';
import { Col, Divider, Row } from 'antd';
import { Link } from 'react-router-dom';
import DishElement from './dish-element';
import './index.css';

const App = ({ props }) => {
    const dishes = props.data.map((item) => (
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
            <Divider orientation="left">
                <h1 style={{ color: '#0066CC', margin: '0px' }}>
                    {props.name}
                </h1>
            </Divider>
            <Row gutter={[16, 24]}>{dishes}</Row>
        </div>
    );
};
export default App;
