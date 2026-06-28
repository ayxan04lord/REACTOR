import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

function Header({ total, filtered }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">⚛️</span>
        <div>
          <h1 className="header-title">React Profillər</h1>
          <p className="header-subtitle">
            {filtered} / {total} profil göstərilir
          </p>
        </div>
      </div>

      <button className="theme-toggle" onClick={toggleTheme} title="Tema dəyiş">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

Header.propTypes = {
  total:    PropTypes.number.isRequired,
  filtered: PropTypes.number.isRequired,
};

export default Header;
