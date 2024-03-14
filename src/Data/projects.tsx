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
                { name: 'Node.js', color: '#539E43' },
                { name: 'Express', color: '#000000' },
                { name: 'MongoDB', color: '#4DB33D' },
                { name: 'Sass', color: '#CC6699' },
            ],
            isOdd: false,
            scroll: false,
            setScroll: (scroll: boolean) => { },
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
                { name: 'React', color: '#61DBFB' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'Node.js', color: '#539E43' },
                { name: 'Express', color: '#000000' },
                { name: 'MongoDB', color: '#4DB33D' },
                { name: 'Sass', color: '#CC6699' },
            ],
            isOdd: true,
            scroll: false,
            setScroll: (scroll: boolean) => { },
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
                { name: 'React', color: '#61DBFB' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'Node.js', color: '#539E43' },
                { name: 'Express', color: '#000000' },
                { name: 'MongoDB', color: '#4DB33D' },
                { name: 'Sass', color: '#CC6699' },
            ],
            isOdd: false,
            scroll: false,
            setScroll: (scroll: boolean) => { },
        },
    ];

export default projects;