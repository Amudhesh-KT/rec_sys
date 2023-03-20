import logo from './logo.svg';
import './App.css';
import { useState, Switch } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header.jsx"
import Footer from "./components/common/footer/Footer.jsx"
import Login from "./components/User_data/Login.jsx"
import Register from "./components/User_data/Register.jsx"
import Products from './components/Products/Products';
import Rec_Products from './components/Recommended_Products/Rec_Products';

import { CategoryProvider } from './components/HomePage/Category_context';


import { ProductProvider } from './components/Products/Product_context';

import Product_view from './components/Products/Product_view';



function App() {
  return (

    <Router>
      <div className="App">

   
          <CategoryProvider>
            <ProductProvider>
              <Routes>
                <Route path='/' element={<><Login /></>} />
                <Route path='/home' element={<><Header /><Products /><Rec_Products /><Footer /></>} />
                <Route path='/register' element={<Register />} />
                <Route path='/product/:pid' element={<Product_view></Product_view>} />

              </Routes>
            </ProductProvider>
          </CategoryProvider>


      </div>
    </Router>


  );
}

export default App;
