import { ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';
import { ThemeContext } from './themeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};