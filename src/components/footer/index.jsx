/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
    FacebookFilled,
    YoutubeFilled,
    InstagramFilled,
    LinkedinFilled,
} from '@ant-design/icons';
import './index.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-icon">
            <a to="https://facebook.com" type="text">
                <FacebookFilled style={{ fontSize: '32px' }} />
            </a>
            <a to="text" href="https://youtube.com">
                <YoutubeFilled style={{ fontSize: '32px' }} />
            </a>
            <a to="text" href="https://instagram.com">
                <InstagramFilled style={{ fontSize: '32px' }} />
            </a>
            <a to="text" href="https://aed.com">
                <LinkedinFilled style={{ fontSize: '32px' }} />
            </a>
        </div>
        <div className="copyright">
            <p>Nhập môn công nghệ phần mềm 2023.1 &copy; Nhóm 3</p>
        </div>
    </footer>
);

export default Footer;
