import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/react.svg';

export default function Logo() {
    return (
        <div className="header-logo">
            <Link to="/">
                <img src={mainLogo} alt="" />
            </Link>
        </div>
    );
}
