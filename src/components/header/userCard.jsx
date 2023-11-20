import React from 'react';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { updateAuthenticate } from '../../slice/authsSlice';
const App = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        localStorage.removeItem('auth_token');
        dispatch(updateAuthenticate(false));
    };
    return (
        <Card
            title="User Name"
            bordered={false}
            style={{
                width: 250,
            }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <Button type="primary" size={'large'} onClick={handleClick}>
                Log out
            </Button>
        </Card>
    );
};
export default App;
