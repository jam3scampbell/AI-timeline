// src/components/EmergentBackground.jsx
import React, { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Configuration object with default values
const DEFAULT_CONFIG = {
    layers: 5,
    particlesPerLayer: 700,
    baseColor: new THREE.Color(0.2, 0.3, 0.8),
    baseSize: 1.5,
    baseOpacity: 0.4,
    rotationSpeed: 0.05,
    waveSpeed: 0.0008,
    cameraDistance: 300,
    enableScrollEffect: true
};

export default function EmergentBackground({ config = {} }) {
    useEffect(() => {
        const finalConfig = { ...DEFAULT_CONFIG, ...config };
        
        let scene, camera, renderer;
        let particles = [];
        let animationFrameId;
        let time = 0;
        let scrollTrigger = null;

        class ParticleLayer {
            constructor(layerIndex) {
                const geometry = new THREE.BufferGeometry();
                const positions = new Float32Array(finalConfig.particlesPerLayer * 3);
                
                // Create spiral pattern
                for (let i = 0; i < finalConfig.particlesPerLayer * 3; i += 3) {
                    const angle = (i / 3) * 0.1;
                    const radius = (layerIndex + 1) * 50 + Math.sin(angle) * 20;
                    positions[i] = Math.cos(angle) * radius;
                    positions[i + 1] = Math.sin(angle) * radius;
                    positions[i + 2] = layerIndex * 20 - 50;
                }
                
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                
                const material = new THREE.PointsMaterial({
                    size: finalConfig.baseSize,
                    color: new THREE.Color(
                        finalConfig.baseColor.r + (layerIndex * 0.15),
                        finalConfig.baseColor.g + (layerIndex * 0.02),
                        finalConfig.baseColor.b - (layerIndex * 0.15)
                    ),
                    transparent: true,
                    opacity: finalConfig.baseOpacity - (layerIndex * 0.05),
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    depthTest: false
                });
                
                this.points = new THREE.Points(geometry, material);
                this.geometry = geometry;
                this.material = material;
            }

            update(time, layerIndex) {
                const positions = this.points.geometry.attributes.position.array;
                
                for (let i = 0; i < positions.length; i += 3) {
                    const angle = (i / 3) * 0.1 + time;
                    const radius = (layerIndex + 1) * 50 + Math.sin(angle + layerIndex) * 15;
                    positions[i] = Math.cos(angle) * radius + Math.sin(time * 1.5 + i) * 3;
                    positions[i + 1] = Math.sin(angle) * radius + Math.cos(time * 1.5 + i) * 3;
                    positions[i + 2] += Math.sin(time + i * 0.01) * 0.1;
                }
                
                this.points.geometry.attributes.position.needsUpdate = true;
                this.points.rotation.z = time * finalConfig.rotationSpeed;
            }

            dispose() {
                this.geometry.dispose();
                this.material.dispose();
            }
        }

        function setupScrollTrigger() {
            const timeline = document.querySelector('.timeline-container')?.parentElement || document.querySelector('.cards-view');
            if (!timeline) {
                setTimeout(setupScrollTrigger, 100);
                return;
            }

            if (scrollTrigger) {
                scrollTrigger.kill();
            }

            ScrollTrigger.refresh();

            scrollTrigger = ScrollTrigger.create({
                trigger: timeline,
                start: "top top",
                end: "bottom bottom",
                invalidateOnRefresh: true,
                scrub: true,
                onUpdate: (self) => {
                    if (camera) {
                        camera.position.y = -50 + (self.progress * 100);
                        camera.lookAt(0, 0, 0);
                    }
                }
            });
        }

        // Mutation observer for view changes
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    const hasTimelineView = document.querySelector('.timeline-container');
                    const hasCardsView = document.querySelector('.cards-view');
                    if (hasTimelineView || hasCardsView) {
                        setTimeout(setupScrollTrigger, 100);
                        break;
                    }
                }
            }
        });

        // Start observing the container that holds the views
        const container = document.querySelector('.relative.z-10.mx-auto');
        if (container) {
            observer.observe(container, {
                childList: true,
                subtree: true
            });
        }

        function init() {
            const container = document.getElementById('emergent-canvas');
            if (!container) return;

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                2000
            );
            
            renderer = new THREE.WebGLRenderer({
                canvas: container,
                alpha: true,
                antialias: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            for (let i = 0; i < finalConfig.layers; i++) {
                const layer = new ParticleLayer(i);
                particles.push(layer);
                scene.add(layer.points);
            }

            camera.position.z = finalConfig.cameraDistance;

            if (finalConfig.enableScrollEffect) {
                setTimeout(setupScrollTrigger, 100);
            }
        }

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            time += finalConfig.waveSpeed;
            
            particles.forEach((layer, index) => {
                layer.update(time, index);
            });

            camera.position.x = Math.sin(time * 0.5) * 30;
            if (!finalConfig.enableScrollEffect) {
                camera.position.y = Math.cos(time * 0.3) * 30;
            }
            camera.lookAt(0, 0, 0);
            
            renderer.render(scene, camera);
        }

        function handleResize() {
            if (!camera || !renderer) return;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }

        init();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            if (scrollTrigger) {
                scrollTrigger.kill();
            }
            window.removeEventListener('resize', handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (renderer) {
                renderer.dispose();
            }
            particles.forEach(layer => layer.dispose());
        };
    }, [config]);

    return (
        <canvas
            id="emergent-canvas"
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
    );
}
