interface Project {
    index: number;
    title: string;
    description: string;
    note: string | null;
    link: string;
    images: Array<string>;
    technos: Array<Techno>;
    isOdd: boolean;
    scroll: boolean;
    setScroll: (scroll: boolean) => void;
}