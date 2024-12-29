import React, { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NeuralBackground() {
    useEffect(() => {
        let scene, camera, renderer;
        let nodes = [];
        let connections = [];
        let animationFrameId;
        const nodeCount = 50;
        const connectionDistance = 150;
        let time = 0;

        class Node {
            constructor() {
                const geometry = new THREE.SphereGeometry(2, 16, 16);
                const material = new THREE.MeshBasicMaterial({
                    color: 0x4a9eff,
                    transparent: true,
                    opacity: 0.8
                });
                this.mesh = new THREE.Mesh(geometry, material);
                this.velocity = new THREE.Vector3(
                    (Math.random() - 0.5) * 0.4,
                    (Math.random() - 0.5) * 0.4,
                    (Math.random() - 0.5) * 0.4
                );
                this.mesh.position.set(
                    (Math.random() - 0.5) * 500,
                    (Math.random() - 0.5) * 500,
                    (Math.random() - 0.5) * 500
                );
            }

            update() {
                this.mesh.position.add(this.velocity);

                // Boundary check and bounce
                ['x', 'y', 'z'].forEach(axis => {
                    if (Math.abs(this.mesh.position[axis]) > 250) {
                        this.velocity[axis] *= -1;
                    }
                });

                // Subtle position modification based on sine wave
                this.mesh.position.y += Math.sin(time * 2 + this.mesh.position.x) * 0.3;
            }
        }

        class Connection {
            constructor(startNode, endNode) {
                const geometry = new THREE.BufferGeometry().setFromPoints([
                    startNode.mesh.position,
                    endNode.mesh.position
                ]);

                const material = new THREE.LineBasicMaterial({
                    color: 0x4a9eff,
                    transparent: true,
                    opacity: 0.2
                });

                this.line = new THREE.Line(geometry, material);
                this.startNode = startNode;
                this.endNode = endNode;
            }

            update() {
                const distance = this.startNode.mesh.position.distanceTo(this.endNode.mesh.position);
                if (distance < connectionDistance) {
                    // Update line positions
                    const points = [
                        this.startNode.mesh.position,
                        this.endNode.mesh.position
                    ];
                    this.line.geometry.setFromPoints(points);

                    // Update opacity based on distance
                    const opacity = 0.5 * (1 - distance / connectionDistance);
                    this.line.material.opacity = opacity;
                    this.line.visible = true;
                } else {
                    this.line.visible = false;
                }
            }
        }

        function init() {
            const container = document.getElementById('neural-canvas');
            if (!container) return;

            // Scene setup
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                2000
            );
            camera.position.z = 500;

            // Renderer setup
            renderer = new THREE.WebGLRenderer({
                canvas: container,
                alpha: true,
                antialias: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Create nodes
            for (let i = 0; i < nodeCount; i++) {
                const node = new Node();
                nodes.push(node);
                scene.add(node.mesh);

                // Pulse animation
                gsap.to(node.mesh.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5,
                    duration: 1 + Math.random(),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: Math.random() * 2
                });
            }

            // Create connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const connection = new Connection(nodes[i], nodes[j]);
                    connections.push(connection);
                    scene.add(connection.line);
                }
            }

            // Add subtle rotation to camera based on scroll
            ScrollTrigger.create({
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    camera.position.y = -100 + (self.progress * 200);
                    camera.lookAt(0, 0, 0);
                }
            });
        }

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            time += 0.01;

            // Update nodes
            nodes.forEach(node => node.update());

            // Update connections
            connections.forEach(connection => connection.update());

            // Rotate camera slightly
            camera.position.x = Math.sin(time * 0.1) * 50;
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

        // Initialize and start animation
        init();
        animate();

        // Handle window resize
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
            id="neural-canvas"
            className="fixed top-0 left-0 w-full h-full z-0"
        />
    );
}