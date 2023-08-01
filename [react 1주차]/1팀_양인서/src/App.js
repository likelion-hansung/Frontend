import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
