import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

(function () {
    let scene, camera, renderer;
    let container = document.getElementById("bg-canvas");
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Two star meshes
    let star1, star2;
    // Orbital angles
    let angle1 = 0;
    let angle2 = 0;
    // Base speeds
    let baseSpeed1 = 0.003;
    let baseSpeed2 = 0.005;
    let globalSpeedFactor = 1;

    function init() {
        scene = new THREE.Scene();

        // Isometric vantage
        camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
        camera.position.set(400, 300, 400);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({
            canvas: container,
            alpha: true,
            antialias: true
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Create the stars
        createBinaryStars();

        // Lights
        addLights();

        // Flicker effect
        setupStarFlicker();

        animate();
        window.addEventListener("resize", onWindowResize, false);
        setupScrollAnimations();
    }

    function createBinaryStars() {
        // Star 1: bigger, a bit brighter violet
        const geometry1 = new THREE.SphereGeometry(30, 32, 32);
        const material1 = new THREE.MeshStandardMaterial({
            color: 0x8a2be2, // "blueviolet"
            emissive: 0x8a2be2, // same hue for glow
            emissiveIntensity: 0.3, // base glow
            roughness: 0.4,
            metalness: 0.2
        });
        star1 = new THREE.Mesh(geometry1, material1);
        scene.add(star1);

        // Star 2: smaller, a lighter blue for a brighter glow
        const geometry2 = new THREE.SphereGeometry(20, 32, 32);
        const material2 = new THREE.MeshStandardMaterial({
            color: 0x4169e1, // "royalblue"
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
        // Flicker star1 from 0.3 to 0.9
        gsap.to(star1.material, {
            emissiveIntensity: 0.9,
            duration: 1.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        // Flicker star2 from 0.3 to 0.9, slightly faster
        gsap.to(star2.material, {
            emissiveIntensity: 0.9,
            duration: 1.0,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });
    }

    function animate() {
        requestAnimationFrame(animate);

        angle1 += baseSpeed1 * globalSpeedFactor;
        angle2 += baseSpeed2 * globalSpeedFactor;

        // star1 orbit
        const radius1 = 80;
        star1.position.x = radius1 * Math.cos(angle1);
        star1.position.z = radius1 * Math.sin(angle1);

        // star2 orbit
        const radius2 = 120;
        star2.position.x = radius2 * Math.cos(angle2);
        star2.position.z = radius2 * Math.sin(angle2);

        renderer.render(scene, camera);
    }

    function setupScrollAnimations() {
        gsap.to(this, {
            duration: 1,
            globalSpeedFactor: 5,
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
    }

    function onWindowResize() {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    document.addEventListener("DOMContentLoaded", init);
})();
