import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from './logo';
import './index.css';
import Avatar from './avatar';

export default function Header() {
    const isAuthenticate = useSelector((state) => state.auths.isAuthenticate);
    if (isAuthenticate) {
        return (
            <div className="header-bar">
                <Logo />
                <div
                    style={{
                        marginRight: '64px',
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <Link to="/shopping-list">
                        <ShoppingCartOutlined className="shopping-cart" />
                    </Link>
                    <Avatar />
                </div>
            </div>
        );
    }
    return (
        <div className="header-bar" style={{ justifyContent: 'center' }}>
            <Logo />
        </div>
    );
}
