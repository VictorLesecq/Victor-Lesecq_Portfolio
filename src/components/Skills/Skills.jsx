import ReactLogo from '../../assets/react-2.svg';
import NodeLogo from '../../assets/nodejs-icon.svg';
import MongoDBLogo from '../../assets/mongodb-icon.svg';
import TailwindLogo from '../../assets/tailwindcss-icon.svg';
import FigmaLogo from '../../assets/figma-icon.svg';
import Excuse from '/assets/Cards/Excuse.png';
import { useTheme } from '../../utils/hooks/hooks';

function Skills() {
     const { theme, isLightColor, isDarkColor } = useTheme();
     return (
          <div className="flex gap-6 justify-between">
               <div className="flex flex-wrap gap-4 content-center">
                    <div
                         className="flex items-center gap-3 grow min-w-max sm:max-w-[25%] rounded-md p-3 md:p-5 text-lg"
                         style={{
                              backgroundColor:
                                   theme === 'light'
                                        ? isDarkColor
                                        : isLightColor,
                              color: theme === 'light' ? '#FFFFFF' : '#000000',
                         }}
                    >
                         <img src={ReactLogo} alt="React Logo" width="28" />
                         <p className="text-xl">React.JS</p>
                    </div>
                    <div
                         className="flex items-center gap-3 grow min-w-max sm:max-w-[25%] rounded-md p-3 md:p-5 text-lg"
                         style={{
                              backgroundColor:
                                   theme === 'light'
                                        ? isDarkColor
                                        : isLightColor,
                              color: theme === 'light' ? '#FFFFFF' : '#000000',
                         }}
                    >
                         <img src={NodeLogo} alt="Node JS Logo" width="28" />
                         <p className="text-xl">Node.JS</p>
                    </div>
                    <div
                         className="flex items-center gap-3 grow min-w-max sm:max-w-[25%] rounded-md p-3 md:p-5 text-lg"
                         style={{
                              backgroundColor:
                                   theme === 'light'
                                        ? isDarkColor
                                        : isLightColor,
                              color: theme === 'light' ? '#FFFFFF' : '#000000',
                         }}
                    >
                         <img src={MongoDBLogo} alt="MongoDB Logo" width="28" />
                         <p className="text-xl">MongoDB</p>
                    </div>
                    <div
                         className="flex items-center gap-3 grow min-w-max sm:max-w-[25%] rounded-md p-3 md:p-5 text-lg"
                         style={{
                              backgroundColor:
                                   theme === 'light'
                                        ? isDarkColor
                                        : isLightColor,
                              color: theme === 'light' ? '#FFFFFF' : '#000000',
                         }}
                    >
                         <img
                              src={TailwindLogo}
                              alt="Tailwind Logo"
                              width="28"
                         />
                         <p className="text-xl">Tailwind</p>
                    </div>
                    <div
                         className="flex items-center gap-3 grow min-w-max sm:max-w-[25%] rounded-md p-3 md:p-5 text-lg"
                         style={{
                              backgroundColor:
                                   theme === 'light'
                                        ? isDarkColor
                                        : isLightColor,
                              color: theme === 'light' ? '#FFFFFF' : '#000000',
                         }}
                    >
                         <img src={FigmaLogo} alt="Figma Logo" width="28" />
                         <p className="text-xl">Figma</p>
                    </div>
               </div>
               <img
                    src={Excuse}
                    alt="une carte excuse du tarot"
                    className="h-[220px] self-center rounded-3xl border border-black"
               />
          </div>
     );
}

export default Skills;
