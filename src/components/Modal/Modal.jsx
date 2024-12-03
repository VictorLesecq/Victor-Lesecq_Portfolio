import { useEffect, useRef } from 'react';
import { useTheme } from '../../utils/hooks/hooks';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { ColorPlaymat } from '../../assets/data';

const Modal = ({ onClose, isClosing, onClosed }) => {
     const {
          toggleTheme,
          theme,
          isLightColor,
          toggleLightColor,
          isDarkColor,
          toggleDarkColor,
     } = useTheme();
     const containerRef = useRef(null);
     const overlayRef = useRef(null);

     useEffect(() => {
          if (isClosing) {
               // Animation de fermeture
               gsap.to(containerRef.current, {
                    x: '-100%',
                    y: '120%',
                    rotation: 0,
                    duration: 1,
                    ease: 'power3.out',
                    onComplete: onClosed,
               });
               gsap.to(overlayRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
               });
          } else {
               // GSAP animation
               gsap.fromTo(
                    containerRef.current,
                    { x: '100%', y: '-100%', rotation: 0 },
                    {
                         x: '0%',
                         y: '0%',
                         rotation: 360,
                         duration: 1,
                         ease: 'power3.out',
                    }
               );
               gsap.fromTo(
                    overlayRef.current,
                    { opacity: 0 },
                    { opacity: 0.6, duration: 1, ease: 'power3.out' }
               );
          }
     }, [isClosing]);

     return (
          <aside className="font-[GrenzeGotisch]">
               <div
                    ref={overlayRef}
                    className="fixed inset-0 bg-black bg-opacity-95 z-50"
                    onClick={onClose}
               ></div>
               <div
                    ref={containerRef}
                    className="fixed aspect-[2/3] w-[50vh] bg-[#FBFBEA] top-1/2 left-1/2 rounded-3xl p-6 z-50 max-w-[80vw]"
                    style={{
                         transform: 'translate(-50%,-50%)',
                    }}
               >
                    <p className=" w-full text-center text-4xl">
                         Personnalisation
                    </p>
                    <div className="flex py-8 justify-center gap-2 items-center">
                         🌙
                         <div
                              className={`w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300`}
                              onClick={toggleTheme}
                         >
                              <div
                                   className={`bg-white dark:bg-black w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                        theme === 'light'
                                             ? 'translate-x-8'
                                             : 'translate-x-0'
                                   }`}
                              ></div>
                         </div>
                         ☀️
                    </div>
                    <div>
                         <p className="text-2xl">Couleur du Light Mode :</p>
                         <div className="flex justify-between my-4">
                              {Object.keys(ColorPlaymat.lightColor).map(
                                   (key, index) => (
                                        <button
                                             key={`color_${index}`}
                                             className="w-[30%] aspect-[1] rounded-3xl"
                                             onClick={() =>
                                                  toggleLightColor(
                                                       ColorPlaymat.lightColor[
                                                            key
                                                       ].code
                                                  )
                                             }
                                             style={{
                                                  backgroundColor:
                                                       ColorPlaymat.lightColor[
                                                            key
                                                       ].code,
                                                  border:
                                                       isLightColor ===
                                                       ColorPlaymat.lightColor[
                                                            key
                                                       ].code
                                                            ? '2px solid black'
                                                            : '',
                                             }}
                                        ></button>
                                   )
                              )}
                         </div>
                         <p className="text-2xl">Couleur du Dark Mode :</p>
                         <div className="flex justify-between my-4">
                              {Object.keys(ColorPlaymat.darkColor).map(
                                   (key, index) => (
                                        <button
                                             key={`color_${index}`}
                                             className="w-[30%] aspect-[1] rounded-3xl"
                                             onClick={() =>
                                                  toggleDarkColor(
                                                       ColorPlaymat.darkColor[
                                                            key
                                                       ].code
                                                  )
                                             }
                                             style={{
                                                  backgroundColor:
                                                       ColorPlaymat.darkColor[
                                                            key
                                                       ].code,
                                                  border:
                                                       isDarkColor ===
                                                       ColorPlaymat.darkColor[
                                                            key
                                                       ].code
                                                            ? '2px solid black'
                                                            : '',
                                             }}
                                        ></button>
                                   )
                              )}
                         </div>
                    </div>
                    <button
                         className="absolute bottom-6 right-1/2 translate-x-1/2 hover:underline text-xl"
                         onClick={onClose}
                    >
                         Fermer
                    </button>
               </div>
          </aside>
     );
};

Modal.propTypes = {
     onClose: PropTypes.func.isRequired,
     isClosing: PropTypes.bool.isRequired,
     onClosed: PropTypes.func.isRequired,
};

export default Modal;
