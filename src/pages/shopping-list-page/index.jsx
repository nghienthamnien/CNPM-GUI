import React from 'react';
import ShoppingList from '../../components/shopping-list';
import AddIngredientForm from '../../components/shopping-list/add-ingredient-form';
import './index.css';

const ShoppingListPage = () => (
    <div className="main">
        <div>
            <h1 className="shopping-list-title">Shopping List</h1>
        </div>
        <AddIngredientForm />
        <ShoppingList />
    </div>
);

export default ShoppingListPage;
