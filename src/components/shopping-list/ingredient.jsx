import React from 'react';
import { useDispatch } from 'react-redux';
import { Divider } from 'antd';
import { updateStatus, deleteIngredient } from '../../slice/shoppingListSlice';

const Ingredient = ({ ingredient }) => {
    const dispatch = useDispatch();
    const handleToggle = (id) => () => {
        dispatch(updateStatus(id));
    };

    const handleDelete = (id) => () => {
        dispatch(deleteIngredient(id));
    };

    console.log(ingredient);

    return (
        <div className="ingredient">
            <input
                type="checkbox"
                value={ingredient.isbought}
                checked={ingredient.isbought}
                onChange={handleToggle(ingredient.id)}
            />
            <span className="checkmark">{ingredient.name}</span>
            <button type="button" onClick={handleDelete(ingredient.id)}>
                X
            </button>
            <Divider style={{ margin: '8px' }} />
        </div>
    );
};

export default Ingredient;
