import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home name="정예빈"/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
