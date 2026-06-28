import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">⚛️</span>
        <span className="navbar-name">Reaktor</span>
      </div>

      <div className="navbar-links">
        <NavLink to="/"       end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          🏠 Ana Səhifə
        </NavLink>
        <NavLink to="/about"      className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          ℹ️ Haqqında
        </NavLink>
      </div>

      <button className="theme-toggle" onClick={toggleTheme} title="Tema dəyiş">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
