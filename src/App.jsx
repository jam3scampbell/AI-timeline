// src/App.jsx
import React, { Suspense, lazy } from "react";
// import Starfield from "./components/Starfield";
import Starfield from "./components/EmergentBackground";
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
                            The Road to AGI
                            <br />
                            2015 - {new Date().getFullYear()}
                        </h1>
                        <p className="text-gray-300 font-sans max-w-xl px-2 text-lg leading-relaxed">
                            This timeline attempts to tell the story of the last decade of AI research, including both cultural movements and technical research advances. Note: curation will enivitably be opinionated and there are lots of things that were missed. If you would like to contribute, please do so on the project <a href="https://github.com/jam3scampbell/ai-timeline">Github</a>.
                        </p>
                    </div>
                </section>

                {/* Timeline Section */}
                <div className="py-8">
                    <Suspense fallback={<div className="text-white sans max-w-[1400px] px-20 mx-auto py-70 ">Loading timeline...</div>}>
                        <Timeline />
                    </Suspense>
                </div>

                {/* Footer */}
                <footer className="text-center py-8 text-sm text-gray-400 max-w-[800px] mx-auto font-sans">
                    © {new Date().getFullYear()} AGI Timeline. By <a href="https://x.com/jam3scampbell">James Campbell</a> and <a href="https://x.com/Emiliano_GLopez">Emiliano Garcia-Lopez</a>

                </footer>
            </div>
        </>
    );
}
