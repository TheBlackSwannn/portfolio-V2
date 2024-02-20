import Button from "./Button";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
    return (
        <header>
            <Navbar links={
                [
                    { label: "Home", href: "/", target: "_self" },
                    { label: "Projects", href: "/projects", target: "_self" },
                    { label: "About", href: "/about", target: "_self" },
                ]
            } />
            <Button label="Interactive CV" href="/interactive-cv" />
        </header>
    );
}

export default Header;