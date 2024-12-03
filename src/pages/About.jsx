import { useTheme } from '../utils/hooks/hooks';
const About = () => {
     const { theme, isLightColor, isDarkColor } = useTheme();
     return (
          <main
               className=" overflow-hidden"
               style={{
                    backgroundColor:
                         theme === 'light' ? isLightColor : isDarkColor,
               }}
          >
               About
          </main>
     );
};

export default About;
