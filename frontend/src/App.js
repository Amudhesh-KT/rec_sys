import logo from './logo.svg';
import './App.css';
import { useState,Switch } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Home from './components/MainPage/Home';
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import { NavBar } from "../src/components/Navbar";
import { Login } from './pages/Login';
// import Home from './pages/Home';
import Register from './pages/Register';
import { Product } from './components/Product';
import User_context, { UserProvider } from './components/User_context';


function App() {
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element ={<><Header/><productItems/><Home/> <addToCart/> <shopItems/><Footer /></>} />
          <Route path='/navbar' element={<><NavBar /></>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='/home' element={<><Home /></>} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
