import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Spin } from 'antd';
import './index.css';
import ProtectedRoute from './pages/protected-route';
import store from './app/store';
import HomePage from './pages/home-page';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login-page';
import SignupPage from './pages/signup-page';
import Recipe from './components/recipe';
import ShoppingListPage from './pages/shopping-list-page';
import SurveyPage from './pages/survey-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'recipes/:slug',
                element: <Recipe />,
            },
            { path: 'shopping-list', element: <ShoppingListPage /> },
            { path: 'survey', element: <SurveyPage /> },
            { path: 'contribute' },
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
        path: 'auth/login',
        element: <LoginPage />,
    },
    {
        path: 'auth/signup',
        element: <SignupPage />,
    },
]);

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Spin />} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
