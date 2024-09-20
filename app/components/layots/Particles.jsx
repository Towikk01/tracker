'use client';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBG = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -10,
                },
                particles: {
                    number: {
                        value: 250,
                        density: {
                            enable: true,
                            value_area: 1815.039575754227,
                        },
                    },
                    color: {
                        value: '#666666',
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: 'white',
                        },
                        polygon: {
                            nb_sides: 8,
                        },
                        image: {
                            src: '',
                            width: 100,
                            height: 100,
                        },
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1.2787212787212787,
                            opacity_min: 0.9270729270729271,
                            sync: true,
                        },
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 4,
                            size_min: 0.3,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: false,
                        distance: 189.39543399174545,
                        color: '#666666',
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1.1,
                        direction: 'top',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: true,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'window',
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        onclick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 191.80819180819182,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 35.964035964035965,
                            size: 0,
                            duration: 0.7992007992007992,
                            opacity: 0.08791208791208792,
                            speed: 3,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
};

export default ParticlesBG;
