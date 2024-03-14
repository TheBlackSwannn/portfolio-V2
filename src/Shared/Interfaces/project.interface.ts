interface Project {
    index: number;
    title: string;
    images: Array<string>;
    technos: Array<Techno>;
    isOdd: boolean;
    scroll: boolean;
    setScroll: (scroll: boolean) => void;
}