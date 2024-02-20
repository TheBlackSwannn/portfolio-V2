import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import anim_bg from "../assets/anim_bg.mp4";
import { useEffect, useRef, useState } from "react";

const Landing = () => {

    const video = useRef<HTMLVideoElement>(null);
    const typewrite = useRef<HTMLParagraphElement>(null);
    const main = useRef<HTMLDivElement>(null);

    const subtitles = [
        'Fullstack Web Developer',
        'ThreeJS Enthusiast',
        'React x NextJS Developer',
        'Bug Bounty Hunter',
        'Open Source Contributor'
    ];

    let index = 0;

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    useEffect(() => {
        if (video.current) {
            video.current.playbackRate = 0.5;
        }
    }, [video]);

    useEffect(() => {
        writeText(subtitles[index]);
    }, [typewrite]);

    function handleMouseMove(e: MouseEvent) {
        setTimeout(() => {
            var range = 1;
            var sizeInt = 50;
            var size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(e.clientX - range - sizeInt, e.clientX + range) + "px;";

            var top = "top: " + getRandomInt(e.clientY - range - sizeInt, e.clientY + range) + "px;";
            var ball = document.createElement("div");

            ball.style.cssText = size + left + top;
            ball.className = "ball";
            ball.onanimationend = function () {
                ball.remove();
            };
            if (main.current)
                main.current.appendChild(ball);
        }, 100);
    };

    async function writeText(text: string) {
        if (typewrite.current) {
            for (let i = 0; i < text.length; i++) {
                typewrite.current.innerHTML += text.charAt(i);
                await sleep(50);
            }
            setTimeout(eraseText, 3000, text);
        }
    }

    async function eraseText(text: string) {
        if (typewrite.current) {
            for (let i = 0; i <= text.length; i++) {
                typewrite.current.innerHTML = text.substring(0, text.length - i);
                await sleep(30);
            }
            index++;
            setTimeout(writeText, 1000, subtitles[index % subtitles.length]);
        }
    }

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    function getRandomInt(min: number, max: number) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            {/* <Loader /> */}
            <div ref={main} className="main">
                <Header />
                <video ref={video} autoPlay muted loop id="myVideo">
                    <source src={anim_bg} type="video/mp4" />
                </video>

                <div className="content">
                    <h1>SWAN FRERE</h1>
                    <p ref={typewrite}></p>
                </div>
                <div className="ball"></div>
            </div>
        </>
    );
};

export default Landing;