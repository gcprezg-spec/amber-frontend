import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';

import HomePage from './pages/HomePage';

import MensPage from './pages/MensPage';

import WomensPage from './pages/WomensPage';

import SmoothScroll from './components/SmoothScroll';

import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';

import CheckoutPage from './pages/CheckoutPage';

import {
  CartProvider,
} from './components/CartContext';

ReactDOM.createRoot(
  document.getElementById('root')!
).render(

  <React.StrictMode>
    <CartProvider>
    
<SmoothScroll />
    <BrowserRouter>

        <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/mens"
          element={<MensPage />}
        />

        <Route
          path="/womens"
          element={<WomensPage />}
        />


  <Route
  path="/checkout"
  element={<CheckoutPage />}
/>
       
        <Route
  path="/product/:id"
  element={<ProductPage />}
/>
     </Routes>

    </BrowserRouter>
  </CartProvider>
  </React.StrictMode>

);