import { useState, useEffect } from 'react';
import { useTheme } from '../utils/hooks/hooks';
import pictureCardFront from '/assets/Cards/KingCard2_90deg.svg';
import profilPicture from '../assets/photo_cv.jpg';
import Card from '../components/Card/Card';
import BackgroundCard from '../components/BackgroundCard/BackgroundCard';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills/Skills';
import { BackgroundCardList, ProjectsList } from '../assets/data';

const Projects = () => {
     const [isOverlayVisible, setOverlayVisible] = useState(false);
     const [randomNumbers, setRandomNumbers] = useState([]);

     const ChangeOpacity = () => {
          setOverlayVisible(true);
     };

     const shuffleArrayUnique = (size, max) => {
          if (size > max + 1) {
               const array = Array.from({ length: size }, (_, i) => i % max);
               for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
               }
               return array;
          }
          const array = Array.from({ length: max + 1 }, (_, i) => i);
          for (let i = array.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               [array[i], array[j]] = [array[j], array[i]];
          }
          return array.slice(0, size);
     };

     useEffect(() => {
          const uniqueNumbers = shuffleArrayUnique(
               BackgroundCardList.length,
               9
          );
          setRandomNumbers(uniqueNumbers);
     }, []);

     const { theme, isLightColor, isDarkColor } = useTheme();
     return (
          <>
               <main
                    className="relative overflow-clip font-[GrenzeGotisch]"
                    style={{
                         backgroundColor:
                              theme === 'light' ? isLightColor : isDarkColor,
                    }}
               >
                    <div
                         className={`overlay absolute inset-0 h-full duration-[1500ms] transition-[opacity] ease-in-out ${
                              isOverlayVisible ? 'opacity-100' : 'opacity-0'
                         }`}
                         style={{
                              backgroundColor:
                                   theme === 'light'
                                        ? isLightColor
                                        : isDarkColor,
                              zIndex: isOverlayVisible ? 1 : -1,
                         }}
                    ></div>
                    <div className="CardGameBoard w-full flex justify-center  top-[-430px] z-40">
                         <div className="card w-full mx-12 md:mx-0 xl:mx-[240px] mt-[130px] text-white md:mt-0 flex justify-center items-center ">
                              <div
                                   className="test bg-cover bg-white md:h-[500px] aspect-[3/2] w-full rounded-3xl md:rounded-t-none p-4 flex justify-center items-center border border-black"
                                   style={{
                                        backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1),hsla(0, 0%, 100%, 0.1)),
                                   url('${pictureCardFront}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: '50% bottom',
                                        boxShadow:
                                             '0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2)',
                                   }}
                              ></div>
                         </div>
                    </div>
                    <section className="profil my-20 md:mt-40 mx-auto max-w-[80vw]">
                         <article
                              className="flex flex-col mb-12 md:flex-row justify-around items-center pl-8 border-l-8 border-current gap-y-6 md:gap-y-0"
                              style={{
                                   color:
                                        theme === 'light'
                                             ? '#000000'
                                             : '#FFFFFF',
                              }}
                         >
                              <div className="profil_picture md:order-2">
                                   <img
                                        src={profilPicture}
                                        alt="photo de votre serviteur"
                                        className="rounded-full overflow-hidden w-[200px] md:w-[250px]"
                                   />
                              </div>
                              <div className="md:order-1">
                                   <h1 className="text-5xl md:text-8xl mb-6">
                                        Victor Lesecq
                                   </h1>
                                   <h2 className="text-3xl md:text-5xl mb-6">
                                        Ingénieur développeur Web
                                   </h2>
                                   <div className="flex md:text-xl  gap-x-6 md:gap-x-16 mt-5 ">
                                        <p>
                                             <i className="fa-solid fa-location-dot mr-2"></i>
                                             France, Lille
                                        </p>
                                        <p>
                                             <i className="fa-solid fa-earth-europe mr-2"></i>
                                             ouvert à la mobilité
                                        </p>
                                   </div>
                                   <div className="flex gap-4 mt-4">
                                        <div className="group">
                                             <a href="https://www.linkedin.com/in/victorlesecq/">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       viewBox="0 0 50 50"
                                                       fill="currentColor"
                                                       className="w-8 h-8 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                                  >
                                                       {' '}
                                                       <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                                  </svg>
                                             </a>
                                        </div>
                                        <div className="group">
                                             <a href="https://www.linkedin.com/in/victorlesecq/">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       viewBox="0 0 30 30"
                                                       fill="currentColor"
                                                       className="w-8 h-8 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                                  >
                                                       {' '}
                                                       <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                                                  </svg>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </article>
                         <article
                              className="py-12"
                              style={{
                                   color:
                                        theme === 'light'
                                             ? '#000000'
                                             : '#FFFFFF',
                              }}
                         >
                              <h2 className="text-5xl mb-6">A propos de moi</h2>
                              <div
                                   className="w-[80px] h-[4px] mb-12"
                                   style={{
                                        backgroundColor:
                                             theme === 'light'
                                                  ? '#000000'
                                                  : '#FFFFFF',
                                   }}
                              ></div>
                              <div className="text-2xl">
                                   <p className="indent-12 mb-4">
                                        Bonjour, moi c&apos;est Victor,
                                        développeur web junior passionné par le
                                        développement et plus particulièrement
                                        par <strong>React.js</strong>.
                                   </p>
                                   <p className="mb-4">
                                        Issu d&apos;une formation
                                        d&apos;ingénieur généraliste, j&apos;ai
                                        travaillé plusieurs années dans
                                        l&apos;industrie aéronautique en tant
                                        qu&apos;ingénieur méthode, où j&apos;ai
                                        participé à divers projets techniques.
                                        Cette expérience m&apos;a permis
                                        d&apos;acquérir une solide compréhension
                                        des processus industriels et des
                                        méthodes de gestion de projet.
                                   </p>
                                   <p className="mb-4">
                                        Aujourd&apos;hui, j&apos;ai choisi de me
                                        réorienter vers le développement web, où
                                        je retrouve le même plaisir à résoudre
                                        des problèmes complexes et à créer des
                                        solutions innovantes. J&apos;accorde une
                                        grande importance aux approches centrées
                                        sur l&apos;utilisateur, telles que le{' '}
                                        <strong>design thinking</strong>, pour
                                        concevoir des interfaces intuitives et
                                        des expériences utilisateur
                                        enrichissantes.
                                   </p>
                                   <p className="mb-4">
                                        Curieux et motivé, je suis toujours en
                                        quête de nouveaux défis pour continuer à
                                        apprendre et à développer mes
                                        compétences.
                                   </p>
                                   <p className="w-max hover:translate-x-0.5 hover:translate-y-0.5">
                                        <a
                                             className="underline text-xl"
                                             href="mailto:victor.lesecq@gmail.fr"
                                        >
                                             <svg
                                                  fill={
                                                       theme === 'light'
                                                            ? '#000000'
                                                            : '#FFFFFF'
                                                  }
                                                  width="20px"
                                                  height="20px"
                                                  viewBox="0 0 56 56"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{ display: 'inline' }}
                                                  className="mr-2"
                                             >
                                                  <path d="M 8.2069 9.5547 C 6.9882 9.5547 6.4022 10.3515 6.2147 11.2891 C 6.0507 12.0156 6.0038 13.1641 6.0038 14.5469 C 6.0038 25.8906 10.5507 30.7656 21.6601 30.7656 L 38.0428 30.7656 L 43.7850 30.4375 L 35.9101 37.6328 L 30.7069 42.9297 C 30.3319 43.3281 30.1210 43.8672 30.1210 44.4297 C 30.1210 45.6016 31.0350 46.4453 32.1835 46.4453 C 32.7225 46.4453 33.2382 46.2344 33.7538 45.7422 L 49.2695 30.2500 C 49.7615 29.7812 49.9962 29.2422 49.9962 28.6562 C 49.9962 28.0937 49.7615 27.5312 49.2695 27.0859 L 33.7069 11.5234 C 33.2382 11.0781 32.7225 10.8906 32.1835 10.8906 C 31.0350 10.8906 30.1210 11.7344 30.1210 12.9062 C 30.1210 13.4688 30.3319 14.0078 30.7069 14.3828 L 35.9101 19.6797 L 43.8085 26.9219 L 38.0428 26.5703 L 21.8710 26.5703 C 13.2694 26.5703 10.246 23.0312 10.246 14.3359 C 10.246 13.2110 10.3163 12.4610 10.3163 11.6172 C 10.3163 10.3984 9.4491 9.5547 8.2069 9.5547 Z" />
                                             </svg>
                                             Me contacter
                                        </a>
                                   </p>
                              </div>
                         </article>
                         <article
                              className="py-12"
                              style={{
                                   color:
                                        theme === 'light'
                                             ? '#000000'
                                             : '#FFFFFF',
                              }}
                         >
                              <h2 className="text-5xl mb-6">Mes atouts</h2>
                              <div
                                   className="w-[80px] h-[4px] mb-12"
                                   style={{
                                        backgroundColor:
                                             theme === 'light'
                                                  ? '#000000'
                                                  : '#FFFFFF',
                                   }}
                              ></div>
                              <Skills />
                         </article>
                    </section>
                    <section className="">
                         <div
                              className="mx-auto max-w-[80vw]"
                              style={{
                                   color:
                                        theme === 'light'
                                             ? '#000000'
                                             : '#FFFFFF',
                              }}
                         >
                              <h2 className="text-5xl mb-6">Mon jeu</h2>
                              <div
                                   className="w-[80px] h-[4px] mb-12"
                                   style={{
                                        backgroundColor:
                                             theme === 'light'
                                                  ? '#000000'
                                                  : '#FFFFFF',
                                   }}
                              ></div>
                         </div>
                         <div className="relative cards_container grid grid-cols-[1fr,300px,1fr] md:grid-cols-9 grid-rows-[repeat(11,275px)] md:grid-rows-[repeat(10,350px)] md:pb-[128px] mx-auto">
                              {BackgroundCardList.map((card, index) => (
                                   <BackgroundCard
                                        key={index}
                                        orientation={card.orientation}
                                        gridPosition={card.gridPosition}
                                        iteration={card.iteration}
                                        rotation={card.rotation}
                                        translation={card.translation}
                                        num={randomNumbers[index]}
                                   />
                              ))}
                              {ProjectsList.map((project, index) => (
                                   <Card
                                        key={index}
                                        orientation={project.orientation}
                                        gridPosition={project.gridPosition}
                                        projectId={project.id}
                                        destination={'/project/' + project.id}
                                        iteration={project.iteration}
                                        onClick={ChangeOpacity}
                                   />
                              ))}
                         </div>
                    </section>
               </main>
               <Footer />
          </>
     );
};

export default Projects;
