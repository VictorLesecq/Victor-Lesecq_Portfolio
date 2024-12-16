import { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../utils/hooks/hooks';
import Modal from '../Modal/Modal';
import JokerCard from '/assets/Cards/JokerCard.svg';
import JokerPicto from '/assets/JokerPicto.png';
import gsap from 'gsap';

const Navbar = () => {
     const { pathname } = useLocation();
     const [showModal, setShowModal] = useState(false);
     const [isModalClosing, setIsModalClosing] = useState(false);
     const [, setIsRotated] = useState(false);

     const containerRef = useRef(null);

     const { theme, isLightColor, isDarkColor } = useTheme();

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (
                    containerRef.current &&
                    !containerRef.current.contains(event.target)
               ) {
                    HandleMenuClosing();
               }
          };

          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);

     const toggleModal = () => {
          if (showModal) {
               setIsModalClosing(true);
          } else {
               setShowModal(!showModal);
          }
     };

     const handleModalClose = () => {
          setIsModalClosing(false);
          setShowModal(false);
     };
     const HandleMenuOpening = () => {
          setIsRotated(true);
          let container = containerRef.current;

          gsap.to(container, {
               rotationZ: -10,
               translateX: -100,
          });
     };

     const HandleMenuClosing = () => {
          setIsRotated(false);
          let container = containerRef.current;
          gsap.to(container, {
               rotationZ: 0,
               translateX: 0,
          });
     };

     if (pathname === '/' || pathname === '/profil') {
          return null;
     }

     return (
          <>
               <header
                    className="fixed right-0 left-0 z-50 flex items-center justify-between px-10 py-4 "
                    style={{
                         color: theme === 'light' ? isDarkColor : isLightColor,
                    }}
               >
                    <div className="group">
                         <NavLink
                              to="/projects"
                              className="w-16 h-16 rounded-lg items-center justify-center flex shadow-md group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                              style={{
                                   backgroundColor:
                                        theme === 'light'
                                             ? isDarkColor
                                             : isLightColor,
                              }}
                         >
                              <p
                                   className="text-3xl font-[GrenzeGotisch]"
                                   style={{ color: '#FBFBEA' }}
                              >
                                   VL
                              </p>
                         </NavLink>
                    </div>
                    <div className="group cursor-pointer">
                         <div
                              to="/"
                              className="w-16 h-16 md:w-20 md:h-20  rounded-lg items-center justify-center flex shadow-md group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                              style={{
                                   backgroundColor:
                                        theme === 'light'
                                             ? isDarkColor
                                             : isLightColor,
                              }}
                              onClick={HandleMenuOpening}
                         >
                              <img src={JokerPicto} />
                         </div>
                    </div>
               </header>
               {showModal && (
                    <Modal
                         onClose={toggleModal}
                         isClosing={isModalClosing}
                         onClosed={handleModalClose}
                    />
               )}
               <div
                    ref={containerRef}
                    className="fixed aspect-[2/3] w-[40vh]  md:w-[50vh] top-30 md:right-[-50vh] right-[-40vh] rounded-3xl p-2 z-50 max-w-[80vw] border-black border"
                    style={{
                         transformOrigin: 'bottom left',
                         backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                              url(${JokerCard})`,
                         backgroundSize: 'cover',
                    }}
               >
                    <nav className="text-lg gap-7 mt-20 font-medium flex flex-col">
                         <div className="group w-[30px] text-center">
                              <NavLink
                                   to="/projects"
                                   className="block group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                   onClick={HandleMenuClosing}
                              >
                                   <i className="fa-solid fa-briefcase"></i>
                              </NavLink>
                         </div>
                         <div className="group w-[30px] text-center">
                              <button
                                   onClick={toggleModal}
                                   className="text-lg font-medium group-hover:translate-x-0.5 group-hover:translate-y-0.5 custom-icon"
                              >
                                   <i className="fa-solid fa-paintbrush "></i>
                              </button>
                         </div>
                         <div className="group w-[30px] text-center">
                              <a
                                   href="https://www.linkedin.com/in/victorlesecq/"
                                   target="_blank"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        fill="currentColor"
                                        className="w-7 h-7 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                   >
                                        {' '}
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                   </svg>
                              </a>
                         </div>
                         {/* <div className="group w-[30px] text-center">
                              <a href="https://www.linkedin.com/in/victorlesecq/">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        className="w-7 h-7 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                   >
                                        {' '}
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                                   </svg>
                              </a>
                         </div> */}
                         <div className="group w-[30px] text-center">
                              <a
                                   className=""
                                   href="mailto:victor.lesecq@gmail.fr"
                              >
                                   <i className="fa-solid fa-envelope group-hover:translate-x-0.5 group-hover:translate-y-0.5 custom-icon"></i>
                              </a>
                         </div>
                    </nav>
               </div>
          </>
     );
};

export default Navbar;
