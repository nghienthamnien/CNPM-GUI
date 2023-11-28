import React from 'react';
import { Col, Divider, Row } from 'antd';
import DishElement from './dish-element.jsx';
import './index.css';

const App = ({ props }) => {
    const dishes = props.data.map((item) => (
        <Col span={8} key={item.id} className="dish-element">
            <DishElement dishInfo={item} />
        </Col>
    ));
    return (
        <div className="dish-list">
            <Divider orientation="left" style={{ margin: '16px 32px' }}>
                <h2 style={{ color: '#0066CC' }}>{props.name}</h2>
            </Divider>
            <Row gutter={[16, 24]}>{dishes}</Row>
        </div>
    );
};
export default App;
