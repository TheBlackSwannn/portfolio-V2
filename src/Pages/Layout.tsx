import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import anim_bg from "../assets/anim_bg.mp4";
import './Pages.css';

function Layout() {
    const video = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (video.current) {
            video.current.playbackRate = 0.5;
        }
    }, [video]);

    return (
        <>
            <Header />
            <video ref={video} autoPlay muted loop id="myVideo">
                <source src={anim_bg} type="video/mp4" />
            </video>
            <Outlet />
        </>
    );
}

export default Layout;