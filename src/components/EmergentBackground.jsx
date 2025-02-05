// src/components/EmergentBackground.jsx
import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CONFIG = {
  layers: 5,
  particlesPerLayer: 700,
  baseColor: new THREE.Color(0.2, 0.3, 0.8),
  baseSize: 1.5,
  baseOpacity: 0.4,
  rotationSpeed: 0.05,
  waveSpeed: 0.0008,
  cameraDistance: 300,
};

export default function EmergentBackground({ config = {} }) {
  const progressRef = useRef(0);
  const cameraRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);
  const targetYRef = useRef(-50);

  useEffect(() => {
    const finalConfig = { ...DEFAULT_CONFIG, ...config };

    let scene, camera, renderer;
    let particles = [];
    let time = 0;

    class ParticleLayer {
      constructor(layerIndex) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(finalConfig.particlesPerLayer * 3);

        for (let i = 0; i < finalConfig.particlesPerLayer * 3; i += 3) {
          const angle = (i / 3) * 0.1;
          const radius = (layerIndex + 1) * 50 + Math.sin(angle) * 20;
          positions[i] = Math.cos(angle) * radius;
          positions[i + 1] = Math.sin(angle) * radius;
          positions[i + 2] = layerIndex * 20 - 50;
        }

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );

        const material = new THREE.PointsMaterial({
          size: finalConfig.baseSize,
          color: new THREE.Color(
            finalConfig.baseColor.r + layerIndex * 0.15,
            finalConfig.baseColor.g + layerIndex * 0.02,
            finalConfig.baseColor.b - layerIndex * 0.15
          ),
          transparent: true,
          opacity: finalConfig.baseOpacity - layerIndex * 0.05,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          depthTest: false,
        });

        this.points = new THREE.Points(geometry, material);
        this.geometry = geometry;
        this.material = material;
      }

      update(time, layerIndex) {
        const positions = this.points.geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
          const angle = (i / 3) * 0.1 + time;
          const radius =
            (layerIndex + 1) * 50 + Math.sin(angle + layerIndex) * 15;
          positions[i] =
            Math.cos(angle) * radius + Math.sin(time * 1.5 + i) * 3;
          positions[i + 1] =
            Math.sin(angle) * radius + Math.cos(time * 1.5 + i) * 3;
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

    // Watch for progress updates
    const updateProgress = () => {
      const timelineElement = document.querySelector(".cards-view");
      if (timelineElement) {
        const newProgress =
          parseFloat(timelineElement.dataset.scrollProgress) || 0;
        progressRef.current = newProgress;
        // Increase the range of movement (-100 to +100 instead of -50 to +50)
        targetYRef.current = -100 + newProgress * 200;
      }
    };

    // Set up scroll listener for smoother updates
    const handleScroll = () => {
      requestAnimationFrame(updateProgress);
    };

    function init() {
      const container = document.getElementById("emergent-canvas");
      if (!container) return;

      scene = new THREE.Scene();
      sceneRef.current = scene;

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      cameraRef.current = camera;

      renderer = new THREE.WebGLRenderer({
        canvas: container,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      for (let i = 0; i < finalConfig.layers; i++) {
        const layer = new ParticleLayer(i);
        particles.push(layer);
        scene.add(layer.points);
      }

      camera.position.z = finalConfig.cameraDistance;
      camera.position.y = -50; // Initial position
    }

    function animate() {
      animationRef.current = requestAnimationFrame(animate);
      time += finalConfig.waveSpeed;

      particles.forEach((layer, index) => {
        layer.update(time, index);
      });

      // Smooth camera movement with faster lerp
      if (camera) {
        camera.position.x = Math.sin(time * 0.5) * 30;
        // Increase lerp speed from 0.1 to 0.15 for snappier movement
        camera.position.y += (targetYRef.current - camera.position.y) * 0.15;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    }

    // Initialize scene first
    init();

    // Then set up observers and listeners
    const observer = new MutationObserver(updateProgress);
    const timelineElement = document.querySelector(".cards-view");
    if (timelineElement) {
      observer.observe(timelineElement, {
        attributes: true,
        attributeFilter: ["data-scroll-progress"],
      });
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Start animation
    animate();

    // Initial progress check
    updateProgress();

    function handleResize() {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
      particles.forEach((layer) => layer.dispose());
    };
  }, [config]);

  return (
    <canvas
      id="emergent-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
