import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

// localStorage-da köhnə data varsa təmizlə
const DATA_VERSION = 'v2';
if (localStorage.getItem('data_version') !== DATA_VERSION) {
  localStorage.removeItem('users');
  localStorage.setItem('data_version', DATA_VERSION);
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/about"       element={<About />} />
          <Route path="*"            element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
