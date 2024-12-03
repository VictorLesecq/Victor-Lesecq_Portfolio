import { useTheme } from '../utils/hooks/hooks';
// import { useRef } from 'react';
// import { gsap } from 'gsap';
import Card from '../components/Card/Card';

const Home = () => {
     const { theme, isLightColor, isDarkColor } = useTheme();

     return (
          <main
               className="overflow-hidden max-h-full"
               style={{
                    backgroundColor:
                         theme === 'light' ? isLightColor : isDarkColor,
               }}
          >
               <div className="relative h-[100vh] cards_container grid grid-cols-[1fr,300px,1fr] pt-[128px] md:py-[128px] mx-auto">
                    <Card
                         orientation={{
                              defaultRX: 0,
                              defaultRY: 0,
                              defaultRZ: 0,
                              defaultOffset: 0,
                         }}
                         gridPosition={{
                              centered: true,
                              nbColumn: 3,
                              rowStart: 1,
                              colStart: 2,
                         }}
                         projectId="Home"
                         iteration={0}
                         destination="/projects"
                         backgroundImage="src/assets/KingCard2.svg"
                    ></Card>
               </div>
          </main>
     );
};

export default Home;
