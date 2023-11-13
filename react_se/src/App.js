import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage"
import LoginPage from "./pages/LoginPage/Login"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element= {<Home name="이세은"/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </div>
    
  );
}

export default App;
