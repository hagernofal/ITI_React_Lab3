import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import Cart from './components/Pages/Cart';
import ProductsList from './components/Pages/ProductsList';
import ProductDetails from './components/Pages/ProductDetails';
import NotFound from './components/Pages/NotFound404';
import { productsLoader, productsLoaderDetails } from './components/Pages/AxiosInstance';
import './index.css';
const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />
  },
  {

    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <ProductsList />,
        loader: productsLoader
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: productsLoaderDetails
      },
      {
        path: '/cart',
        element: <Cart />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);