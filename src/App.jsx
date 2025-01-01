// src/App.jsx
import React, { Suspense, lazy } from "react";
import Starfield from "./components/Starfield";
// import Timeline from "./components/Timeline"; // REMOVE this import

// LAZY import for Timeline
const Timeline = lazy(() => import("./components/Timeline"));

export default function App() {
    return (
        <>
            {/* Starfield canvas behind everything */}
            <Starfield />

            <div className="relative z-10 mx-auto">
                {/* Hero Section */}
                <section id="hero" className="py-16 text-center mx-auto max-w-[800px]">
                    <div className="flex flex-col items-center">
                        <img
                            src="time100cover.jpg"
                            alt="TIME 100 AI 2023 Cover"
                            className="w-[120px] mb-5 border border-gray-600 shadow-lg"
                        />

                        <h1 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
                            Inside the AGI Revolution
                            <br />
                            2022 - 2025
                        </h1>
                        <p className="text-gray-300 font-sans max-w-xl px-2 text-lg leading-relaxed">
                            The last few years of AI have happened fast. This timeline attempts to tell its story.
                        </p>
                    </div>
                </section>

                {/* Timeline Section */}
                <div className="py-8">
                    <Suspense fallback={<div className="text-white serif py-80 ">Loading timeline...</div>}>
                        <Timeline />
                    </Suspense>
                </div>

                {/* Footer */}
                <footer className="text-center py-8 text-sm text-gray-400 max-w-[800px] mx-auto font-sans">
                    © { } AGI Timeline. By <a href="https://x.com/jam3scampbell">James Campbell</a>, Website by <a href="https://x.com/Emiliano_GLopez">Emiliano Garcia-Lopez</a>
                </footer>
            </div>
        </>
    );
}
