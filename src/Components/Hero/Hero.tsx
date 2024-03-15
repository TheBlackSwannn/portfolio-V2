import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import './Hero.scss'

import av1 from '../../assets/av1.png'
import av2 from '../../assets/av2.png'
import av3 from '../../assets/av3.png'

function Hero({ parent }: { parent: React.RefObject<HTMLDivElement> }) {
    const [addBall, _setAddBall] = useState(false);

    const typewrite = useRef<HTMLParagraphElement>(null);
    const addBallRef = useRef(addBall);

    const setAddBall = (value: boolean) => {
        addBallRef.current = value;
        _setAddBall(value);
    }

    const currentAvatar = useMemo(() => {
        const avatars = [av1, av2, av3];
        return avatars[Math.floor(Math.random() * 15) % avatars.length];
    }, []);

    const subtitles = [
        'Fullstack Web Developer',
        'ThreeJS Enthusiast',
        'React x NextJS Developer',
        'Bug Bounty Hunter',
        'Open Source Contributor'
    ];

    let index = 0;

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setTimeout(() => {
            const range = 1;
            const sizeInt = 30;
            const size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
            const left = "left: " + getRandomInt(e.clientX - range - sizeInt, e.clientX + range) + "px;";
            const top = "top: " + getRandomInt(e.clientY - range - sizeInt, e.clientY + range) + "px;";
            const ball = document.createElement("div");

            ball.style.cssText = size + left + top;
            ball.className = "ball";
            ball.onanimationend = function () {
                ball.remove();
            };

            if (parent.current) {
                if (!addBallRef.current) {
                    parent.current.appendChild(ball);
                    setAddBall(true);
                    setTimeout(() => {
                        setAddBall(false);
                    }, 30);
                }
            }
        }, 100);
    }, [parent]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, [handleMouseMove]);

    useEffect(() => {
        writeText(subtitles[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function writeText(text: string) {
        if (typewrite.current) {
            for (let i = 0; i < text.length; i++) {
                if (typewrite.current)
                    typewrite.current.innerHTML += text.charAt(i);
                await sleep(50);
            }
            await sleep(2000);
            eraseText(text);
        }
    }

    async function eraseText(text: string) {
        if (typewrite.current) {
            for (let i = 0; i <= text.length; i++) {
                if (typewrite.current)
                    typewrite.current.innerHTML = text.substring(0, text.length - i);
                await sleep(30);
            }
            index++;
            await sleep(1000);
            writeText(subtitles[index % subtitles.length]);
        }
    }

    function getRandomInt(min: number, max: number) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    return (
        <div className="hero-container">
            <div className="avatar">
                <img src={currentAvatar} alt="avatar" />
            </div>
            <div className="content">
            <h1>SWAN FRERE</h1>
            <p ref={typewrite}></p>
            <div className="actions">
                <a className="hire" href=""><span><i><FontAwesomeIcon icon={faSuitcase} /></i>Hire Me</span></a>
                <a className="explore" href=""><span>Explore<i><FontAwesomeIcon icon={faArrowRight} /></i></span></a>
            </div>
        </div>
        </div>
        
    );
}

export default Hero;