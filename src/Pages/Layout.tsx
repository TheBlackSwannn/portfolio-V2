import { useEffect, useRef, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../Components/Header/Header";
import anim_bg from "../assets/anim_bg.mp4";
import './Pages.scss';

type ContextType = { locale: string };

export default function Layout() {
    const video = useRef<HTMLVideoElement>(null);
    const [locale, setlocale] = useState('fr');

    useEffect(() => {
        if (video.current) {
            video.current.playbackRate = 0.5;
        }
    }, [video]);

    return (
        <>
            <Header setLocale={setlocale} />
            <video ref={video} autoPlay muted loop id="myVideo">
                <source src={anim_bg} type="video/mp4" />
            </video>
            <Outlet context={{ locale } satisfies ContextType} />
        </>
    );
}

export function useLocale() {
    return useOutletContext<ContextType>();
}