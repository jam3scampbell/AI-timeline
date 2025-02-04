// src/App.jsx
import React, { Suspense, lazy } from "react";
// import Starfield from "./components/Starfield";
import Starfield from "./components/EmergentBackground";
// import Timeline from "./components/Timeline"; // REMOVE this import
import LanguageSwitcher from './components/LanguageSwitcher';

// LAZY import for Timeline
const Timeline = lazy(() => import("./components/Timeline"));

export default function App() {
    return (
        <>
            <div className="relative">
                {/* Position language switcher at top right */}
                <div className="absolute top-4 right-4 z-50">
                    <LanguageSwitcher />
                </div>

                {/* Starfield canvas behind everything */}
                <Starfield />

                <div className="relative z-10 mx-auto">
                    {/* Hero Section */}
                    <section id="hero" className="pt-16 pb-8 text-center mx-auto max-w-[800px]">
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
                            <p className="text-gray-100 font-sans max-w-xl px-2 text-lg leading-relaxed mb-1 justify">
                                This timeline attempts to tell the story of the last decade in artificial intelligence, from cultural trends to technical advancements. Each event is a clickable link to source material.
                            </p>
                            <p className="text-gray-100 font-sans max-w-xl px-2 text-lg leading-relaxed">
                                Note: Curation is inherently subjective, and many events may have been missed. If you'd like to contribute, visit the project's <a href="https://github.com/jam3scampbell/ai-timeline" className="text-blue-400 hover:text-blue-300 underline decoration-2 hover:decoration-blue-300 transition-colors duration-200">GitHub</a> or submit an event <a href="https://forms.gle/SgW7LYM6pjajUTxw8" className="text-blue-400 hover:text-blue-300 underline decoration-2 hover:decoration-blue-300 transition-colors duration-200">here</a>.
                            </p>

                        </div>
                    </section>

                    {/* Timeline Section */}
                    <div className="overflow-visible">
                        <Suspense fallback={<div className="text-white sans max-w-[1600px] px-20 mx-auto py-70 ">Loading timeline...</div>}>
                            <Timeline />
                        </Suspense>
                    </div>

                    {/* Footer */}
                    <footer className="text-center py-8 text-sm text-gray-400 max-w-[800px] mx-auto font-sans">
                        <p className="mb-1">© {new Date().getFullYear()} AGI Timeline. Created by <a href="https://x.com/jam3scampbell" className="text-blue-400 hover:text-blue-300 underline decoration-1 hover:decoration-blue-300 transition-colors duration-200">James Campbell</a> and <a href="https://x.com/Emiliano_GLopez" className="text-blue-400 hover:text-blue-300 underline decoration-1 hover:decoration-blue-300 transition-colors duration-200">Emiliano Garcia-Lopez</a>.
                        </p>
                        <p className="mb-1">Open-source contributors: <a href="https://x.com/suntzoogway" className=" underline decoration-1 hover:decoration-blue-300 transition-colors duration-200">suntzoogway</a>, <a href="https://github.com/puravparab" className=" underline decoration-1 hover:decoration-blue-300 transition-colors duration-200">puravparab</a>, <a href="https://github.com/jamesms36" className=" underline decoration-1 hover:decoration-blue-300 transition-colors duration-200">jamesms36</a>, Max Kieffer, <a href="https://github.com/jtalmi" className=" underline decoration-1 hover:decoration-blue-300 transition-colors duration-200">Jonathan Talmi</a>
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
