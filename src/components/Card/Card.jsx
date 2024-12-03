import { useRef, useEffect, useState, useMemo } from 'react';
import { DataPortfolio, SuitImageList } from '../../assets/data';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
// import { useDeviceType } from '../../utils/hooks/hooks';

function useDeviceType() {
     const [deviceType, setDeviceType] = useState('desktop');

     useEffect(() => {
          const userAgent = navigator.userAgent.toLowerCase();
          if (/mobile|android|iphone|ipad|tablet/.test(userAgent)) {
               if (/tablet|ipad/.test(userAgent)) {
                    setDeviceType('tablet');
               } else {
                    setDeviceType('smartphone');
               }
          } else {
               setDeviceType('desktop');
          }
     }, []);

     return deviceType;
}

function Card({
     orientation,
     gridPosition,
     iteration,
     onClick,
     destination,
     // backgroundImage,
     projectId,
}) {
     const [defaultRX, setDefaultRX] = useState(orientation.defaultRX / 1.5);
     const [defaultRY, setDefaultRY] = useState(orientation.defaultRY);
     const [defaultRZ, setDefaultRZ] = useState(orientation.defaultRZ);
     const [colStart, setColStart] = useState(gridPosition.colStart);
     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
     const [isClicked, setIsClicked] = useState(false);
     // const [xPointer, setXPointer] = useState(0.5);
     // const [yPointer, setYPointer] = useState(0.5);
     const side = Math.sign(
          orientation.defaultRY == 0 ? 1 : orientation.defaultRY
     );
     const containerRef = useRef(null);
     let heightCard = 450;
     let widthCard = 300;
     let nbColumn = gridPosition.nbColumn;
     const deviceType = useDeviceType();

     const navigate = useNavigate();

     const handleResize = () => {
          const isMobileView = window.innerWidth < 768;
          setColStart(isMobileView ? 2 : gridPosition.colStart);
          setDefaultRX(isMobileView ? 0 : orientation.defaultRX / 1.5);
          setDefaultRY(isMobileView ? 0 : orientation.defaultRY);
          setDefaultRZ(isMobileView ? 0 : orientation.defaultRZ);
          setIsMobile(isMobileView);
     };

     useEffect(() => {
          handleResize();
          window.addEventListener('resize', handleResize);

          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, [deviceType, gridPosition.colStart, orientation]);

     const handleGyroscopicOrientation = (event) => {
          const { alpha, beta, gamma } = event;
          let rZ;

          if (alpha < 45 || alpha > 335) {
               rZ = 20 * Math.sin(alpha * (Math.PI / 180));
          } else {
               if (alpha >= 45 && alpha < 180) {
                    rZ = 14;
               } else {
                    rZ = -14;
               }
          }

          const rX = gsap.utils.clamp(
               -30,
               30,
               gsap.utils.mapRange(-45, 45, -30, 30, beta - 90)
          );

          const rY = gsap.utils.clamp(
               -20,
               20,
               gsap.utils.mapRange(-45, 45, -20, 20, gamma)
          );

          console.log(rX, rY, rZ);

          setDefaultRX(-rX);
          setDefaultRY(rY);
          setDefaultRZ(-side * rZ);
     };

     useEffect(() => {
          if (
               !isClicked &&
               (deviceType === 'smartphone' || deviceType === 'tablet')
          ) {
               window.addEventListener(
                    'deviceorientation',
                    handleGyroscopicOrientation
               );
               return () =>
                    window.removeEventListener(
                         'deviceorientation',
                         handleGyroscopicOrientation
                    );
          }
     }, [side, deviceType]);

     const handleMouseMove = (event) => {
          if (deviceType !== 'desktop') return;

          containerRef.current.style.transition = '';
          const rect = event.target.getBoundingClientRect();
          const rY = -(event.clientX - rect.left - rect.width / 2) / 8;
          const rX = (event.clientY - rect.top - rect.height / 2) / 8;

          // const pointerX = ((event.clientX - rect.left) / rect.width) * 100;
          // const pointerY = ((event.clientY - rect.top) / rect.height) * 100;

          // setXPointer(pointerX);
          // setYPointer(pointerY);

          setDefaultRX(rX);
          setDefaultRY(rY);
     };

     const handleMouseLeave = () => {
          if (deviceType !== 'desktop') return;

          containerRef.current.style.transition = 'transform 0.5s ease-out';

          setDefaultRX(isMobile ? 0 : orientation.defaultRX / 1.5);
          setDefaultRY(isMobile ? 0 : orientation.defaultRY);
     };

     const handleClick = () => {
          setIsClicked(true);
          let container = containerRef.current;
          let windowWidth = window.innerWidth;
          let windowHeight = window.innerHeight;

          gsap.to(container.parentElement, {
               zIndex: 100,
          });
          onClick ? onClick() : '';

          gsap.to(container, {
               rotationX: -defaultRX,
               rotationY: defaultRY,
               rotationZ: side * 5,
               //Start of the first animation
               onComplete: () => {
                    //param of the first animation
                    let xFirstOffset;
                    let yFirstOffset;
                    switch (true) {
                         case windowWidth < 768:
                              xFirstOffset = 0;
                              yFirstOffset =
                                   -heightCard / 2 -
                                   container.parentElement.getBoundingClientRect()
                                        .top +
                                   windowHeight / 2;
                              break;
                         default:
                              xFirstOffset = gridPosition.centered
                                   ? 0
                                   : (windowWidth / nbColumn) *
                                          (nbColumn / 2 - colStart + 1) -
                                     widthCard / 2;
                              yFirstOffset =
                                   -heightCard / 2 -
                                   container.parentElement.getBoundingClientRect()
                                        .top +
                                   windowHeight / 2;
                              break;
                    }

                    //first animation
                    gsap.to(container, {
                         rotationX: 0,
                         rotationY: 0,
                         rotationZ: side * -90,
                         x: xFirstOffset,
                         y: yFirstOffset,

                         ease: 'power4.out',

                         //Start of the second animation
                         onComplete: () => {
                              //param of the second animation
                              let h;
                              let ySecondOffset;
                              let xSecondOffset;
                              let offsetTxt;
                              switch (true) {
                                   case windowWidth < 768:
                                        h = windowWidth - 2 * 48;
                                        ySecondOffset =
                                             -container.parentElement.getBoundingClientRect()
                                                  .top -
                                             (h / 2 - (h * 2) / 3 / 2) -
                                             48 +
                                             130;
                                        xSecondOffset = -(h * 2) / 3 / 2 + 150;
                                        break;
                                   case windowWidth < 1280:
                                        h = windowWidth;
                                        ySecondOffset =
                                             -container.parentElement.getBoundingClientRect()
                                                  .top -
                                             (h / 2 - (h * 2) / 3 / 2);
                                        xSecondOffset = gridPosition.centered
                                             ? -(h * 2) / 3 / 2 + 150
                                             : (windowWidth / nbColumn) *
                                                    (nbColumn / 2 -
                                                         colStart +
                                                         1) -
                                               (h * 2) / 3 / 2;
                                        break;
                                   default:
                                        h = windowWidth - 2 * 240;
                                        ySecondOffset =
                                             -container.parentElement.getBoundingClientRect()
                                                  .top -
                                             (h / 2 - (h * 2) / 3 / 2) -
                                             240;
                                        xSecondOffset = gridPosition.centered
                                             ? -(h * 2) / 3 / 2 + 150
                                             : (windowWidth / nbColumn) *
                                                    (nbColumn / 2 -
                                                         colStart +
                                                         1) -
                                               (h * 2) / 3 / 2;
                                        break;
                              }
                              if ((h * 2) / 3 > 500) {
                                   offsetTxt = -(h * 2) / 3 + 500;
                                   ySecondOffset += offsetTxt;
                              }

                              //second animation
                              gsap.to(container, {
                                   rotation: side === 1 ? 270 : -450,
                                   height: h,
                                   y: ySecondOffset,
                                   x: xSecondOffset,
                                   onComplete: () => {
                                        navigate(destination);
                                   },
                              });
                              containerRef.current.classList.add(
                                   'my-12',
                                   'mr-[130px]',
                                   'md:my-0',
                                   'md:mx-0',
                                   'xl:my-[240px]'
                              );
                         },
                    });
               },
          });
     };

     const dataNum = projectId
          ? DataPortfolio.findIndex((element) => element.id === projectId)
          : -1;

     const { picture } =
          dataNum >= 0
               ? DataPortfolio[dataNum]
               : {
                      title: 'Default Title',
                      picture: { card: 'src/assets/playing_card.jpg' },
                 };

     function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
     }

     const generateCards = (count, defaultOffset) => {
          const generatedNumbers = new Set();

          const generateUniqueNumber = (min, max) => {
               let num;
               do {
                    num = getRandomInt(min, max);
               } while (generatedNumbers.has(num));
               generatedNumbers.add(num);
               return num;
          };

          const cards = [];
          for (let i = 1; i <= count; i++) {
               const randomNumber = generateUniqueNumber(2, 10);
               const generatedSuit = getRandomInt(0, 3);
               cards.push(
                    <div
                         key={i}
                         className={`absolute rounded-3xl flex justify-center items-center border border-black`}
                         style={{
                              width: `${widthCard}px`,
                              height: `${heightCard}px`,
                              backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                              `,
                              backgroundColor: '#FBFBEA',
                              backgroundSize: 'cover',
                              boxShadow: '0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2)',

                              transform: `translate3d(${
                                   -6 * defaultOffset * i * side
                              }px, ${10 * defaultOffset * i}px, ${-200 * i}px)
                               rotateX(${
                                    orientation.defaultRX / 1.5
                               }deg) rotateY(${
                                   orientation.defaultRY
                              }deg) rotateZ(${orientation.defaultRZ}deg)`,
                         }}
                    >
                         <div
                              style={{
                                   color:
                                        generatedSuit < 2
                                             ? '#EF0D0D'
                                             : '#000000',
                              }}
                         >
                              <div className="absolute top-4 left-5 text-4xl flex flex-col gap-3 items-center">
                                   <p>{randomNumber}</p>
                                   <img
                                        src={SuitImageList[generatedSuit]}
                                        width="20px"
                                   />
                              </div>
                              <div className="flex items-baseline gap-2">
                                   <p className="text-8xl">{randomNumber}</p>
                                   <img
                                        src={SuitImageList[generatedSuit]}
                                        width="50px"
                                   />
                              </div>
                              <div
                                   className="absolute bottom-4 right-5 text-4xl flex flex-col gap-3 items-center"
                                   style={{ transform: 'rotateZ(180deg)' }}
                              >
                                   <p>{randomNumber}</p>
                                   <img
                                        src={SuitImageList[generatedSuit]}
                                        width="20px"
                                   />
                              </div>
                         </div>
                    </div>
               );
          }
          return cards;
     };

     const iteratedCards = useMemo(() => {
          return generateCards(iteration, orientation.defaultOffset);
     }, [iteration, orientation.defaultOffset, side]);

     return (
          <>
               {!isMobile && iteration != 0 && (
                    <div
                         className="cartes_genere wrap "
                         style={{
                              transformStyle: 'preserve-3d',
                              transform: 'perspective(100rem)',
                              gridRowStart: gridPosition.rowStart,
                              gridColumnStart: colStart,
                         }}
                    >
                         {iteratedCards}
                    </div>
               )}
               <div
                    className="wrap"
                    style={{
                         transformStyle: 'preserve-3d',
                         width: widthCard,
                         height: heightCard,
                         transform: 'perspective(100rem)',
                         gridRowStart: gridPosition.rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    <div
                         className="absolute aspect-[2/3] h-full rounded-3xl text-white flex justify-center items-center cursor-pointer border border-black"
                         ref={containerRef}
                         onMouseMove={!isClicked ? handleMouseMove : null}
                         onMouseLeave={!isClicked ? handleMouseLeave : null}
                         onClick={handleClick}
                         style={{
                              backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                              url(${
                                   picture.card || 'src/assets/playing_card.jpg'
                              })`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              cover: 'center',
                              boxShadow: '0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2)',
                              transform: `rotateX(${defaultRX}deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg)`,
                         }}
                    ></div>
               </div>
          </>
     );
}

Card.propTypes = {
     orientation: PropTypes.shape({
          defaultRX: PropTypes.number,
          defaultRY: PropTypes.number,
          defaultOffset: PropTypes.number,
          defaultRZ: PropTypes.number,
     }),
     gridPosition: PropTypes.shape({
          centered: PropTypes.bool,
          nbColumn: PropTypes.number,
          colStart: PropTypes.number,
          rowStart: PropTypes.number,
     }),
     iteration: PropTypes.number,
     children: PropTypes.node,
     onClick: PropTypes.func,
     destination: PropTypes.string,
     backgroundImage: PropTypes.string,
     projectId: PropTypes.string,
};

export default Card;
