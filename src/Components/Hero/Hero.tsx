import { useEffect, useRef, useState } from "react";
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Hero({ parent }: { parent: React.RefObject<HTMLDivElement> }) {
    const [addBall, _setAddBall] = useState(false);

    const typewrite = useRef<HTMLParagraphElement>(null);
    const addBallRef = useRef(addBall);

    const setAddBall = (value: boolean) => {
        addBallRef.current = value;
        _setAddBall(value);
    }

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
        writeText(subtitles[index]);
    }, [typewrite]);

    function handleMouseMove(e: MouseEvent) {
        console.log(addBallRef.current);
        setTimeout(() => {
            var range = 1;
            var sizeInt = 30;
            var size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
            var left = "left: " + getRandomInt(e.clientX - range - sizeInt, e.clientX + range) + "px;";
            var top = "top: " + getRandomInt(e.clientY - range - sizeInt, e.clientY + range) + "px;";
            var ball = document.createElement("div");

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
    };

    async function writeText(text: string) {
        if (typewrite.current) {
            for (let i = 0; i < text.length; i++) {
                if (typewrite.current)
                    typewrite.current.innerHTML += text.charAt(i);
                await sleep(50);
            }
            setTimeout(eraseText, 3000, text);
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
            setTimeout(writeText, 1000, subtitles[index % subtitles.length]);
        }
    }

    function getRandomInt(min: number, max: number) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    return (
        <div className="content">
            <h1>SWAN FRERE</h1>
            <p ref={typewrite}></p>
            <div className="actions">
                <a className="hire" href=""><span>Hire Me<i><FontAwesomeIcon icon={faArrowRight} /></i></span></a>
                <a className="explore" href=""><span>Explore<i><FontAwesomeIcon icon={faArrowRight} /></i></span></a>
            </div>
        </div>
    );
}

export default Hero;