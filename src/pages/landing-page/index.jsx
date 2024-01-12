/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState, useCallback } from 'react';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/tooplate-clean-work.css';
import './css/magnific-popup.css';
import Carourel from '../../components/carousel';
import BlogList from '../../components/blog';
import { Link } from 'react-router-dom';

const names = ['Khoa học', 'Phù hợp', 'Lành mạnh'];

const HeroSection = () => {
    const [newName, setnewName] = useState('Lành mạnh');

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle]);
    return (
        <>
            <section className="hero-section hero-section-full-height d-flex justify-content-center align-items-center">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12 text-center mx-auto">
                            <h1 className="cd-headline rotate-1 text-white mb-4 pb-2">
                                <span>xây dựng chế độ ăn uống </span>
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">{newName}</b>
                                </span>
                            </h1>

                            <Link
                                className="custom-btn btn button button--atlas smoothscroll me-3"
                                to="/auth/signup"
                            >
                                <span>Đăng ký</span>
                            </Link>

                            <Link
                                className="custom-btn custom-border-btn custom-btn-bg-white btn button button--pan smoothscroll"
                                to="/auth/login"
                            >
                                <span>Đăng nhập</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,240C560,224,640,192,720,176C800,160,880,160,960,138.7C1040,117,1120,75,1200,80C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </section>
            <Carourel />
            <BlogList />
        </>
    );
};

export default HeroSection;
