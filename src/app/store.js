import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';
import authsReducer from '../slice/authsSlice';
import shoppingListReducer from '../slice/shoppingListSlice';

const reducers = combineReducers({
    auths: authsReducer,
    shoppingList: shoppingListReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shoppingList'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;
