import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeadingComponent from './Components/HeadingComponent';
import Body from './Components/BodyComponent';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import ProductDescription from './Components/ProductDescription';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import { appStore } from './utils/appStore';
import { Provider } from 'react-redux';
import Cart from './Components/cart';

let MyApp = () => {
    return (
        <div>
            <Provider store={appStore}>
                <HeadingComponent />
                <Outlet />
            </Provider>
        </div>
    );
}

const appRouter = createBrowserRouter ([
    {
        path: '/',
        element: <MyApp />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/products/:productId',
                element: <ProductDescription />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/cart.jsx',
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);