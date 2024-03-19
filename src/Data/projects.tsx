const projects = [
        {
            index: 0,
            title: 'Portfolio',
            description: "Portfolio personnel réalisé avec le framework ReactJS - Typescript, rendu avec technologie SSR (Server-Side Rendering). Le CSS est entièrement perosnnalisé (pas de Tailwind ou Bootstrap) et géré avec un compilateur SASS. L'objectif de ce projet est d'ouvrir une petite fenêtre sur moi et mon travail, en exposant mes principales réalisations.",
            note: null,
            link: 'http://localhost:5173/',
            images: [
                '/images/portfolio1.png',
                '/images/portfolio2.png',
                '/images/portfolio3.png',
            ],
            technos: [
                { name: 'React', color: '#4aa2ed' },
                { name: 'TypeScript', color: '#1f5da1' },
                { name: 'Sass', color: '#9b2761' },
            ],
            isOdd: false,
        },
        {
            index: 1,
            title: 'Davy Corpet',
            description: "Site vitrine pour un professionnel de la maçonnerie et du granulat. Réalisé avec ReactJS, le site est entièrement responsive et optimisé pour le référencement naturel. L'objectif de ce projet est de présenter les services de l'entreprise, les réalisations passées et les coordonnées de contact.",
            note: "Le projet est en cours de développement.",
            link: 'https://davy-corpet.fr/',
            images: [
                '/images/davy1.png',
                '/images/davy2.png',
                '/images/davy3.png',
            ],
            technos: [
                { name: 'React', color: '#4aa2ed' },
            ],
            isOdd: true,
        },
        {
            index: 2,
            title: "Roxy's Adventures",
            description: "Jeu éducatif pour l'apprentissage de l'anglais. Réalisé avec la librairie ThreeJS, le jeu est entièrement en 3D et propose des mini-jeux pour apprendre l'anglais de manière ludique. L'objectif de ce projet est de proposer une alternative aux méthodes d'apprentissage traditionnelles. On incarne Roxy, un petit renard qui voyage à travers le monde pour apprendre l'anglais.",
            note: "Malheureusement non déployé pour le moment.",
            link: '#',
            images: [
                '/images/roxy1.png',
                '/images/roxy2.png',
                '/images/roxy3.png',
            ],
            technos: [
                { name: 'Javascript', color: '#9ba103' },
                { name: 'ThreeJS', color: '#3aa103' },
                { name: 'Firebase', color: '#b86404' },
            ],
            isOdd: false,
        },
        {
            index: 3,
            title: "S.W.A.N.",
            description: "Sky Weather Analyisis Navigator est un projet scolaire réalisé individuellement dont l'objectif est de proposer une application web permettant de visualiser les données météorologiques en temps réel. L'application utilise l'api OpenWeather qui permet d'afficher différentes métriques telles que la température, l'humidité, le vent, la pluie, la neige, etc. L'application fonctionne avec une partie back en Spring Boot et un front en React. Le tout alimenté avec une base de données PostgreSQL et un service de cache redis. L'application est déployée avec Docker.",
            note: "Non déployé car projet scolaire.",
            link: '#',
            images: [
                '/images/swan1.png',
                '/images/swan2.png',
                '/images/swan3.png',
            ],
            technos: [
                { name: 'Java', color: '#010d87' },
                { name: 'Spring Boot', color: '#170187' },
                { name: 'React', color: '#4aa2ed' },
                { name: 'PostgreSQL', color: '#018787' },
                { name: 'Redis', color: '#470909' },
                { name: 'Docker', color: '#0757ad' },
            ],
            isOdd: true,
        },
    ];

export default projects;