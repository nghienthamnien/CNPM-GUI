import React from 'react';
import { useSelector } from 'react-redux';
import { Empty } from 'antd';
import { selectShoppingList } from '../../slice/shoppingListSlice';
import Ingredient from './ingredient';
import './index.css';

const ShoppingList = () => {
    const { ingredient, extra } = useSelector(selectShoppingList);
    const ingredientList = ingredient.length ? (
        ingredient.map((element) => (
            <Ingredient key={element.id} ingredient={element} />
        ))
    ) : (
        <Empty description="Không có nguyên liệu nào được thêm" />
    );
    const extraList = extra.length ? (
        extra.map((element) => (
            <Ingredient key={element.id} ingredient={element} />
        ))
    ) : (
        <Empty description="Không có nguyên liệu nào được thêm" />
    );
    return (
        <div className="shopping-list">
            <div>
                <h2>Ingredient</h2>
                {ingredientList}
            </div>
            <div>
                <h2>Extra</h2>
                {extraList}
            </div>
        </div>
    );
};

export default ShoppingList;
