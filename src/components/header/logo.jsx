import React from 'react';
import mainLogo from '../../assets/react.svg';

export default function Logo() {
    return (
        <div className="header-logo">
            <a href="/">
                <img src={mainLogo} alt="" />
            </a>
        </div>
    );
}
