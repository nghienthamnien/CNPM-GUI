import React from 'react';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateAuthenticate } from '../../slice/authsSlice';

const App = () => {
    const user = JSON.parse(localStorage.getItem('user_info'));
    const userName = user ? user.name : 'User Name';
    const dispatch = useDispatch();
    const handleClick = () => {
        localStorage.clear();
        dispatch(updateAuthenticate(false));
    };
    return (
        <Card
            title={`${userName}`}
            bordered={false}
            style={{
                width: 250,
                fontSize: '18px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        width: '240px',
                        height: '40px',
                        margin: '4px 0px',
                    }}
                >
                    <Link to="/survey">
                        <Button size="large" style={{ width: '202px' }}>
                            Cập nhật sức khỏe
                        </Button>
                    </Link>
                </div>

                <div
                    style={{
                        width: '240px',
                        height: '40px',
                        margin: '4px 0px',
                    }}
                >
                    <Link to="/contribute">
                        <Button size="large" style={{ width: '202px' }}>
                            Chia sẻ công thức
                        </Button>
                    </Link>
                </div>

                <div
                    style={{
                        width: '240px',
                        height: '40px',
                        margin: '4px 0px',
                    }}
                >
                    <Link to="/shopping-list">
                        <Button size="large" style={{ width: '202px' }}>
                            Shopping List
                        </Button>
                    </Link>
                </div>
                <div
                    style={{
                        width: '240px',
                        height: '40px',
                        padding: '4px 0px',
                    }}
                >
                    <Button
                        type="primary"
                        size="large"
                        onClick={handleClick}
                        style={{ width: '202px' }}
                    >
                        Log out
                    </Button>
                </div>
            </div>
        </Card>
    );
};
export default App;
