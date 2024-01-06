import React from 'react';
import { List } from 'antd';

const App = ({ ingredients }) => (
    <div className="ingredient">
        <h2>Nguyên liệu</h2>
        <List
            size="large"
            itemLayout="horizontal"
            dataSource={ingredients}
            split={false}
            renderItem={(item) => (
                <List.Item>
                    <p>{item}</p>
                </List.Item>
            )}
        />
    </div>
);
export default App;
