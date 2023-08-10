import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';


function App() {

  const title = "해야할 일";

  const tasks = [
    { name: '공경진 준비하기', path: '/login' },
    { name: '해커톤 준비하기', path: '/register' },
  ];
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage title={title} tasks={tasks} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
