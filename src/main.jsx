import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import ProtectedRoute from './pages/protected-route';
import store from './app/store';
import HomePage from './pages/home-page';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login-page';
import SignupPage from './pages/signup-page';
import Recipe from './components/recipe';
import Admin from './components/admin';


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
    {
        path: 'admin',
        element: <Admin />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
