import React from 'react';
import DishList from '../../components/dish-list';
import './index.css';
import data from './dish-list';

const HomePage = () => {
    const mealName = 'Breakfast Ideas';
    return (
        <div className="main">
            <DishList props={{ name: mealName, data }} />
        </div>
    );
};

export default HomePage;
