import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import Cart from './components/Pages/Cart';
import ProductsList from './components/Pages/ProductsList';
import ProductDetails from './components/Pages/ProductDetails';
import Register from './components/Pages/Register';
import NotFound from './components/Pages/NotFound404';
import { productsLoader, productsLoaderDetails } from './components/Pages/AxiosInstance';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import LanguageProvider from './context/LanguageContext'; 
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
      {
        path: '/register',
        element: <Register />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
      <RouterProvider router={router} />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);