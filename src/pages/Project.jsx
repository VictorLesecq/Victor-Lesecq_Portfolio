import { useParams, Navigate, Link } from 'react-router-dom';
import { DataPortfolio, ProjectsList } from '../assets/data';
// import Navbar from '../components/NavBar/Navbar';
import pictureCardFront from '/assets/Cards/card-Back_90deg.png';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../utils/hooks/hooks';
import Footer from '../components/Footer/Footer';

const Project = () => {
     const [flipedCard, setFlipedCard] = useState(false);
     const { projectId } = useParams();
     const containerRef = useRef(null);
     const { theme, isLightColor, isDarkColor } = useTheme();

     function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
               rect.top >= 0 &&
               rect.left >= 0 &&
               rect.bottom <=
                    (window.innerHeight ||
                         document.documentElement.clientHeight) &&
               rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
          );
     }

     function activateEffect() {
          if (isElementInViewport(containerRef.current)) {
               setFlipedCard(!flipedCard);
          }
     }

     useEffect(() => {
          setFlipedCard(false);
     }, [projectId]);

     useEffect(() => {
          window.addEventListener('scroll', function () {
               if (containerRef.current) {
                    activateEffect();
               }
          });

          const tl = gsap.timeline({
               defaults: { duration: 0.5, ease: 'power2.out' },
          });

          return () => {
               tl.kill();
          };
     }, []);

     const dataNumProject = ProjectsList.findIndex(
          (element) => element.id === projectId
     );
     if (dataNumProject === -1) {
          return <Navigate to="/error" replace={true} />;
     }
     const nextProject = ProjectsList[dataNumProject + 1]
          ? dataNumProject + 1
          : 0;

     const dataNum = DataPortfolio.findIndex(
          (element) => element.id === projectId
     );
     if (dataNum === -1) {
          return <Navigate to="/error" replace={true} />;
     }
     const { title, color, typo, client, description, picture, link, skills } =
          DataPortfolio[dataNum];

     const firstColor =
          theme === 'light' ? color.primary.code : color.secondary.code;
     const secondColor =
          theme === 'light' ? color.secondary.code : color.primary.code;
     return (
          <>
               <main
                    className="overflow-clip font-[GrenzeGotisch]"
                    style={{
                         '--mainColor': firstColor,
                         '--secondaryColor': secondColor,
                         backgroundColor:
                              theme === 'light' ? isLightColor : isDarkColor,
                    }}
               >
                    <div className="CardGameBoard w-full md:h-[500px] flex justify-center top-[-430px] z-40">
                         <div className="card w-full mx-12 mt-[130px] text-white md:mt-0 md:mx-0 xl:mx-[240px] flex justify-center items-center">
                              <div
                                   className="test bg-cover bg-white md:h-[500px] aspect-[3/2] w-full rounded-3xl md:rounded-t-none p-4 flex justify-center items-center border border-black"
                                   style={{
                                        backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                                   url('${picture.cardRot}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: '50% bottom',
                                        boxShadow:
                                             '0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2)',
                                   }}
                              ></div>
                         </div>
                    </div>
                    <section>
                         <article
                              className="project_head text-xl"
                              style={{
                                   color: theme === 'light' ? 'black' : 'white',
                              }}
                         >
                              <h2
                                   className={`project_title mt-12 pb-6 mx-4 md:mx-[96px] xl:mx-[240px] text-7xl text-[var(--mainColor)] border-b-[2px]`}
                                   style={{
                                        borderColor: firstColor,
                                   }}
                              >
                                   {title}
                              </h2>
                              <div className="project_info  my-6 mx-6 md:mx-[96px] xl:mx-[240px] md:flex">
                                   <table className="w-full md:w-1/2">
                                        <tbody>
                                             <tr>
                                                  <td>
                                                       <h3 className="text-[var(--mainColor)] text-4xl">
                                                            Catégorie
                                                       </h3>
                                                  </td>
                                                  <td>
                                                       <p className="text-2xl max-w-[90%] text-end md:text-left">
                                                            Développement Web
                                                       </p>
                                                       <p className="text-2xl max-w-[90%] text-end md:text-left">
                                                            Design UX/UI
                                                       </p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <h3 className="text-[var(--mainColor)] text-4xl">
                                                            Année
                                                       </h3>
                                                  </td>
                                                  <td>
                                                       <p className="text-2xl max-w-[90%] text-end md:text-left">
                                                            2024
                                                       </p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <h3 className="text-[var(--mainColor)] text-4xl">
                                                            Client
                                                       </h3>
                                                  </td>
                                                  <td>
                                                       <p className="text-2xl max-w-[90%] text-end md:text-left">
                                                            {client}
                                                       </p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <h3 className="text-[var(--mainColor)] text-4xl">
                                                            Compétences
                                                       </h3>
                                                  </td>
                                                  <td>
                                                       {skills &&
                                                            skills.length >
                                                                 0 && (
                                                                 <p className="text-2xl max-w-[90%] text-end md:text-left">
                                                                      {skills.map(
                                                                           (
                                                                                skill,
                                                                                index
                                                                           ) => (
                                                                                <span
                                                                                     key={
                                                                                          index
                                                                                     }
                                                                                     className="block"
                                                                                >
                                                                                     {
                                                                                          skill
                                                                                     }
                                                                                </span>
                                                                           )
                                                                      )}
                                                                 </p>
                                                            )}
                                                  </td>
                                             </tr>
                                        </tbody>
                                   </table>
                                   <p className="md:ml-8 md:w-1/2 text-justify text-2xl indent-8 mt-6 md:mt-0">
                                        {description}
                                   </p>
                              </div>
                              <div className="color_system mx-4 md:mx-[96px] xl:mx-[240px] mt-14 md:flex justify-between">
                                   <h3 className="mb-8 mr-8 text-[var(--mainColor)] text-4xl text-center">
                                        Système de couleur
                                   </h3>
                                   <div className="flex flex-wrap grow justify-evenly">
                                        {Object.keys(color).map(
                                             (key, index) => (
                                                  <div
                                                       key={`color_${index}`}
                                                       className="w-[150px] mb-6"
                                                  >
                                                       <p className="absolute text-xl">
                                                            0{index + 1}
                                                       </p>
                                                       <div
                                                            className="w-[150px] aspect-square rounded-full"
                                                            style={{
                                                                 backgroundColor:
                                                                      color[key]
                                                                           .code,
                                                                 border:
                                                                      theme ===
                                                                      'light'
                                                                           ? ''
                                                                           : '2px solid white',
                                                            }}
                                                       ></div>
                                                       <p className="mt-4 font-bold capitalize text-xl">
                                                            {color[key].name}
                                                       </p>
                                                       <p className="text-xl">
                                                            {color[key].code}
                                                       </p>
                                                  </div>
                                             )
                                        )}
                                   </div>
                              </div>
                              <div className="typo_system mx-4 md:mx-[96px] xl:mx-[240px] mt-10 md:flex flex-wrap">
                                   <h3 className="mb-8 mr-8 text-[var(--mainColor)] text-4xl text-center">
                                        Typographie
                                   </h3>
                                   <div className="flex justify-evenly grow flex-wrap md:flex-nowrap">
                                        {Object.keys(typo).map((key, index) => (
                                             <div
                                                  key={`typo_${index}`}
                                                  className="w-[150px] mb-6"
                                                  style={{
                                                       fontFamily:
                                                            typo[key].name,
                                                  }}
                                             >
                                                  <div
                                                       className="w-[150px] aspect-square rounded-3xl flex justify-center items-center"
                                                       style={{
                                                            backgroundColor:
                                                                 firstColor,
                                                            border:
                                                                 theme ===
                                                                 'light'
                                                                      ? ''
                                                                      : '2px solid white',
                                                       }}
                                                  >
                                                       <div className="text-[var(--secondaryColor)]">
                                                            <p className="text-6xl">
                                                                 Aa
                                                            </p>
                                                            <p className="text-4xl">
                                                                 123
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <p className="mt-4 font-bold capitalize text-center">
                                                       {typo[key].name}
                                                  </p>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </article>
                         <article className="mt-12 ">
                              <h2
                                   className="pb-6 mx-4 md:mx-[96px] xl:mx-[240px] text-6xl text-[var(--mainColor)] border-b-[2px]"
                                   style={{
                                        borderColor: firstColor,
                                   }}
                              >
                                   Pages
                              </h2>
                              <div
                                   className={`wrap my-10 md:mx-[120px] mx-[60px] xl:mx-[360px] relative aspect-[3/2] ${
                                        flipedCard ? 'cardFlip' : ''
                                   }`}
                                   ref={containerRef}
                                   style={{
                                        transition: 'transform 1s ease',
                                        transformStyle: 'preserve-3d',
                                        transformPerspective: 1000,
                                   }}
                              >
                                   <div
                                        className="card-front"
                                        style={{ backfaceVisibility: 'hidden' }}
                                   >
                                        <img
                                             className="rounded-3xl w-full h-full"
                                             src={pictureCardFront}
                                        />
                                   </div>
                                   <div
                                        className="card-back absolute top-0 w-full h-full"
                                        style={{
                                             backfaceVisibility: 'hidden',
                                             transform: 'rotateY(180deg)',
                                        }}
                                   >
                                        <img
                                             className="rounded-3xl object-cover w-full h-full"
                                             src={picture.home}
                                        />
                                   </div>
                              </div>
                         </article>
                         <article className="md:my-20 md:hidden">
                              <div className="w-[90vw] p-2 m-auto border-[var(--mainColor)] border-[3px] relative overflow-hidden rounded-[40px]">
                                   <div className="h-full overflow-hidden rounded-[32px]">
                                        <img
                                             className="w-full"
                                             src={picture.mobile}
                                        />
                                   </div>
                              </div>
                         </article>
                         <article className="hidden md:block md:my-40">
                              <div className="gap-20 md:gap-0 flex flex-col md:flex-row justify-around items-center mx-4 md:mx-[96px] xl:mx-[240px]">
                                   <div
                                        className="md:w-[30vw]"
                                        style={{
                                             border: '10px solid transparent',
                                             outline: '5px solid var(--mainColor)',
                                        }}
                                   >
                                        <img src={picture.fullPage} />
                                   </div>
                                   <div
                                        style={{
                                             border: '8px solid transparent',
                                             outline: '3px solid var(--mainColor)',
                                        }}
                                        className="w-[20vw] h-[40vw]  overflow-hidden rounded-[32px]"
                                   >
                                        <img src={picture.mobile} />
                                   </div>
                              </div>
                         </article>
                         <article className="md:my-40 flex">
                              <div className="hidden md:flex gap-[5vw] items-center relative md:left-[-5vw]">
                                   {[2, 3, 4].map((index) => (
                                        <div
                                             key={index}
                                             style={{
                                                  border: '8px solid transparent',
                                                  outline: '3px solid var(--mainColor)',
                                             }}
                                             className="w-[20vw] h-[40vw]  overflow-hidden rounded-[32px] self-center"
                                        >
                                             <img
                                                  src={
                                                       picture[`mobile${index}`]
                                                  }
                                             />
                                        </div>
                                   ))}
                                   {/* <NextButtonDeck className="self-end" /> */}
                              </div>
                              <div
                                   className="self-center text-center grow py-12"
                                   style={{
                                        color:
                                             theme === 'light'
                                                  ? 'white'
                                                  : 'black',
                                   }}
                              >
                                   {link && (
                                        <a
                                             href={link}
                                             target="_blank"
                                             className="py-3 bg-[var(--mainColor)] rounded-3xl relative px-10 text-xl hover:px-20 duration-300 ease-in-out"
                                        >
                                             visiter le site
                                        </a>
                                   )}
                              </div>
                         </article>
                    </section>
                    <section className="pb-4">
                         <Link
                              className="group flex gap-[12%] justify-between mt-12 py-6 mx-4 md:mx-[96px] xl:mx-[240px] text-2xl text-[var(--mainColor)] border-t-[2px]"
                              style={{
                                   borderColor: firstColor,
                              }}
                              to={`/project/${ProjectsList[nextProject].id}`}
                         >
                              <div className="relative flex justify-start items-center w-1/2">
                                   <div className="hidden absolute md:flex items-center overflow-hidden w-[32px] h-full">
                                        <p className="text-4xl pb-2 -translate-x-6 group-hover:translate-x-2 ease-in-out duration-300">
                                             {'♠'}
                                        </p>
                                   </div>
                                   <p className="group-hover:translate-x-10 text-3xl ease-in-out duration-300">
                                        projet suivant
                                   </p>
                              </div>
                              <div className="text-end w-1/2">
                                   <p className="text-3xl">
                                        {ProjectsList[nextProject].title}
                                   </p>
                                   <p className="text-3xl">
                                        {ProjectsList[nextProject].category}
                                   </p>
                              </div>
                         </Link>
                    </section>
               </main>
               <Footer />
          </>
     );
};

export default Project;
