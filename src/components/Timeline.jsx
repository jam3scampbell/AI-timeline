import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE_DATA } from "../data/timelineData";

export default function ImprovedTimeline() {
    const [activeEventIndex, setActiveEventIndex] = useState(0);
    const [showMiniMap, setShowMiniMap] = useState(true);
    const timelineRef = useRef(null);
    const events = [...TIMELINE_DATA.events].sort(
        (a, b) => new Date(a.start_date.year, a.start_date.month - 1) -
            new Date(b.start_date.year, b.start_date.month - 1)
    );

    // Calculate which event is in view
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const cards = timelineRef.current.getElementsByClassName('event-card');
            const viewportHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            // Handle edge cases first
            if (scrollTop <= viewportHeight * 0.1) {
                // We're at the top
                setActiveEventIndex(0);
                return;
            }

            if (scrollTop + viewportHeight >= documentHeight - viewportHeight * 0.1) {
                // We're at the bottom
                setActiveEventIndex(events.length - 1);
                return;
            }

            // For all other cases, find the card closest to the middle
            const viewportMiddle = scrollTop + (viewportHeight / 2);
            let closestCard = 0;
            let minDistance = Infinity;

            Array.from(cards).forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardMiddle = scrollTop + rect.top + (rect.height / 2);
                const distance = Math.abs(cardMiddle - viewportMiddle);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestCard = index;
                }
            });

            setActiveEventIndex(closestCard);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger initial calculation
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [events.length]);

    return (
        <div className="relative">
            {/* Mini-map toggle button */}
            <button
                onClick={() => setShowMiniMap(!showMiniMap)}
                className="fixed top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md backdrop-blur-sm transition-all"
            >
                {showMiniMap ? 'Hide' : 'Show'} Overview
            </button>

            {/* Mini-map */}
            {showMiniMap && (
                <div className="fixed top-20 right-4 w-48 bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-xl border border-white/10 z-40">
                    <div className="text-sm font-bold mb-2 text-white/80">Timeline Overview</div>
                    <div className="space-y-1">
                        {events.map((event, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToEvent(index)}
                                className={`w-full text-left p-2 text-xs rounded transition-all ${index === activeEventIndex
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/60 hover:bg-white/10'
                                    }`}
                            >
                                {event.text.headline}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Main timeline */}
            <section
                ref={timelineRef}
                className="grid grid-cols-[80px_1fr] gap-12 mb-16 relative"
            >
                {/* Left column: Timeline spine */}
                <div className="sticky top-0 h-screen">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/30" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full transition-all duration-300"
                        style={{
                            top: `${(activeEventIndex / (events.length - 1)) * 90 + 5}%`
                        }}
                    />
                </div>

                {/* Right column: Event cards */}
                <div className="space-y-12 py-16">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`event-card transition-all duration-300 p-6 rounded-lg border ${index === activeEventIndex
                                ? 'bg-white/15 border-white/20 shadow-lg scale-105'
                                : 'bg-white/5 border-white/5 hover:bg-white/10'
                                }`}
                        >
                            <div className="text-sm text-white/60 mb-1">
                                {`${event.start_date.year}-${String(event.start_date.month).padStart(2, '0')}-${String(event.start_date.day).padStart(2, '0')}`}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {event.text.headline}
                            </h3>
                            <div
                                className="text-white/80"
                                dangerouslySetInnerHTML={{ __html: event.text.text }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}