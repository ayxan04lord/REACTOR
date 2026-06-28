import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext(null);

/**
 * ThemeProvider — bütün uşaq komponentlərə theme və toggleTheme verir.
 * useContext(ThemeContext) ilə istənilən yerdən istifadə olunur.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-root theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * useTheme — ThemeContext-i daha rahat istifadə etmək üçün
 * custom wrapper hook.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
