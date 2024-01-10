/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { ingredient: [], extra: [] };
const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addExtra: {
            reducer: (state, action) => {
                state.extra.push(action.payload);
            },
            prepare: (text) => {
                const id = nanoid();
                return { payload: { id, name: text, isbought: false } };
            },
        },
        addIngredient(state, action) {
            return {
                ...state,
                ingredient: state.ingredient.concat(action.payload),
            };
        },
        updateStatus(state, action) {
            let tmp = state.ingredient.find(
                (element) => element.id === action.payload,
            );
            if (!tmp) {
                tmp = state.extra.find(
                    (element) => element.id === action.payload,
                );
            }
            tmp.isbought = !tmp.isbought;
        },
        deleteIngredient(state, action) {
            const newIngredient = state.ingredient.filter(
                (element) => element.id !== action.payload,
            );
            const newExtra = state.extra.filter(
                (element) => element.id !== action.payload,
            );
            state.ingredient = newIngredient;
            state.extra = newExtra;
        },
    },
});

export const selectShoppingList = (state) => state.shoppingList;

export const { addExtra, addIngredient, updateStatus, deleteIngredient } =
    shoppingListSlice.actions;
export default shoppingListSlice.reducer;
