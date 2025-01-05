// src/components/Timeline.jsx
import React, { useState, useEffect, useRef, useMemo, useLayoutEffect, useCallback } from 'react';
import { TIMELINE_DATA, CATEGORIES } from "../data/timelineData";
import { motion, AnimatePresence } from 'framer-motion';

const MIN_CARD_WIDTH = 230;
const ROW_GAP = 10;
const TIME_MARKER_HEIGHT = 40;
const Z_INDEX_BASE = 20;
const Z_INDEX_HOVER = 100;
const MIN_CARD_HEIGHT = 70;
const MIN_EXPANDED_HEIGHT = 120;
const ROW_HEIGHT = 70;
const ZOOM_LEVELS = [1, 2, 3, 4, 6, 8];

// Cards view components
const CardsView = React.memo(function CardsView({
    events,
    activeCategories,
    hoveredEvent,
    setHoveredEvent
}) {
    const timelineRef = useRef(null);
    const spineRef = useRef(null);
    const [activeEventIndex, setActiveEventIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Calculate which event is in view and update scroll progress
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const cards = timelineRef.current.getElementsByClassName('event-card');
            const viewportHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            // Calculate scroll progress (0 to 1)
            setScrollProgress(scrollTop / (documentHeight - viewportHeight));

            // Handle edge cases first
            if (scrollTop <= viewportHeight * 0.1) {
                setActiveEventIndex(0);
                return;
            }

            if (scrollTop + viewportHeight >= documentHeight - viewportHeight * 0.1) {
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
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [events.length]);

    const filteredEvents = events.filter(event => activeCategories[event.category]);
    const currentEvent = filteredEvents[activeEventIndex];

    const scrollToEvent = useCallback((index) => {
        const cards = timelineRef.current.getElementsByClassName('event-card');
        if (cards[index]) {
            const card = cards[index];
            const cardRect = card.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const offset = window.scrollY + cardRect.top - (viewportHeight / 2) + (cardRect.height / 2);

            // Handle edge cases
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const finalOffset = Math.max(0, Math.min(offset, maxScroll));

            window.scrollTo({
                top: finalOffset,
                behavior: 'smooth'
            });
        }
    }, []);

    return (
        <div className="relative font-sans cards-view">
            {/* Main timeline */}
            <section
                ref={timelineRef}
                className="grid grid-cols-[84px_1fr]  mb-16 relative"
            >
                {/* Left column: Timeline spine */}
                <div ref={spineRef} className="sticky top-0 h-screen">
                    {/* Timeline container */}
                    <div className="relative h-full" style={{ minHeight: '1200px' }}>
                        {/* Vertical line */}
                        <div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-white/30" 
                            style={{ height: '100%' }}
                        />
                        
                        {/* Moving dot */}
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg transition-all duration-300"
                            style={{
                                top: `${(() => {
                                    if (!currentEvent) return 60;
                                    const currentDate = new Date(
                                        currentEvent.start_date.year,
                                        currentEvent.start_date.month - 1,
                                        currentEvent.start_date.day
                                    );
                                    const startDate = new Date(2015, 0, 1);
                                    const endDate = new Date(2025, 11, 31);
                                    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
                                    const daysPassed = (currentDate - startDate) / (1000 * 60 * 60 * 24);
                                    const progress = daysPassed / totalDays;
                                    
                                    const usableHeight = 1200 - 120;
                                    return 60 + (progress * usableHeight);
                                })()}px`,
                                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                            }}
                        />

                        {/* Year markers - update positioning */}
                        {(() => {
                            const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
                            const startDate = new Date(2015, 0, 1);
                            const endDate = new Date(2025, 11, 31);
                            const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
                            
                            const totalSpacing = 1200;
                            const topPadding = 60;
                            const bottomPadding = 60;
                            const usableHeight = totalSpacing - topPadding - bottomPadding;
                            
                            return years.map(year => {
                                const yearDate = new Date(year, 0, 1);
                                const daysPassed = (yearDate - startDate) / (1000 * 60 * 60 * 24);
                                const progress = daysPassed / totalDays;
                                const position = topPadding + (progress * usableHeight);
                                
                                return (
                                    <div
                                        key={`year-${year}`}
                                        className="absolute left-1/2 transform -translate-x-full pr-4 text-right"
                                        style={{
                                            top: `${position}px`,
                                            transform: 'translate(-100%, -50%)'
                                        }}
                                    >
                                        <span className="text-xl font-medium whitespace-nowrap text-white/90 year-glow">
                                            {year}
                                        </span>
                                    </div>
                                );
                            });
                        })()}

                        {/* Month markers - update positioning */}
                        {(() => {
                            const startDate = new Date(2015, 0, 1);
                            const endDate = new Date(2025, 11, 31);
                            const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
                            const markers = [];
                            let currentDate = new Date(startDate);

                            const totalSpacing = 1200;
                            const topPadding = 60;
                            const bottomPadding = 60;
                            const usableHeight = totalSpacing - topPadding - bottomPadding;

                            while (currentDate <= endDate) {
                                const isYearStart = currentDate.getMonth() === 0;

                                if (!isYearStart) {
                                    const daysPassed = (currentDate - startDate) / (1000 * 60 * 60 * 24);
                                    const progress = daysPassed / totalDays;
                                    const position = topPadding + (progress * usableHeight);
                                    
                                    markers.push(
                                        <div
                                            key={currentDate.toISOString()}
                                            className="absolute left-1/2 transform -translate-x-full pr-4 text-right"
                                            style={{
                                                top: `${position}px`,
                                                transform: 'translate(-100%, -50%)'
                                            }}
                                        >
                                            <span className="text-sm font-medium whitespace-nowrap text-white/40">
                                                {currentDate.toLocaleDateString('en-US', { month: 'short' })}
                                            </span>
                                        </div>
                                    );
                                }

                                // Advance by 3 months instead of 2 for more spacing
                                currentDate.setMonth(currentDate.getMonth() + 3);
                            }

                            return markers;
                        })()}
                    </div>
                </div>

                {/* Right column: Event cards */}
                <div className="space-y-8 py-12">
                    {filteredEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`event-card p-6 ${
                                index === activeEventIndex ? 'active' : ''
                            }`}
                            onMouseEnter={() => setHoveredEvent(event)}
                            onMouseLeave={() => setHoveredEvent(null)}
                            onClick={() => {
                                setActiveEventIndex(index);
                                scrollToEvent(index);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="text-sm text-white/60 font-medium tracking-wide">
                                {`${event.start_date.year}-${String(event.start_date.month).padStart(2, '0')}-${String(event.start_date.day).padStart(2, '0')}`}
                            </div>
                            <h3 className="font-serif text-2xl font-normal text-white leading-snug mt-2">
                                {event.text.headline}
                            </h3>
                            <div className="text-xs font-sans mt-1 text-white/40">
                                {event.category}
                            </div>
                            <div
                                className="text-white/80 text-base leading-relaxed mt-3"
                                dangerouslySetInnerHTML={{ __html: event.text.text }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
});

const EventCard = React.memo(function EventCard({
    event,
    position,
    row,
    totalRows,
    isHovered,
    onHover,
    rowHeight
}) {
    const baseOpacity = (Math.min(event.importance, 3) / 3) * 0.4 - 0.2;
    const contentRef = useRef(null);
    const expandedContentRef = useRef(null);
    const [width, setWidth] = useState(MIN_CARD_WIDTH);
    const [expandedHeight, setExpandedHeight] = useState(MIN_EXPANDED_HEIGHT);

    // Reset width when event changes
    useEffect(() => {
        setWidth(MIN_CARD_WIDTH);
    }, [event.id]);

    useLayoutEffect(() => {
        let mounted = true;
        if (contentRef.current && mounted) {
            const contentWidth = contentRef.current.offsetWidth;
            setWidth(Math.max(MIN_CARD_WIDTH, contentWidth + 40));
        }
        return () => {
            mounted = false;
        };
    }, [event.text.headline, event.id]);

    useEffect(() => {
        if (isHovered && expandedContentRef.current) {
            const baseHeight = contentRef.current.offsetHeight;
            const expandedContent = expandedContentRef.current.scrollHeight;
            const totalHeight = baseHeight + expandedContent + 32;
            setExpandedHeight(Math.max(MIN_EXPANDED_HEIGHT, totalHeight));
        }
    }, [isHovered]);

    const topPos = (row * rowHeight) + TIME_MARKER_HEIGHT + (ROW_GAP * row);

    return (
        <motion.div
            className="absolute"
            style={{
                left: `${position - (width / 2)}px`,
                top: `${topPos}px`,
                width: `${width}px`,
                height: isHovered ? `${expandedHeight}px` : `${MIN_CARD_HEIGHT}px`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                        : `rgba(255, 255, 255, ${baseOpacity})`,
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
                <div className="relative z-10" ref={contentRef}>
                    <h3
                        className={`
                            font-serif leading-snug mb-1 text-lg
                            ${isHovered ? 'text-white' : 'text-white/90'}
                        `}
                    >
                        {event.text.headline}
                    </h3>
                    <div className="text-sm font-sans text-white/60 font-medium">
                        {`${String(event.start_date.month).padStart(2, '0')}/${String(event.start_date.day).padStart(2, '0')}/${event.start_date.year}`}
                    </div>
                    <div className={`text-xs font-sans mt-1
                        ${isHovered ? 'text-gray/50' : 'text-white/0'}`}>
                        {event.category}
                    </div>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                ref={expandedContentRef}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-sm font-sans text-white/80 mt-1 overflow-hidden"
                                dangerouslySetInnerHTML={{ __html: event.text.text }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
});

/* 
  Use React.memo on TimeMarker for the same reason.
*/
const TimeMarker = React.memo(function TimeMarker({ date, position }) {
    return (
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
});

const YearMarker = React.memo(function YearMarker({ year, position }) {
    return (
        <div
            className="absolute -bottom-14 select-none pointer-events-none z-0"
            style={{ left: `${position}px` }}
        >
            <div className="relative">
                <div
                    className="
                        absolute text-xl font-sans text-white/60 font-medium
                        whitespace-nowrap transform -translate-x-1/2
                        year-glow
                    "
                >
                    {year}
                </div>
                <div />
            </div>
        </div>
    );
});

const TickMarker = React.memo(function TickMarker({ position, isYearTick, hasEvent }) {
    return (
        <div
            className="absolute select-none pointer-events-none z-0 -bottom-8"
            style={{ left: `${position}px` }}
        >
            <div className="relative">
                <div
                    className={`
                        absolute transform -translate-x-1/2
                        ${isYearTick
                            ? 'border-l h-6 border-white/40'
                            : 'border-l h-3 border-white/20'
                        }
                    `}
                />
                {hasEvent && (
                    <div
                        className="absolute w-[6px] h-[6px] bg-white/60 rounded-full -bottom-2"
                        style={{
                            left: '-3px',
                        }}
                    />
                )}
            </div>
        </div>
    );
});

export default function Timeline() {
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [zoomIndex, setZoomIndex] = useState(3);
    const [viewMode, setViewMode] = useState('timeline');
    const [isMobile, setIsMobile] = useState(false);
    const pixelsPerDay = ZOOM_LEVELS[zoomIndex];
    const ROW_COUNT = 5;
    const [activeCategories, setActiveCategories] = useState(
        Object.values(CATEGORIES).reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
    );

    // Check for mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Set initial view mode based on device
    useEffect(() => {
        setViewMode(isMobile ? 'cards' : 'timeline');
    }, [isMobile]);

    const toggleCategory = (category) => {
        setActiveCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
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

    // Sort events just once and store
    const events = useMemo(() => {
        return [...TIMELINE_DATA.events].sort((a, b) => {
            const dateA = new Date(a.start_date.year, a.start_date.month - 1, a.start_date.day);
            const dateB = new Date(b.start_date.year, b.start_date.month - 1, b.start_date.day);
            return dateA - dateB;
        });
    }, []);

    // Filter + position events
    const positionedEvents = useMemo(() => {
        const startDate = new Date(2015, 1, 1); // Add this line
        const filteredEvents = events.filter((event) => activeCategories[event.category]);
        const rows = Array(ROW_COUNT).fill().map(() => []);

        return filteredEvents.map((event) => {
            // Create a unique identifier for each event
            const eventId = `${event.start_date.year}-${event.start_date.month}-${event.start_date.day}-${event.text.headline}`;

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
                id: eventId,
                position,
                row: bestRow,
            };
        });
    }, [events, pixelsPerDay, activeCategories]);


    // Time markers (every 2 months)
    const timeMarkers = useMemo(() => {
        const startDate = new Date(2015, 1, 1);
        const endDate = new Date(2025, 2, 31);
        const markers = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            markers.push({
                date: new Date(currentDate),
                position: ((currentDate - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay,
            });
            currentDate.setMonth(currentDate.getMonth() + 2);
        }

        return markers;
    }, [pixelsPerDay]);

    // Year markers (center of each year)
    const yearMarkers = useMemo(() => {
        const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
        const startDate = new Date(2015, 1, 1);

        return years.map((yr) => {
            const yearStart = new Date(yr, 0, 1);
            const nextYearStart = new Date(yr, 0, 1);
            // midpoint of the year
            const midYearTime = (yearStart.getTime() + nextYearStart.getTime()) / 2;
            const midYearDate = new Date(midYearTime);

            return {
                year: yr,
                position: ((midYearDate - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay,
            };
        });
    }, [pixelsPerDay]);

    const tickMarkers = useMemo(() => {
        const startDate = new Date(2015, 1, 1);
        const endDate = new Date(2025, 2, 31);
        const ticks = [];

        // Create a Set of all event dates for quick lookup
        const eventDates = new Set(events.map(event =>
            new Date(event.start_date.year, event.start_date.month - 1, event.start_date.day).toISOString().split('T')[0]
        ));

        // 1) Add small ticks every 2 days
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const dateString = currentDate.toISOString().split('T')[0];
            ticks.push({
                position: ((currentDate - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay,
                isYearTick: false,
                hasEvent: eventDates.has(dateString)
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // 2) Add big ticks for Jan 1 each year
        for (let year = 2022; year <= 2025; year++) {
            const janFirst = new Date(year, 0, 1);
            if (janFirst >= startDate && janFirst <= endDate) {
                const dateString = janFirst.toISOString().split('T')[0];
                ticks.push({
                    position: ((janFirst - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay,
                    isYearTick: true,
                    hasEvent: eventDates.has(dateString)
                });
            }
        }

        // 3) Sort them in ascending order of position
        ticks.sort((a, b) => a.position - b.position);

        return ticks;
    }, [pixelsPerDay, events]);

    // Computed total timeline width
    const totalWidth = useMemo(() => {
        const startDate = new Date(2015, 1, 1);
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

    // Handle horizontal scrolling and pinch zoom
    useEffect(() => {
        const container = containerRef.current;
        if (!container || viewMode !== 'timeline') return;

        const handleWheel = (e) => {
            if (e.ctrlKey || e.metaKey) {
                // Zoom functionality
                e.preventDefault();
                if (e.deltaY < 0) {
                    setZoomIndex((prev) => (prev < ZOOM_LEVELS.length - 1 ? prev + 1 : prev));
                } else {
                    setZoomIndex((prev) => (prev > 0 ? prev - 1 : prev));
                }
            } else {
                // Horizontal scrolling
                e.preventDefault();
                container.scrollLeft += e.deltaY;
                
                // For smoother horizontal scrolling, also handle deltaX
                if (e.deltaX !== 0) {
                    container.scrollLeft += e.deltaX;
                }
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [viewMode]);

    return (
        <div className={`relative mx-auto max-w-[1600px] px-4 md:px-12 py-2`}>
            {/* Semi-transparent backdrop */}
            {viewMode === 'timeline' && (
                <div className="absolute inset-0" /> 
                // add these back in for glass effect: rounded-lg shadow-lg glass-effect mx-2 md:mx-4
            )}

            {/* Content wrapper */}
            <div className="relative">
                {/* Controls Section */}
                <div className="py-4">
                    {/* Category and View Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                        {/* Categories section */}
                        <div className="flex gap-2 flex-wrap">
                            {Object.values(CATEGORIES).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => toggleCategory(category)}
                                    className={`
                                        px-3 py-1 rounded-full text-sm font-sans transition-all backdrop-blur-[1px]
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

                        {/* View toggle and zoom controls */}
                        <div className="flex gap-2 font-sans text-sm sm:ml-auto">
                            <button
                                className="bg-white/10 text-white px-4 py-1 my-auto rounded hover:bg-white/20 transition whitespace-nowrap backdrop-blur-[1px]"
                                onClick={() => setViewMode(viewMode === 'timeline' ? 'cards' : 'timeline')}
                            >
                                {viewMode === 'timeline' ? 'Switch to Cards' : 'Switch to Timeline'}
                            </button>
                            {viewMode === 'timeline' && (
                                <>
                                    <button
                                        className="bg-white/10 text-white px-4 py-1 my-auto rounded hover:bg-white/20 transition whitespace-nowrap backdrop-blur-[1px]"
                                        onClick={zoomOut}
                                    >
                                        Zoom Out
                                    </button>
                                    <button
                                        className="bg-white/10 text-white px-4 py-1 my-auto rounded hover:bg-white/20 transition whitespace-nowrap backdrop-blur-[1px]"
                                        onClick={zoomIn}
                                    >
                                        Zoom In
                                    </button>
                                    <span className="text-white/60 ml-2 my-auto">
                                        {`Zoom: ${pixelsPerDay}px/day`}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* View Content */}
                {viewMode === 'timeline' ? (
                    // Timeline View
                    <div
                        ref={containerRef}
                        className="relative mx-auto overflow-x-scroll timeline-container"
                    >
                        {/* Timeline Content */}
                        <div
                            className="relative"
                            style={{
                                width: `${totalWidth}px`,
                                height: `${(ROW_COUNT * (ROW_HEIGHT + 10)) + TIME_MARKER_HEIGHT + ((ROW_COUNT - 1) * (ROW_GAP + 5))}px`,
                                padding: '0 2rem'
                            }}
                        >
                            {/* Time Markers Layer */}
                            <div className="absolute inset-0 z-0">
                                {timeMarkers.map((marker, index) => (
                                    <TimeMarker
                                        key={index}
                                        date={marker.date}
                                        position={marker.position}
                                    />
                                ))}
                                {yearMarkers.map((marker, index) => (
                                    <YearMarker
                                        key={index}
                                        year={marker.year}
                                        position={marker.position}
                                    />
                                ))}
                                {tickMarkers.map((marker, index) => (
                                    <TickMarker
                                        key={index}
                                        position={marker.position}
                                        isYearTick={marker.isYearTick}
                                        hasEvent={marker.hasEvent}
                                    />
                                ))}
                            </div>

                            {/* Events Layer */}
                            <div className="relative z-10">
                                {positionedEvents.map((event, index) => (
                                    <EventCard
                                        key={`${event.id}-${activeCategories[event.category]}`}
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
                ) : (
                    // Cards View
                    <CardsView
                        events={events}
                        activeCategories={activeCategories}
                        hoveredEvent={hoveredEvent}
                        setHoveredEvent={setHoveredEvent}
                    />
                )}
            </div>
        </div>
    );
}
