import { ThemeContext } from '../context/context';
import { useContext } from 'react';

export function useTheme() {
     const {
          theme,
          toggleTheme,
          isLightColor,
          toggleLightColor,
          isDarkColor,
          toggleDarkColor,
     } = useContext(ThemeContext);

     return {
          theme,
          toggleTheme,
          isLightColor,
          toggleLightColor,
          isDarkColor,
          toggleDarkColor,
     };
}
