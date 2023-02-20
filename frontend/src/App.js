import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import { NavBar } from "../src/components/Navbar";
import { Login } from './pages/Login';
import Home from './pages/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/navbar' element={<><NavBar/></>}/>
      <Route path='/login' element={<><Login/></>}/>
      <Route path='/home' element={<><Home/></>}/>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
