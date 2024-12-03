const SLPictures = '/src/assets/Project_Simon_Lesecq/SL_';
const BookiPictures = '/src/assets/Projet_Booki/Booki_';
const KasaPictures = '/src/assets/Projet_Kasa/Kasa_';
const MVGPictures = '/src/assets/Projet_MVGrimoire/MVG_';
const DMBCPictures = '/src/assets/Projet_DMBC/DMBC_';

export const ColorPlaymat = {
     lightColor: {
          first: { name: 'light green', code: '#559a8e' },
          second: { name: 'light grey', code: '#b2aaa8' },
          third: { name: 'light orange', code: '#869ab5' },
     },
     darkColor: {
          first: { name: 'dark green', code: '#2c4b2b' },
          second: { name: 'dark red', code: '#5c2328' },
          third: { name: 'dark blue', code: '#2f3951' },
     },
};

export const ProjectsList = [
     {
          orientation: {
               defaultRX: 35,
               defaultRY: -20,
               defaultRZ: 20,
               defaultOffset: 10,
          },
          gridPosition: {
               centered: false,
               nbColumn: 9,
               rowStart: 1,
               colStart: 6,
          },
          iteration: 2,
          id: 'SimonLesecq',
          title: 'Simon Lesecq, Ostéopathe',
          category: 'Développement Web & Design UX/UI',
     },
     {
          orientation: {
               defaultRX: 30,
               defaultRY: 20,
               defaultRZ: -15,
               defaultOffset: 8,
          },
          gridPosition: {
               centered: false,
               nbColumn: 9,
               rowStart: 3,
               colStart: 3,
          },
          iteration: 1,
          id: 'DMBC',
          title: 'DMBC',
          category: 'Développement Web & Design UX/UI',
     },
     {
          orientation: {
               defaultRX: 35,
               defaultRY: -20,
               defaultRZ: 25,
               defaultOffset: 10,
          },
          gridPosition: {
               centered: false,
               nbColumn: 9,
               rowStart: 5,
               colStart: 7,
          },
          iteration: 1,
          id: 'Booki',
          title: 'Booki',
          category: 'Développement frontend',
     },
     {
          orientation: {
               defaultRX: 20,
               defaultRY: 10,
               defaultRZ: -10,
               defaultOffset: 6,
          },
          gridPosition: {
               centered: false,
               nbColumn: 9,
               rowStart: 7,
               colStart: 2,
          },
          iteration: 2,
          id: 'Kasa',
          title: 'Kasa',
          category: 'Développement frontend',
     },
     {
          orientation: {
               defaultRX: 40,
               defaultRY: -20,
               defaultRZ: 25,
               defaultOffset: 8,
          },
          gridPosition: {
               centered: false,
               nbColumn: 9,
               rowStart: 9,
               colStart: 6,
          },
          iteration: 2,
          id: 'MonVieuxGrimoire',
          title: 'Mon vieux Grimoire',
          category: 'Développement backend',
     },
];

export const DataPortfolio = [
     {
          id: 'Home',
          picture: {
               card: '/src/assets/KingCard2.svg',
               cardRot: '/src/assets/KingCard2_90deg.svg',
          },
     },
     {
          id: 'SimonLesecq',
          title: 'Simon Lesecq, Ostéopathe',
          category: 'Développement Web & Design UX/UI',
          client: 'Simon Lesecq',
          description:
               "Simon Lesecq est un ostéopathe de la région lilloise et dunkerquoise. L'objectif du projet était de concevoir et réaliser un seul site vitrine unique, en adéquation avec son identité graphique, pour l'ensemble de ces 3 cabinets. L'utilisateur est invité à sélectionner le cabinet souhaité  et les informations spécifiques sont automatiquement mis à jour offrant une expérience fluide et personnalisée. ",
          skills: ['React', ' Tailwind', ' Figma'],
          link: 'https://www.simonlesecq.fr',
          color: {
               primary: { code: '#024140', name: 'Cyan foncé' },
               secondary: { code: '#FAAB51', name: 'Orange doux' },
          },
          typo: {
               first: { name: 'lora' },
               second: { name: 'ambleregular' },
               third: { name: 'Roboto' },
          },
          picture: {
               card: '/src/assets/AsOfSpades.svg',
               cardRot: '/src/assets/AsOfSpades_90deg.svg',
               home: SLPictures + 'top-page.png',
               fullPage: SLPictures + 'full-page.png',
               mobile: SLPictures + 'full-page_mobile.png',
               mobile2: SLPictures + 'mobile2.png',
               mobile3: SLPictures + 'mobile3.png',
               mobile4: SLPictures + 'mobile4.png',
          },
     },
     {
          id: 'DMBC',
          title: 'DMBC',
          category: 'Développement Web & Design UX/UI',
          client: 'Dunkerque Malo Basket Club',
          description:
               "J'ai conçu et développé un site web dynamique pour le DMBC, club de basket dont l'équipe première féminine évolue en Nationale 3. Ce projet inclut des fonctionnalités avancées pour la gestion des équipes, des matchs et des actualités, offrant une plateforme moderne et intuitive pour joueurs, fans et gestionnaires.",
          color: {
               primary: { code: '#084483', name: 'Bleu foncé' },
               secondary: { code: '#f8312e', name: 'Rouge vif' },
               tertiary: { code: '#FAFF00', name: 'Jaune vif' },
          },
          typo: {
               first: { name: 'lora' },
               second: { name: 'ambleregular' },
               third: { name: 'Roboto' },
          },
          picture: {
               card: '/src/assets/AsOfHearts.svg',
               cardRot: '/src/assets/AsOfHearts_90deg.svg',
               home: DMBCPictures + 'top-page.png',
               fullPage: DMBCPictures + 'full-page.png',
               mobile: DMBCPictures + 'full-page_mobile.png',
               mobile2: DMBCPictures + 'mobile2.png',
               mobile3: DMBCPictures + 'mobile3.png',
               mobile4: DMBCPictures + 'mobile4.png',
          },
     },

     {
          id: 'Booki',
          title: 'Booki',
          category: 'Développement frontend',
          client: 'Booki',
          description:
               "Dans le cadre d'un projet éducatif, j'ai réalisé la partie front du site de Booki, une plateforme de référence pour hôtels et auberges, en utilisant HTML et CSS. En partant d'une maquette Figma, j'ai conçu une interface utilisateur attrayante et intuitive, optimisée pour tous les appareils. Le site permet aux utilisateurs de rechercher et de découvrir facilement des options d'hébergement adaptées à leurs besoins.",
          skills: ['HTML', ' CSS', ' Figma'],
          link: 'https://github.com/VictorLesecq/Projet-1',
          color: {
               primary: { code: '#0065FC', name: 'Bleu éclatant' },
               secondary: { code: '#F2F2F2', name: 'Gris clair' },
          },
          typo: {
               first: { name: 'raleway' },
          },
          picture: {
               card: '/src/assets/AsOfDiamonds.svg',
               cardRot: '/src/assets/AsOfDiamonds_90deg.svg',
               home: BookiPictures + 'top-page.png',
               fullPage: BookiPictures + 'full-page.png',
               mobile: BookiPictures + 'full-page_mobile.png',
               // mobile1: mobile1PictureSL,
               mobile2: BookiPictures + 'mobile2.png',
               mobile3: BookiPictures + 'mobile3.png',
               mobile4: BookiPictures + 'mobile4.png',
          },
     },
     {
          id: 'Kasa',
          title: 'Kasa',
          category: 'Développement frontend',
          client: 'Kasa',
          description:
               "Dans le cadre d'un projet éducatif, j'ai développé la partie front d'un site web responsive pour une plateforme de location d’appartements entre particuliers, en utilisant React et Sass. En partant d'une maquette Figma, j'ai conçu une interface utilisateur moderne et intuitive, optimisée pour tous les appareils. Le site permet aux utilisateurs de naviguer entre plusieurs pages, telles que la page individuelle de chaque logement ainsi que les conditions générale du service de Kasa.",
          skills: ['React', ' Sass', ' Figma'],
          link: 'https://github.com/VictorLesecq/Projet_6_Kasa',
          color: {
               primary: { code: '#000000', name: 'noir' },
               secondary: { code: '#F6F6F6', name: 'Gris clair' },
               tertiary: { code: '#FF6060', name: 'Rouge Corail' },
          },
          typo: {
               first: { name: 'Montserrat' },
          },
          picture: {
               card: '/src/assets/QueenOfSpadesCard.svg',
               cardRot: '/src/assets/QueenOfSpadesCard_90deg.svg',
               home: KasaPictures + 'top-page.png',
               fullPage: KasaPictures + 'full-page.png',
               mobile: KasaPictures + 'full-page_mobile.png',
               // mobile1: mobile1PictureSL,
               mobile2: KasaPictures + 'mobile2.png',
               mobile3: KasaPictures + 'mobile3.png',
               mobile4: KasaPictures + 'mobile4.png',
          },
     },
     {
          id: 'MonVieuxGrimoire',
          title: 'Mon vieux Grimoire',
          category: 'Développement backend',
          client: 'Mon vieux Grimoire',
          description:
               "Pour un projet éducatif, j'ai créé le backend d'un site de notation de livres en utilisant Express et Node.js. Ce projet comprenait la gestion de la base de données avec MongoDB et Mongoose pour ajouter, noter et modifier des livres. J'ai implémenté un système d'authentification sécurisé avec cryptage des mots de passe via bcrypt et optimisé la gestion des images avec Sharp. Cette expérience m'a permis de renforcer mes compétences en développement backend et gestion de bases de données.",
          skills: ['Node.js', ' Express', ' MongoDB'],
          link: 'https://github.com/VictorLesecq/Projet_7_MonVieuxGrimoire',
          color: {
               primary: { code: '#796157', name: 'brun moyen' },
               secondary: { code: '#F2E3CE', name: 'beige clair' },
          },
          typo: {
               first: { name: 'Libre Baskerville' },
               second: { name: 'DM Sans' },
          },
          picture: {
               card: '/src/assets/AsOfClubs.svg',
               cardRot: '/src/assets/AsOfClubs_90deg.svg',
               home: MVGPictures + 'top-page.png',
               fullPage: MVGPictures + 'full-page.png',
               mobile: MVGPictures + 'full-page_mobile.png',
               // mobile1: mobile1PictureSL,
               mobile2: MVGPictures + 'mobile2.png',
               mobile3: MVGPictures + 'mobile3.png',
               mobile4: MVGPictures + 'mobile4.png',
          },
     },
];

export const BackgroundCardList = [
     {
          orientation: {
               defaultRX: 35,
               defaultRY: 20,
               defaultRZ: -20,
               defaultOffset: 8,
          },
          gridPosition: {
               rowStart: 1,
               colStart: 2,
               initialPosition: -1000,
          },
          iteration: 1,
          rotation: true,
          translation: true,
     },
     {
          orientation: {
               defaultRX: 15,
               defaultRY: 20,
               defaultRZ: 20,
               defaultOffset: 8,
          },
          gridPosition: {
               rowStart: 3,
               colStart: 5,
               initialPosition: -500,
          },
          iteration: 0,
          rotation: true,
          translation: true,
     },
     {
          orientation: {
               defaultRX: 45,
               defaultRY: 30,
               defaultRZ: -10,
               defaultOffset: 6,
          },
          gridPosition: {
               rowStart: 2,
               colStart: 9,
               initialPosition: -2000,
          },
          iteration: 2,
          rotation: false,
          translation: true,
     },
     {
          orientation: {
               defaultRX: 5,
               defaultRY: 10,
               defaultRZ: 18,
               defaultOffset: 12,
          },
          gridPosition: {
               rowStart: 6,
               colStart: 1,
               initialPosition: -2500,
          },
          iteration: 1,
          rotation: true,
          translation: false,
     },
     {
          orientation: {
               defaultRX: 20,
               defaultRY: 20,
               defaultRZ: 30,
               defaultOffset: 10,
          },
          gridPosition: {
               rowStart: 8,
               colStart: 8,
               initialPosition: -1000,
          },
          iteration: 1,
          rotation: false,
          translation: false,
     },
     {
          orientation: {
               defaultRX: 20,
               defaultRY: 20,
               defaultRZ: -15,
               defaultOffset: 8,
          },
          gridPosition: {
               rowStart: 10,
               colStart: 4,
               initialPosition: -900,
          },
          iteration: 3,
          rotation: true,
          translation: false,
     },
];

export const SuitImageList = [
     '/src/assets/Diamonds.svg',
     '/src/assets/Hearts.svg',
     '/src/assets/Spades.svg',
     '/src/assets/Clubs.svg',
];

export const PictureFrontList = [
     '/src/assets/JackOfHeartsCard.svg',
     '/src/assets/JackOfClubsCard.svg',
     '/src/assets/JackOfDiamondsCard.svg',
     '/src/assets/JackOfSpadesCard.svg',
     '/src/assets/QueenOfHeartsCard.svg',
     '/src/assets/QueenOfClubsCard.svg',
     '/src/assets/QueenOfDiamondsCard.svg',
     '/src/assets/KingOfHeartsCard.svg',
     '/src/assets/KingOfClubsCard.svg',
     '/src/assets/KingOfDiamondsCard.svg',
];
