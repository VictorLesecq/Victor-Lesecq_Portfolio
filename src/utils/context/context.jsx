import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ColorPlaymat } from '../../assets/data';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
     const initialLightColor =
          localStorage.getItem('isLightColor') ||
          ColorPlaymat.lightColor.first.code;
     const initialDarkColor =
          localStorage.getItem('isDarkColor') ||
          ColorPlaymat.darkColor.first.code;
     const initialTheme = localStorage.getItem('theme') || 'light';

     const [theme, setTheme] = useState(initialTheme);
     const [isLightColor, setIsLightColor] = useState(initialLightColor);
     const [isDarkColor, setIsDarkColor] = useState(initialDarkColor);

     useEffect(() => {
          localStorage.setItem('isLightColor', isLightColor);
          localStorage.setItem('isDarkColor', isDarkColor);
          localStorage.setItem('theme', theme);
     }, [isLightColor, isDarkColor, theme]);

     const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
     };

     const toggleLightColor = (elem) => {
          setIsLightColor(elem);
     };

     const toggleDarkColor = (elem) => {
          setIsDarkColor(elem);
     };

     return (
          <ThemeContext.Provider
               value={{
                    theme,
                    toggleTheme,
                    isLightColor,
                    toggleLightColor,
                    isDarkColor,
                    toggleDarkColor,
               }}
          >
               {children}
          </ThemeContext.Provider>
     );
};

ThemeProvider.propTypes = {
     children: PropTypes.node.isRequired,
};
