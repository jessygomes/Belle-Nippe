import React, { useEffect } from 'react';
import './Noise.scss';

const Noise = () => {
    useEffect(() => {
        let canvas, ctx;
        let wWidth, wHeight;
        let noiseData = [];
        let frame = 0;
        let loopTimeout;

        // Create Noise
        const createNoise = () => {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000;
                }
            }
            noiseData.push(idata);
        };

        // Play Noise
        const paintNoise = () => {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }
            ctx.putImageData(noiseData[frame], 0, 0);
        };

        // Loop
        const loop = () => {
            paintNoise(frame);
            loopTimeout = window.setTimeout(() => {
                window.requestAnimationFrame(loop);
            }, 1000 / 25);
        };

        // Setup
        const setup = () => {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;

            canvas.width = wWidth;
            canvas.height = wHeight;

            for (let i = 0; i < 10; i++) {
                createNoise();
            }
            loop();
        };

        // Reset
        let resizeThrottle;
        const reset = () => {
            window.addEventListener('resize', () => {
                window.clearTimeout(resizeThrottle);

                resizeThrottle = window.setTimeout(() => {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        };

        // Init
        const init = (() => {
            canvas = document.getElementById('noise');
            ctx = canvas.getContext('2d');

            setup();
        })();
        // Nettoyer les ressources lors du démontage du composant
        return () => {
            window.clearTimeout(loopTimeout);
            window.removeEventListener('resize', reset);
        };
    }, []); // Le tableau vide [] garantit que useEffect ne s'exécutera qu'une fois lors du montage initial du composant

    return (
        <canvas id="noise" className='noise' style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 100 }} />
    );
};

export default Noise;