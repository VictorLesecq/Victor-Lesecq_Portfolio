import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import pictureBack from '/assets/Cards/card-Back.png';
import { PictureFrontList } from '../../assets/data';
import gsap from 'gsap';

function BackgroundCard({
     orientation,
     gridPosition,
     iteration,
     rotation,
     translation,
     num,
}) {
     const { defaultRX, defaultRY, defaultRZ, defaultOffset } = orientation;
     const { rowStart, initialPosition } = gridPosition;
     const [colStart, setColStart] = useState(gridPosition.colStart);
     const side = Math.sign(defaultRY);
     const containerRef = useRef(null);
     const heightCard = 450;
     const widthCard = 300;
     const [initialTop, setInitialTop] = useState(0);
     const randomMultiplier = 0.2 + Math.random() * (0.6 - 0.2);

     useEffect(() => {
          if (containerRef.current) {
               const containerTop =
                    containerRef.current.parentElement.getBoundingClientRect()
                         .top;
               setInitialTop(containerTop * 0.66);
          }
     }, []);

     useEffect(() => {
          const handleScroll = () => {
               let container = containerRef.current;
               if (!container) return;
               let containerCard = container.firstChild;

               const scrollY = window.scrollY;

               if (scrollY > initialTop) {
                    translation &&
                         gsap.to(container, {
                              translateY:
                                   (scrollY - initialTop) *
                                   1.5 *
                                   randomMultiplier,
                         });
                    rotation &&
                         gsap.to(containerCard, {
                              rotateY:
                                   defaultRY -
                                   (scrollY - initialTop) *
                                        0.4 *
                                        randomMultiplier,
                         });
               }
          };
          const handleResize = () => {
               if (window.innerWidth < 768) {
                    let colResize;
                    switch (true) {
                         case gridPosition.colStart < 5:
                              colResize = 1;
                              break;
                         case gridPosition.colStart == 5:
                              colResize = 2;
                              break;
                         default:
                              colResize = 3;
                              break;
                    }
                    setColStart(colResize);
               } else {
                    setColStart(gridPosition.colStart);
               }
          };

          handleResize();
          window.addEventListener('resize', handleResize);
          window.addEventListener('scroll', handleScroll);
          return () => {
               window.removeEventListener('scroll', handleScroll);
               window.removeEventListener('resize', handleResize);
          };
     }, [initialTop]);

     const cardStyle = (i, isMain = false) => ({
          width: `${widthCard}px`,
          height: `${heightCard}px`,
          backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.1))`,
          transform: isMain
               ? `translate3D(0,0,${initialPosition}px) rotateX(${
                      defaultRX / 1.5
                 }deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg)`
               : `translate3d(${-10 * defaultOffset * i * side}px, ${
                      10 * defaultOffset * i
                 }px, ${initialPosition - 200 * i}px) rotateX(${
                      defaultRX / 1.5
                 }deg) rotateY(${defaultRY}deg) rotateZ(${defaultRZ}deg)`,
          transformStyle: 'preserve-3d',
          boxShadow: isMain
               ? '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)'
               : '0 2px 4px rgba(0, 0, 0, 0.2)',
     });

     const generateCards = (count) =>
          Array.from({ length: count }, (_, i) => (
               <div
                    key={i}
                    className="card fixed rounded-3xl bg-contain border border-black"
                    style={cardStyle(i + 1)}
               >
                    <img
                         className={`blur-[2px] rounded-3xl w-full`}
                         src={pictureBack}
                    />
               </div>
          ));

     return (
          <>
               <div
                    className="cartes_genere wrap w-full "
                    style={{
                         transformStyle: 'preserve-3d',
                         transform: `perspective(100rem)`,
                         gridRowStart: rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    {generateCards(iteration)}
               </div>
               <div
                    className="wrap"
                    ref={containerRef}
                    style={{
                         transformStyle: 'preserve-3d',
                         transform: `perspective(100rem)`,
                         transition: '',
                         gridRowStart: rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    <div
                         className="card absolute bg-contain rounded-3xl border border-black"
                         style={cardStyle(0, true)}
                    >
                         <img
                              className={`blur-[2px] rounded-3xl w-full`}
                              src={pictureBack}
                         />
                         <img
                              className={`absolute blur-[2px] top-0 rounded-3xl w-full`}
                              style={{
                                   backfaceVisibility: 'hidden',
                                   transform: 'rotateY(180deg)',
                              }}
                              src={PictureFrontList[num]}
                         />
                    </div>
               </div>
          </>
     );
}

BackgroundCard.propTypes = {
     orientation: PropTypes.shape({
          defaultRX: PropTypes.number.isRequired,
          defaultRY: PropTypes.number.isRequired,
          defaultOffset: PropTypes.number.isRequired,
          defaultRZ: PropTypes.number.isRequired,
     }).isRequired,
     gridPosition: PropTypes.shape({
          colStart: PropTypes.number.isRequired,
          rowStart: PropTypes.number.isRequired,
          initialPosition: PropTypes.number.isRequired,
     }).isRequired,
     iteration: PropTypes.number.isRequired,
     rotation: PropTypes.bool.isRequired,
     translation: PropTypes.bool.isRequired,
     num: PropTypes.number,
};

export default BackgroundCard;
