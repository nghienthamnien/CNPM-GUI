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

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
