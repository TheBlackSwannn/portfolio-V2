import Techno from "./techno.interface";

interface Project {
    index: number;
    title: string;
    description: string;
    note: string | null;
    link: string;
    images: Array<string>;
    technos: Array<Techno>;
    isOdd: boolean;
}

export default Project;