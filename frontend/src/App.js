import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import { NavBar } from "../src/components/Navbar";
import { Login } from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
<<<<<<< HEAD
import { Product } from './components/Product';
=======
import { UserProvider } from './components/User_context';
>>>>>>> 07722dbdc3b260d92db9eabc2962c6415e2ae56a


function App() {
  return (
<<<<<<< HEAD
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
=======
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/navbar' element={<><NavBar /></>} />
            <Route path='/login' element={<><Login /></>} />
            <Route path='/home' element={<><Home /></>} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
>>>>>>> 07722dbdc3b260d92db9eabc2962c6415e2ae56a
      </Router>

    </UserProvider>

  );
}

export default App;
