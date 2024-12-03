// import React from 'react';
import { useTheme } from '../../utils/hooks/hooks';

const Footer = () => {
     const { theme, isLightColor, isDarkColor } = useTheme();

     return (
          <div
               className="relative flex justify-center items-center h-20"
               style={{
                    backgroundColor:
                         theme === 'light' ? isLightColor : isDarkColor,
                    color: theme === 'light' ? 'black' : 'white',
               }}
          >
               <div className="filtre absolute bg-black opacity-25 inset-0"></div>
               <span>
                    © 2024 Victor LESECQ{' '}
                    <em>
                         <br /> Build with <i className="fas fa-heart"></i>{' '}
                         thanks to <i className="fab fa-react"></i>
                    </em>
               </span>
          </div>
     );
};

export default Footer;
