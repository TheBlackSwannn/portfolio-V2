const projects = [
        {
            index: 0,
            title: 'Portfolio',
            images: [
                '/images/portfolio1.png',
                '/images/portfolio2.png',
                '/images/portfolio3.png',
            ],
            technos: [
                { name: 'React', color: '#61DBFB' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'Sass', color: '#CC6699' },
            ],
            isOdd: false,
            scroll: false,
            setScroll: () => { },
        },
        {
            index: 1,
            title: 'Portfolio',
            images: [
                '/images/portfolio/1.jpg',
                '/images/portfolio/2.jpg',
                '/images/portfolio/3.jpg',
            ],
            technos: [
                { name: 'Vue', color: '#61DBFB' },
                { name: 'NextJS', color: '#539E43' },
                { name: 'MongoDB', color: '#4DB33D' },
            ],
            isOdd: true,
            scroll: false,
            setScroll: () => { },
        },
        {
            index: 2,
            title: 'Portfolio',
            images: [
                '/images/portfolio/1.jpg',
                '/images/portfolio/2.jpg',
                '/images/portfolio/3.jpg',
            ],
            technos: [
                { name: 'ThreeJS', color: '#61DBFB' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'MongoDB', color: '#4DB33D' },
                { name: 'Sass', color: '#CC6699' },
            ],
            isOdd: false,
            scroll: false,
            setScroll: () => { },
        },
    ];

export default projects;