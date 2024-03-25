import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

import { animated, useSpring } from 'react-spring';
// import { useNavigate } from 'react-router-dom';

function ParallaxTiltEffect(props) {
     const { orientation, gridPosition, iteration } = props;
     const defaultRX = orientation.defaultRX;
     const defaultRY = orientation.defaultRY;
     const defaultOffset = orientation.defaultOffset;
     const defaultRZ = orientation.defaultRZ;
     const colStart = gridPosition.colStart;
     const rowStart = gridPosition.rowStart;
     const side = Math.sign(defaultRY);

     const containerRef = useRef(null);
     const [isClicked, setIsClicked] = useState(false);

     const [transformProps, transformApi] = useSpring(() => ({
          from: {
               transform: `rotateX(${defaultRX}deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg) translateZ(0px)`,
          },
     }));

     const [bgPositionProps, bgPositionApi] = useSpring(() => ({
          from: {
               backgroundPositionX: '50%',
               backgroundPositionY: '80%',
               transform: 'translateX(0)',
          },
     }));

     const [txtProps, txtApi] = useSpring(() => ({
          from: {
               transform: 'rotateZ(0deg)',
          },
     }));

     const handleMouseMove = (event) => {
          if (!isClicked) {
               const rect = event.target.getBoundingClientRect();
               const rY = -(event.clientX - rect.left - rect.width / 2) / 8;
               const rX = (event.clientY - rect.top - rect.height / 2) / 8;

               transformApi.start({
                    transform: `rotateX(${rX}deg) rotateY(${rY}deg) rotateZ(${defaultRZ}deg) translateZ(0px)`,
               });

               const bX = 50 - rY / 16;
               const bY = 80 - rX / 16;

               bgPositionApi.start({
                    backgroundPositionX: `${bX}%`,
                    backgroundPositionY: `${bY}%`,
               });
          }
     };

     const handleMouseEnter = () => {
          if (!isClicked) {
               setMouseOnComponent(true);
               containerRef.current.classList.add('container--active');
          }
     };

     const handleMouseLeave = () => {
          if (!isClicked) {
               setMouseOnComponent(false);
               defaultStates();
          }
     };

     const defaultStates = () => {
          containerRef.current.classList.remove('container--active');
          containerRef.current.style.transformOrigin = 'center';
          transformApi.start({
               transform: `rotateX(${defaultRX}deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg) translateZ(0px)`,
          });

          bgPositionApi.start({
               backgroundPositionX: `50%`,
               backgroundPositionY: `80%`,
          });

          txtApi.start({
               transform: 'rotateZ(0deg)',
          });
     };

     const [, setMouseOnComponent] = useState(false);

     useEffect(() => {
          const container = containerRef.current;
          if (!isClicked) {
               container.addEventListener('mousemove', handleMouseMove);
               container.addEventListener('mouseenter', handleMouseEnter);
               container.addEventListener('mouseleave', handleMouseLeave);
          }

          return () => {
               container.removeEventListener('mousemove', handleMouseMove);
               container.removeEventListener('mouseenter', handleMouseEnter);
               container.removeEventListener('mouseleave', handleMouseLeave);
          };
     }, [isClicked]);

     const generateCards = (count, defaultOffset) => {
          const cards = [];
          for (let i = 1; i <= count; i++) {
               cards.push(
                    <div
                         key={i}
                         className="card absolute w-[300px] h-[450px] text-white"
                         style={{
                              '--tZ': i,
                              '--offset': i * defaultOffset,
                         }}
                    >
                         <div
                              className="test h-full w-full rounded-3xl p-4"
                              style={{
                                   backgroundPosition: '50% 80%',
                              }}
                         >
                              Card {i}
                         </div>
                    </div>
               );
          }
          return cards;
     };

     // const navigate = useNavigate();

     const handleClick = () => {
          setIsClicked(true);
          containerRef.current.removeEventListener(
               'mousemove',
               handleMouseMove
          );
          containerRef.current.removeEventListener(
               'mouseenter',
               handleMouseEnter
          );
          containerRef.current.removeEventListener(
               'mouseleave',
               handleMouseLeave
          );

          containerRef.current.style.transformOrigin =
               side === 1 ? '100% 0%' : '0% 0%';

          transformApi.start({
               transform: `rotateX(0deg) rotateY(0deg) rotateZ(${
                    -side * 90
               }deg) translateZ(0px)`,
          });

          const halfWindowWidth = window.innerWidth;
          let translateY;
          const container = containerRef.current.getBoundingClientRect();
          if (side === 1) {
               translateY =
                    halfWindowWidth -
                    container.left -
                    container.width -
                    container.height / 2;
          } else {
               translateY =
                    container.left - halfWindowWidth - container.height / 2;
          }

          bgPositionApi.start({
               transform: `translateX(${
                    side * containerRef.current.getBoundingClientRect().top
               }px) translateY(${translateY}px)`,
          });

          txtApi.start({
               transform: `rotateZ(${side * 90}deg)`,
          });
     };

     return (
          <>
               <div
                    className="wrap cursor-pointer m-8 h-[200px]"
                    style={{
                         '--rX': defaultRX,
                         '--rY': defaultRY,
                         '--rZ': defaultRZ,
                         '--side': side,
                         gridRowStart: rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    {generateCards(iteration, defaultOffset)}
               </div>
               <div
                    className="wrap cursor-pointer h-[200px] m-8"
                    style={{
                         '--rX': defaultRX,
                         '--rY': defaultRY,
                         '--rZ': defaultRZ,
                         '--side': side,
                         gridRowStart: rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    <animated.div
                         onClick={handleClick}
                         className="absolute w-[300px] h-[450px] text-white"
                         ref={containerRef}
                         onMouseEnter={handleMouseEnter}
                         onMouseMove={handleMouseMove}
                         onMouseLeave={handleMouseLeave}
                         style={{
                              '--offset': 0,
                              ...transformProps,
                         }}
                    >
                         <animated.div
                              className={`test w-full h-full rounded-3xl p-4 flex justify-center items-center ${
                                   isClicked
                                   // ? `${
                                   //        side === 1
                                   //             ? 'md:rounded-r-none'
                                   //             : 'md:rounded-l-none'
                                   //   }`
                                   // : ''
                              }`}
                              style={{ ...bgPositionProps }}
                         >
                              <animated.div style={{ ...txtProps }}>
                                   Card
                              </animated.div>
                         </animated.div>
                    </animated.div>
               </div>
          </>
     );
}

ParallaxTiltEffect.propTypes = {
     orientation: PropTypes.shape({
          defaultRX: PropTypes.number,
          defaultRY: PropTypes.number,
          defaultOffset: PropTypes.number,
          defaultRZ: PropTypes.number,
     }),
     gridPosition: PropTypes.shape({
          colStart: PropTypes.number,
          rowStart: PropTypes.number,
     }),
     movement: PropTypes.bool,
     iteration: PropTypes.number,
     projectId: PropTypes.string,
};

export default ParallaxTiltEffect;
