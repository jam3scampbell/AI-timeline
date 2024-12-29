import React, { useEffect, useState, useMemo, useRef } from "react";
import { TIMELINE_DATA } from "../data/timelineData";
import gsap from "gsap";

export default function Timeline() {
    const events = useMemo(() => {
        // Sort by date once
        const sorted = [...TIMELINE_DATA.events].sort(
            (a, b) => toDateObj(a.start_date) - toDateObj(b.start_date)
        );
        return sorted;
    }, []);

    const [closestEventDate, setClosestEventDate] = useState(null);
    const ticksContainerRef = useRef(null);
    const circleRef = useRef(null);

    // Generate seasonal ticks
    const seasonalTicks = useMemo(() => {
        if (!events.length) return [];
        const minDate = toDateObj(events[0].start_date);
        const maxDate = toDateObj(events[events.length - 1].start_date);
        return generateSeasonalTicks(minDate, maxDate);
    }, [events]);

    useEffect(() => {
        function handleScroll() {
            // The vertical center of the viewport
            const viewportMid = window.innerHeight / 2;
            // Find all event-card elements
            const cards = document.querySelectorAll(".event-card");
            let closestCard = null;
            let closestDist = Infinity;

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const cardMid = rect.top + rect.height / 2;
                const dist = Math.abs(cardMid - viewportMid);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestCard = card;
                }
            });

            if (!closestCard) return;
            setClosestEventDate(closestCard.dataset.eventDate);
        }

        window.addEventListener("scroll", handleScroll);
        // On mount, run once
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!closestEventDate || !ticksContainerRef.current || !circleRef.current)
            return;

        // Map date to fraction
        const cardDate = parseYYYYMMDD(closestEventDate);
        const minDate = toDateObj(events[0].start_date);
        const maxDate = toDateObj(events[events.length - 1].start_date);
        const fraction = (cardDate - minDate) / (maxDate - minDate);

        // Circle position
        const maxY = ticksContainerRef.current.offsetHeight - 24; // circle is 24px tall
        const yVal = fraction * maxY;

        gsap.to(circleRef.current, {
            duration: 0.3,
            y: yVal,
            ease: "power2.out"
        });
    }, [closestEventDate, events]);

    return (
        <section
            id="timeline"
            className="relative grid grid-cols-[80px_1fr] gap-12 mb-16"
        >
            {/* Left column: pinned spine */}
            <div className="sticky top-0 h-screen bg-transparent">
                {/* The vertical line behind ticks/circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/30 z-[-1]" />

                {/* The circle that moves */}
                <div
                    ref={circleRef}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full"
                />

                {/* Container for ticks */}
                <div
                    ref={ticksContainerRef}
                    className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[2px] h-[calc(100%-40px)]"
                >
                    {seasonalTicks.map((tick, i) => {
                        const topPercent = i / (seasonalTicks.length - 1 || 1) * 100;
                        return (
                            <div
                                key={`${tick.year}-${tick.seasonIndex}`}
                                className="absolute left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] bg-white/60 rounded-full"
                                style={{ top: `${topPercent}%` }}
                            >
                                <div className="absolute left-[10px] -translate-y-1/2 text-xs text-gray-300 font-light whitespace-nowrap">
                                    {seasonLabel(tick.seasonIndex)} {tick.year}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right column: event cards */}
            <div className="relative">
                {events.map((ev) => {
                    const { year, month, day } = ev.start_date;
                    const dateStr = formatDate(year, month, day);
                    return (
                        <div
                            key={`${year}-${month}-${day}`}
                            className="event-card my-10 p-5 w-full bg-white/10 
                         backdrop-blur-md rounded-md border border-white/10 
                         shadow-md hover:shadow-xl transition-shadow"
                            data-event-date={`${year}-${month}-${day}`}
                        >
                            <div className="event-date text-gray-300 text-base mb-1">
                                {dateStr}
                            </div>
                            <div className="event-title text-xl font-bold text-white mb-2">
                                {ev.text.headline}
                            </div>
                            {/* Dangerously set inner HTML to preserve the original <p> etc. */}
                            <div
                                className="event-text text-gray-200 text-sm"
                                dangerouslySetInnerHTML={{ __html: ev.text.text }}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

/* ------------- Utilities ------------- */
function toDateObj({ year, month, day }) {
    return new Date(+year, +month - 1, +day);
}

function parseYYYYMMDD(str) {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
}

function formatDate(year, month, day) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${months[month - 1]} ${day}, ${year}`;
}

function dateToSeason(d) {
    const m = d.getMonth() + 1;
    const y = d.getFullYear();
    if (m === 12 || m === 1 || m === 2) return [y, 0]; // Winter
    if (m >= 3 && m <= 5) return [y, 1]; // Spring
    if (m >= 6 && m <= 8) return [y, 2]; // Summer
    return [y, 3];                       // Fall
}

function nextSeason(y, s) {
    if (s < 3) return [y, s + 1];
    return [y + 1, 0];
}

function seasonLabel(seasonIndex) {
    switch (seasonIndex) {
        case 0: return "Winter";
        case 1: return "Spring";
        case 2: return "Summer";
        case 3: return "Fall";
        default: return "Unknown";
    }
}

function generateSeasonalTicks(minDate, maxDate) {
    const ticks = [];
    let [cy, cs] = dateToSeason(minDate);
    const [ey, es] = dateToSeason(maxDate);

    while (true) {
        ticks.push({ year: cy, seasonIndex: cs });
        if (cy === ey && cs === es) break;
        [cy, cs] = nextSeason(cy, cs);
    }
    return ticks;
}
