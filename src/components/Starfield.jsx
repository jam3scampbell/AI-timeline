import React, { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Starfield() {
    useEffect(() => {
        let scene, camera, renderer;
        let star1, star2;
        let angle1 = 0;
        let angle2 = 0;
        const baseSpeed1 = 0.003;
        const baseSpeed2 = 0.005;
        let globalSpeedFactor = 1;
        let animationFrameId;

        function init() {
            const container = document.getElementById("bg-canvas");
            if (!container) return;

            scene = new THREE.Scene();

            // Initial camera setup
            camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                1,
                3000
            );
            camera.position.set(400, 300, 400);
            camera.lookAt(0, 0, 0);

            // Initialize renderer
            renderer = new THREE.WebGLRenderer({
                canvas: container,
                alpha: true,
                antialias: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            createBinaryStars();
            addLights();
            setupStarFlicker();
            animate();
        }

        function createBinaryStars() {
            // First star
            const geometry1 = new THREE.SphereGeometry(30, 32, 32);
            const material1 = new THREE.MeshStandardMaterial({
                color: 0x8a2be2,
                emissive: 0x8a2be2,
                emissiveIntensity: 0.3,
                roughness: 0.4,
                metalness: 0.2
            });
            star1 = new THREE.Mesh(geometry1, material1);
            scene.add(star1);

            // Second star
            const geometry2 = new THREE.SphereGeometry(20, 32, 32);
            const material2 = new THREE.MeshStandardMaterial({
                color: 0x4169e1,
                emissive: 0x4169e1,
                emissiveIntensity: 0.3,
                roughness: 0.4,
                metalness: 0.2
            });
            star2 = new THREE.Mesh(geometry2, material2);
            scene.add(star2);
        }

        function addLights() {
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
            directionalLight.position.set(0, 200, 300);
            scene.add(directionalLight);
        }

        function setupStarFlicker() {
            gsap.to(star1.material, {
                emissiveIntensity: 0.9,
                duration: 1.2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
            gsap.to(star2.material, {
                emissiveIntensity: 0.9,
                duration: 1.0,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }

        function animate() {
            animationFrameId = requestAnimationFrame(animate);

            angle1 += baseSpeed1 * globalSpeedFactor;
            angle2 += baseSpeed2 * globalSpeedFactor;

            const radius1 = 80;
            star1.position.x = radius1 * Math.cos(angle1);
            star1.position.z = radius1 * Math.sin(angle1);

            const radius2 = 120;
            star2.position.x = radius2 * Math.cos(angle2);
            star2.position.z = radius2 * Math.sin(angle2);

            renderer.render(scene, camera);
        }

        function handleResize() {
            if (!camera || !renderer) return;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }

        function setupScrollAnimations() {
            ScrollTrigger.create({
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    globalSpeedFactor = 1 + (self.progress * 4);
                }
            });
        }

        // Initialize everything
        init();
        setupScrollAnimations();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (renderer) {
                renderer.dispose();
            }
            if (scene) {
                scene.traverse((object) => {
                    if (object.geometry) {
                        object.geometry.dispose();
                    }
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });
            }
        };
    }, []);

    return (
        <canvas
            id="bg-canvas"
            className="fixed top-0 left-0 w-full h-full z-0"
        />
    );
}