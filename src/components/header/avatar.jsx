import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Popover } from 'antd';
import Card from './userCard';

const App = () => (
    <Popover content={<Card />} trigger="click">
        <Avatar size="large" icon={<UserOutlined />} className="avatar" />
    </Popover>
);
export default App;
