import { animated, useSpring } from 'react-spring';
import { useRef } from 'react';

const Project = () => {
     const containerRef = useRef(null);

     const [transformProps] = useSpring(() => ({
          from: {
               transform: `rotateZ(0deg) translateY(0px) translateX(0px)`,
               width: '450px',
               scale: '1',
          },
          to: async (next) => {
               await next({
                    transform: `rotateZ(-10deg) translateY(30px) translateX(0px)`,
                    width: '450px',
                    config: { duration: 500 },
               });
               await next({
                    transform: `rotateZ(360deg) translateY(-${
                         window.innerHeight / 2 -
                         (window.innerWidth * 30) / 45 / 2
                    }px) translateX(0px)`,
                    // scale: `${window.innerWidth / 450}`,
                    width: '900px',
               });
          },
          config: { duration: 500 },
     }));

     const [txtProps] = useSpring(() => ({
          from: {
               transform: 'rotateZ(0deg)',
          },
          to: {
               transform: 'rotateZ(0deg)',
          },
     }));

     return (
          <div className="w-full h-[100vh] flex justify-center items-center">
               <animated.div
                    className="w-[450px] aspect-[45/30] rounded-3xl text-white flex justify-center items-center"
                    ref={containerRef}
                    style={{
                         backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                         url('https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9')`,
                         backgroundSize: '40rem auto',
                         boxShadow: '0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2)',
                         backgroundPosition: '50% 80%',
                         transition:
                              'all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
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
     );
};

export default Project;

// <div className="absolute w-full h-[500px] flex justify-center">
//      <div className="card w-full mx-12 mt-[130px] md:mt-0 md:mx-0 xl:mx-[240px] text-white">
//           <div
//                className="test bg-cover h-full w-full rounded-3xl md:rounded-t-none p-4"
//                style={{
//                     backgroundPosition: '50% 80%',
//                }}
//           >
//                Card
//           </div>
//      </div>
// </div>
