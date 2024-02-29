import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

function ParallaxTiltEffect(props) {
     const { orientation, gridPosition, iteration } = props;
     const defaultRX = orientation.defaultRX;
     const defaultRY = orientation.defaultRY;
     const defaultOffset = orientation.defaultOffset;
     const defaultRZ = orientation.defaultRZ;
     const colStart = gridPosition.colStart;
     const rowStart = gridPosition.rowStart;

     const containerRef = useRef(null);

     const handleMouseMove = (event) => {
          const rect = event.target.getBoundingClientRect();
          let rX = -(event.clientX - rect.left - rect.width / 2) / 8;
          let rY = (event.clientY - rect.top - rect.height / 2) / 8;

          setProperty('--rY', rX.toFixed(2));
          setProperty('--rX', rY.toFixed(2));

          setProperty('--bY', `${80 - (rX / 16).toFixed(2)}%`);
          setProperty('--bX', `${50 - (rY / 16).toFixed(2)}%`);
     };

     const handleMouseEnter = () => {
          setMouseOnComponent(true);
          containerRef.current.classList.add('container--active');
     };

     const handleMouseLeave = () => {
          setMouseOnComponent(false);
          defaultStates();
     };

     const defaultStates = () => {
          containerRef.current.classList.remove('container--active');
          setProperty('--rX', defaultRX);
          setProperty('--rY', defaultRY);
          setProperty('--bY', '80%');
          setProperty('--bX', '50%');
     };

     const setProperty = (p, v) => {
          containerRef.current.style.setProperty(p, v);
     };

     const [, setMouseOnComponent] = useState(false);

     useEffect(() => {
          const container = containerRef.current;
          container.addEventListener('mousemove', handleMouseMove);
          container.addEventListener('mouseenter', handleMouseEnter);
          container.addEventListener('mouseleave', handleMouseLeave);

          return () => {
               container.removeEventListener('mousemove', handleMouseMove);
               container.removeEventListener('mouseenter', handleMouseEnter);
               container.removeEventListener('mouseleave', handleMouseLeave);
          };
     }, []);

     const generateCards = (count, defaultOffset) => {
          const cards = [];
          for (let i = 1; i <= count; i++) {
               cards.push(
                    <div
                         key={i}
                         className="card absolute w-[300px] h-[450px] text-white"
                         style={{
                              '--bX': '50%',
                              '--bY': '80%',
                              '--tZ': i,
                              '--offset': i * defaultOffset,
                         }}
                    >
                         <div className="test h-full w-full rounded-3xl p-4">
                              Card {i}
                         </div>
                    </div>
               );
          }
          return cards;
     };

     return (
          <>
               <div
                    className="wrap cursor-pointer m-8"
                    style={{
                         '--rX': defaultRX,
                         '--rY': defaultRY,
                         '--rZ': defaultRZ,
                         '--side': Math.sign(defaultRY),
                         gridRowStart: rowStart,
                         gridColumnStart: colStart,
                    }}
               >
                    <div
                         className="card absolute w-[300px] h-[450px] text-white"
                         ref={containerRef}
                         onMouseEnter={handleMouseEnter}
                         onMouseMove={handleMouseMove}
                         onMouseLeave={handleMouseLeave}
                         style={{
                              '--bX': '50%',
                              '--bY': '80%',
                              '--tZ': '0',
                              '--offset': 0,
                         }}
                    >
                         <div className="test h-full w-full rounded-3xl p-4">
                              Card
                         </div>
                    </div>

                    {generateCards(iteration, defaultOffset)}
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
};

export default ParallaxTiltEffect;
