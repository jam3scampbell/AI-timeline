// src/components/Timeline.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TIMELINE_DATA, CATEGORIES } from "../data/timelineData";
import { motion, AnimatePresence } from 'framer-motion';

// Constants
const MIN_CARD_WIDTH = 250;
const ROW_GAP = 10;
const TIME_MARKER_HEIGHT = 40;
const Z_INDEX_BASE = 20;
const Z_INDEX_HOVER = 100;
const MIN_CARD_HEIGHT = 70;
const EXPANDED_CARD_HEIGHT = 140;
const ROW_HEIGHT = 70;
const ZOOM_LEVELS = [1, 2, 3, 4, 6, 8];

const EventCard = ({
    event,
    position,
    row,
    totalRows,
    isHovered,
    onHover,
    rowHeight,
}) => {
    const width = MIN_CARD_WIDTH + (event.importance * 40);
    const topPos = (row * rowHeight) + TIME_MARKER_HEIGHT + (ROW_GAP * row);

    return (
        <motion.div
            className="absolute"
            style={{
                left: `${position - (width / 2)}px`,
                top: `${topPos}px`,
                width: `${width}px`,
                height: isHovered ? `${EXPANDED_CARD_HEIGHT}px` : `${MIN_CARD_HEIGHT}px`,
                transition: 'height 0.3s ease-out',
                zIndex: isHovered ? Z_INDEX_HOVER : Z_INDEX_BASE,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
                scale: 1.03,
                zIndex: Z_INDEX_HOVER,
            }}
            onMouseEnter={() => onHover(event)}
            onMouseLeave={() => onHover(null)}
        >
            <div
                className={`
                    h-full rounded-lg border p-2 transition-all duration-200
                    ${isHovered ? 'border-white/30' : 'border-white/5'}
                    ${event.importance >= 2.5 ? 'border-white/30' : ''}
                    ${isHovered ? 'transform -translate-y-1' : ''} 
                `}
                style={{
                    backgroundColor: isHovered
                        ? 'rgba(58, 58, 102, 0.95)'
                        : 'rgba(255, 255, 255, 0.06)',
                    backgroundImage: isHovered
                        ? 'radial-gradient(transparent 1px, rgba(255, 255, 255, 0.12) 1px)'
                        : 'radial-gradient(transparent 1px, rgba(255, 255, 255, 0.05) 1px)',
                    backgroundSize: '4px 4px',
                    WebkitMaskImage: isHovered
                        ? 'none'
                        : 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
                    maskImage: isHovered
                        ? 'none'
                        : 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
                    boxShadow: isHovered
                        ? `
                            0 0 0 1px rgba(255, 255, 255, 0.1),
                            0 4px 6px -1px rgba(0, 0, 0, 0.2),
                            0 12px 24px -4px rgba(0, 0, 0, 0.5),
                            0 0 20px rgba(255, 255, 255, 0.1),
                            inset 0 0 20px rgba(255, 255, 255, 0.05)
                          `
                        : 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div className="relative z-10">
                    <h3
                        className={`
                            font-serif leading-snug mb-1 pointer-events-none text-lg
                            ${isHovered ? 'text-white' : 'text-white/90'}
                        `}
                    >
                        {event.text.headline}
                    </h3>
                    <div className="text-sm font-sans text-white/60 font-medium pointer-events-none">
                        {`${String(event.start_date.month).padStart(2, '0')}/${String(event.start_date.day).padStart(2, '0')}/${event.start_date.year}`}
                    </div>
                    <div className="text-xs font-sans text-white/40 mt-1">
                        {event.category}
                    </div>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-sm font-sans text-white/80 mt-1 overflow-hidden pointer-events-none"
                                dangerouslySetInnerHTML={{ __html: event.text.text }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const TimeMarker = ({ date, position }) => (
    <div
        className="absolute top-0 h-full select-none pointer-events-none z-0"
        style={{ left: `${position}px` }}
    >
        <div className="relative">
            <div className="absolute top-0 text-sm font-sans text-white/40 font-medium whitespace-nowrap transform -translate-x-1/2">
                {`${date.toLocaleDateString('en-US', { month: 'short' })} '${date.getFullYear().toString().slice(2)}`}
            </div>
            <div className="absolute top-[30px] h-full border-l border-white/10" />
        </div>
    </div>
);

export default function Timeline() {
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [zoomIndex, setZoomIndex] = useState(2);
    const pixelsPerDay = ZOOM_LEVELS[zoomIndex];
    const ROW_COUNT = 5;
    const [activeCategories, setActiveCategories] = useState(
        Object.values(CATEGORIES).reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
    );

    const toggleCategory = (category) => {
        setActiveCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const events = useMemo(() => {
        return [...TIMELINE_DATA.events].sort((a, b) => {
            const dateA = new Date(a.start_date.year, a.start_date.month - 1, a.start_date.day);
            const dateB = new Date(b.start_date.year, b.start_date.month - 1, b.start_date.day);
            return dateA - dateB;
        });
    }, []);

    const positionedEvents = useMemo(() => {
        const filteredEvents = events.filter(event => activeCategories[event.category]);
        const startDate = new Date(2022, 10, 1);
        const rows = Array(ROW_COUNT).fill().map(() => []);

        return filteredEvents.map(event => {
            const date = new Date(
                event.start_date.year,
                event.start_date.month - 1,
                event.start_date.day
            );
            const daysSinceStart = (date - startDate) / (1000 * 60 * 60 * 24);
            const position = daysSinceStart * pixelsPerDay;

            const bestRow = rows.reduce((minRow, row, index) => {
                return row.length < rows[minRow].length ? index : minRow;
            }, 0);

            rows[bestRow].push({ position });

            return {
                ...event,
                position,
                row: bestRow
            };
        });
    }, [events, pixelsPerDay, activeCategories]);

    const timeMarkers = useMemo(() => {
        const startDate = new Date(2022, 10, 1);
        const endDate = new Date(2025, 2, 31);
        const markers = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            markers.push({
                date: new Date(currentDate),
                position: ((currentDate - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay
            });
            currentDate.setMonth(currentDate.getMonth() + 2);
        }

        return markers;
    }, [pixelsPerDay]);

    const totalWidth = useMemo(() => {
        const startDate = new Date(2022, 10, 1);
        const endDate = new Date(2025, 2, 31);
        const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
        return totalDays * pixelsPerDay + 200;
    }, [pixelsPerDay]);

    const zoomIn = () => {
        setZoomIndex((prev) => (prev < ZOOM_LEVELS.length - 1 ? prev + 1 : prev));
    };
    const zoomOut = () => {
        setZoomIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleWheel = (e) => {
        e.preventDefault();

        if (e.ctrlKey || e.metaKey) {
            if (e.deltaY < 0) {
                setZoomIndex((prev) => (prev < ZOOM_LEVELS.length - 1 ? prev + 1 : prev));
            } else {
                setZoomIndex((prev) => (prev > 0 ? prev - 1 : prev));
            }
        } else {
            const scrollAmount = e.shiftKey ? e.deltaY : e.deltaY;
            containerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <>
            <div className="my-2 flex items-center gap-2 sticky top-0 z-20 py-2 lg:mx-12">
                <div className="flex gap-2 items-center flex-wrap">
                    {Object.values(CATEGORIES).map((category) => (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`
                                px-3 py-1 rounded-full text-sm font-sans transition-all
                                ${activeCategories[category]
                                    ? 'bg-white/20 text-white'
                                    : 'bg-white/5 text-white/40'}
                                hover:bg-white/30
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="ml-auto flex items-center gap-2 font-sans text-sm">
                    <button
                        className="bg-white/10 text-white px-4 py-1 rounded hover:bg-white/20 transition whitespace-nowrap"
                        onClick={zoomOut}
                    >
                        Zoom Out
                    </button>
                    <button
                        className="bg-white/10 text-white px-4 py-1 rounded hover:bg-white/20 transition whitespace-nowrap"
                        onClick={zoomIn}
                    >
                        Zoom In
                    </button>
                    <span className="text-white/60 ml-2">
                        {`Zoom: ${pixelsPerDay}px/day`}
                    </span>
                </div>
            </div>
            <div
                ref={containerRef}
                className="relative mx-auto max-w-[1400px] overflow-x-scroll timeline-container"
                onWheel={handleWheel}
            >
                <div
                    className="relative"
                    style={{
                        width: `${totalWidth}px`,
                        height: `${(ROW_COUNT * ROW_HEIGHT) + TIME_MARKER_HEIGHT + ((ROW_COUNT - 1) * ROW_GAP)}px`,
                        padding: '0 2rem'
                    }}
                >
                    <div className="absolute inset-0 z-0">
                        {timeMarkers.map((marker, index) => (
                            <TimeMarker
                                key={index}
                                date={marker.date}
                                position={marker.position}
                            />
                        ))}
                    </div>

                    <div className="relative z-10">
                        {positionedEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                event={event}
                                position={event.position}
                                row={event.row}
                                totalRows={ROW_COUNT}
                                isHovered={hoveredEvent === event}
                                onHover={setHoveredEvent}
                                rowHeight={ROW_HEIGHT}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}