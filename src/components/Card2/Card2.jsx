import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { useNavigate } from 'react-router-dom';

function Card2(props) {
     const { orientation, gridPosition, iteration, projectId } = props;
     const defaultRX = orientation.defaultRX;
     const defaultRY = orientation.defaultRY;
     const defaultOffset = orientation.defaultOffset;
     const defaultRZ = orientation.defaultRZ;
     const colStart = gridPosition.colStart;
     const rowStart = gridPosition.rowStart;
     const side = Math.sign(defaultRY);

     const containerRef = useRef(null);
     let heightCard = 450;
     let widthCard = 300;

     const [isClicked, setIsClicked] = useState(false);

     const [transformProps, transformApi] = useSpring(() => ({
          from: {
               transform: `rotateX(${defaultRX}deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg) translateX(0px) translateY(0px)`,
               //    transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px)`,
               backgroundPositionX: '50%',
               backgroundPositionY: '80%',
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

               const bX = 50 - rY / 16;
               const bY = 80 - rX / 16;

               transformApi.start({
                    transform: `rotateX(${rX}deg) rotateY(${rY}deg) rotateZ(${defaultRZ}deg) translateX(0px) translateY(0px)`,
                    // transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px)`,
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
               transform: `rotateX(${defaultRX}deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg) translateX(0px) translateY(0px)`,
               //    transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px)`,
               backgroundPositionX: `50%`,
               backgroundPositionY: `80%`,
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

     const navigate = useNavigate();

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
               side === 1 ? '100% 50%' : '0% 50%';

          let windowWidth = window.innerWidth;
          let containerParent =
               containerRef.current.parentElement.getBoundingClientRect();

          let translateX =
               side * (containerParent.top + heightCard / 2 + widthCard / 2) -
               (side * window.innerHeight) / 2;
          // let translateX = 0;

          let translateY =
               ((side * (windowWidth < 1024 ? windowWidth : 1024)) / 7) *
                    (3.5 - colStart + 1) -
               (side === 1 ? widthCard : 0);
          // let translateY = 0;

          containerRef.current.parentElement.style.zIndex = 100;
          transformApi.start({
               transform: `rotateX(0deg) rotateY(0deg) rotateZ(${
                    -side * 90
               }deg) translateX(${translateX}px) translateY(${translateY}px)`,

               // transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(${translateX}px) translateY(${translateY}px)`,

               // borderTopLeftRadius:
               //      windowWidth < 768 ? '24px' : side === -1 ? '0px' : '24px',
               // borderBottomLeftRadius:
               //      windowWidth < 768 ? '24px' : side === -1 ? '0px' : '24px',
               // borderTopRightRadius:
               //      windowWidth < 768 ? '24px' : side === 1 ? '0px' : '24px',
               // borderBottomRightRadius:
               //      windowWidth < 768 ? '24px' : side === 1 ? '0px' : '24px',

               onRest: () => {
                    navigate(`/project/${projectId}`);
               },
          });

          txtApi.start({
               transform: `rotateZ(${side * 90}deg)`,
          });
     };

     const generateCards = (count, defaultOffset) => {
          const cards = [];
          for (let i = 1; i <= count; i++) {
               cards.push(
                    <div
                         key={i}
                         className={`absolute w-[${widthCard}px] h-[${heightCard}px] rounded-3xl text-white flex justify-center items-center`}
                         style={{
                              backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                                                url('https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9')`,
                              backgroundSize: '40rem auto',
                              boxShadow: '0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2)',
                              backgroundPosition: '50% 80%',

                              transform: `translate3d(${
                                   -6 * defaultOffset * i * side
                              }px, ${10 * defaultOffset * i}px, ${-200 * i}px)
                               rotateX(${defaultRX}deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg)`,
                         }}
                    >
                         Card {i}
                    </div>
               );
          }
          return cards;
     };

     return (
          <>
               <div
                    className="wrap w-0"
                    style={{
                         transformStyle: 'preserve-3d',
                         transform: 'perspective(100rem)',
                         gridRowStart: rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    {generateCards(iteration, defaultOffset)}
               </div>

               <div
                    className="wrap w-0"
                    style={{
                         transformStyle: 'preserve-3d',
                         transform: 'perspective(100rem)',
                         gridRowStart: rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    <animated.div
                         onClick={handleClick}
                         className="w-[300px] h-[450px] rounded-3xl text-white flex justify-center items-center"
                         ref={containerRef}
                         style={{
                              backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                                                url('https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9')`,
                              backgroundSize: '40rem auto',
                              boxShadow: '0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2)',
                              backgroundPosition: '50% 80%',
                              ...transformProps,
                         }}
                    >
                         <animated.div
                              style={{
                                   ...txtProps,
                              }}
                         >
                              Card
                         </animated.div>
                    </animated.div>
               </div>
          </>
     );
}

Card2.propTypes = {
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

export default Card2;
