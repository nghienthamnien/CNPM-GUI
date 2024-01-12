import React from 'react';
import DishList from '../../components/dish-list';
import './index.css';
import data from './dish-list';
import Carourel from '../../components/carousel';
import BlogList from '../../components/blog';

const HomePage = () => {
    let mealName = 'Breakfast Ideas';
    const hour = new Date().getHours();
    if (hour > 14) mealName = 'Dinner Ideas';
    else if (hour > 10) mealName = 'Lunch Ideas';
    return (
        <div className="main">
            <DishList props={{ name: mealName, data }} />
            <Carourel />
            <BlogList />
        </div>
    );
};

export default HomePage;
