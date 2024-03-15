import Button from "./Button";
import Navbar from "./Navbar";
import "./Header.scss";

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
            <Button href="mailto:frereswan@gmail.com" />
        </header>
    );
}

export default Header;