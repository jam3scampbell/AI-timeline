import React from "react";
import Starfield from "./components/Starfield";
import Timeline from "./components/Timeline";



export default function App() {
    return (
        <>
            {/* Starfield canvas behind everything */}
            <Starfield />

            <div className="relative z-10 max-w-[800px] mx-auto px-4">
                {/* Hero Section */}
                <section id="hero" className="py-16 text-center">
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
                        <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
                            The last few years of AI have happened fast. This timeline attempts to tell its story.
                        </p>
                    </div>
                </section>

                {/* Timeline Section */}
                <Timeline />

                {/* Footer */}
                <footer className="text-center py-8 text-sm text-gray-400">
                    © 2024 AI Timeline. By James Campbell, Emiliano Garcia-Lopez
                </footer>
            </div>
        </>
    );
}
