import Button from "./Button";
import Navbar from "./Navbar";
import "./Header.scss";

function Header({ setLocale }: { setLocale: (locale: string) => void }) {
    return (
        <header>
            <Navbar links={
                [
                    { label: "Home", href: "/", target: "_self" },
                    { label: "Projects", href: "/projects", target: "_self" },
                    { label: "About", href: "/about", target: "_self" },
                ]
            } setLocale={setLocale} />
            <Button href="mailto:frereswan@gmail.com" />
        </header>
    );
}

export default Header;