import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import { NavBar } from "../src/components/Navbar";
import { Login } from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import { Product } from './components/Product';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/navbar' element={<><NavBar/></>}/>
      <Route path='/login' element={<><Login/></>}/>
      <Route path='/home' element={<><Home/></>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product' element={<Product/>}/>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
