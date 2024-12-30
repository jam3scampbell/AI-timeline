import React from "react";
import Starfield from "./components/Starfield";
import Timeline from "./components/Timeline";



export default function App() {
    return (
        <>
            {/* Starfield canvas behind everything */}
            <Starfield />

            <div className="relative z-10  mx-auto px-4">
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
                        <p className="text-gray-300 font-sans max-w-xl text-lg leading-relaxed">
                            The last few years of AI have happened fast. This timeline attempts to tell its story.
                        </p>
                    </div>
                </section>

                {/* Timeline Section
                // In App.jsx, update the Timeline section wrapper */}
                <div className="px-4 py-8">
                    <Timeline />
                </div>

                {/* Footer */}
                <footer className="text-center py-8 text-sm text-gray-400 max-w-[800px] mx-auto font-sans">
                    © { } AGI Timeline. By <a className="underline" href="https://x.com/jam3scampbell">James Campbell</a>, Website by <a className="underline" href="https://x.com/Emiliano_GLopez">Emiliano Garcia-Lopez</a>
                </footer>
            </div>
        </>
    );
}
