import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    // Initialisation avec des valeurs par défaut pour éviter les références à `window` côté serveur
    const [windowDimensions, setWindowDimensions] = useState({height : 0, width : 0});

    useEffect(() => {
        // Cette fonction ne sera exécutée que côté client
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        // Mettre à jour les dimensions au montage pour capturer les dimensions actuelles de la fenêtre
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}