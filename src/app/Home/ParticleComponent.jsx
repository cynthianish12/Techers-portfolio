'use client';
import Image from "next/image";
import { useEffect } from 'react';

const ParticleComponent = () => {
    useEffect(() => {
        let script;

        const loadScript = async () => {
            script = document.createElement('script');
            script.src = 'https://nextparticle.nextco.de/nextparticle.min.js';
            script.async = true;
            document.body.appendChild(script);
        };

         loadScript();

        return () => {
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const nextParticleScript = `
                const nextParticle = new NextParticle({
                    image: document.getElementById('logo'),
                    addTimestamp: true,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    initPosition: 'none',
                    initDirection: 'none',
                });
            `;
            const script = document.createElement('script');
            script.innerHTML = nextParticleScript;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, []);

    const handleImageLoad = () => {
        const image = document.getElementById('logo');
        if (image) {
            const nextParticle = new NextParticle({
                image,
                addTimestamp: true,
                width: window.innerWidth,
                height: window.innerHeight,
                initPosition: 'none',
                initDirection: 'none',
            });
        }
    };

    return (
        <>
            <Image
                id="logo"
                className="next-particle"
                data-particle-gap="1"
                data-width="550"
                data-height="320"
                data-max-width="100%"
                data-max-height="100%"
                src="/Group 7.png"
                alt=''
                onLoad={handleImageLoad}
            />
        </>
    );
};

export default ParticleComponent;
