// src/components/Timeline.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TIMELINE_DATA } from "../data/timelineData";
import { motion, AnimatePresence } from 'framer-motion';

// Constants
const MIN_CARD_WIDTH = 250;
const ROW_GAP = 0;
const TIME_MARKER_HEIGHT = 40;
const Z_INDEX_BASE = 20;
const Z_INDEX_HOVER = 100;
const MIN_CARD_HEIGHT = 140;
const PIXELS_PER_DAY = 3;

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
                left: `${position}px`,
                top: `${topPos}px`,
                width: `${width}px`,
                height: `${MIN_CARD_HEIGHT}px`,
                zIndex: isHovered ? Z_INDEX_HOVER : Z_INDEX_BASE,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
                scale: 1.02,
                zIndex: Z_INDEX_HOVER,
            }}
            onMouseEnter={() => onHover(event)}
            onMouseLeave={() => onHover(null)}
        >
            <div
                className={`
                    h-full rounded-lg border p-2 sm:p-4 transition-all duration-200
                    ${isHovered ? 'border-white/20 shadow-xl' : 'border-white/5'}
                    ${event.importance >= 2.5 ? 'border-white/30' : ''}
                    ${isHovered ? 'transform translate-y-1' : ''}
                `}
                style={{
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
                    backgroundImage: isHovered
                        ? 'radial-gradient(transparent 1px, rgba(255, 255, 255, 0.08) 1px)'
                        : 'radial-gradient(transparent 1px, rgba(255, 255, 255, 0.05) 1px)',
                    backgroundSize: '4px 4px',
                    WebkitMaskImage: isHovered
                        ? 'none'
                        : 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
                    maskImage: isHovered
                        ? 'none'
                        : 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
                }}
            >
                <div
                    className="absolute inset-0 rounded-lg transition-opacity duration-200"
                    style={{
                        background: `
                            radial-gradient(
                                circle at 50% 50%,
                                rgba(255, 255, 255, ${isHovered ? '0.1' : '0.05'}) 0%,
                                transparent 70%
                            )
                        `,
                        opacity: isHovered ? 1 : 0,
                    }}
                />
                <div className="relative z-10"> {/* Added container for content */}
                    <h3
                        className={`
                            font-serif leading-snug mb-1 pointer-events-none
                            ${event.importance >= 2.5 ? 'text-2xl' : 'text-xl'}
                            ${isHovered ? 'text-white' : 'text-white/90'}
                        `}
                    >
                        {event.text.headline}
                    </h3>
                    <div className="text-sm font-sans text-white/60 font-medium pointer-events-none">
                        {`${event.start_date.year}-${String(event.start_date.month).padStart(2, '0')}-${String(event.start_date.day).padStart(2, '0')}`}
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
    const ROW_COUNT = 4; // Fixed number of rows
    const ROW_HEIGHT = 160; // Fixed height for each row

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
        const startDate = new Date(2022, 10, 1);
        const rows = Array(ROW_COUNT).fill().map(() => []);

        return events.map(event => {
            const date = new Date(
                event.start_date.year,
                event.start_date.month - 1,
                event.start_date.day
            );
            const daysSinceStart = (date - startDate) / (1000 * 60 * 60 * 24);
            const position = daysSinceStart * PIXELS_PER_DAY;

            // Simple row assignment - distribute events evenly
            const bestRow = rows.reduce((minRow, row, index) => {
                return row.length < rows[minRow].length ? index : minRow;
            }, 0);

            rows[bestRow].push({
                position,
                width: MIN_CARD_WIDTH + (event.importance * 40)
            });

            return {
                ...event,
                position,
                row: bestRow
            };
        });
    }, [events]);

    const timeMarkers = useMemo(() => {
        const startDate = new Date(2022, 10, 1);
        const endDate = new Date(2025, 2, 31);
        const markers = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            markers.push({
                date: new Date(currentDate),
                position: ((currentDate - startDate) / (1000 * 60 * 60 * 24)) * PIXELS_PER_DAY
            });
            currentDate.setMonth(currentDate.getMonth() + 2);
        }

        return markers;
    }, []);

    const totalWidth = useMemo(() => {
        const startDate = new Date(2022, 10, 1);
        const endDate = new Date(2025, 2, 31);
        const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
        return totalDays * PIXELS_PER_DAY;
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative mx-auto max-w-[1400px] overflow-x-auto timeline-container"
        >
            <div
                className="relative"
                style={{
                    width: `${totalWidth}px`,
                    height: `${(ROW_COUNT * ROW_HEIGHT) + TIME_MARKER_HEIGHT + ((ROW_COUNT - 1) * ROW_GAP)}px`
                }}
            >
                {/* Time markers */}
                <div className="absolute inset-0 z-0">
                    {timeMarkers.map((marker, index) => (
                        <TimeMarker
                            key={index}
                            date={marker.date}
                            position={marker.position}
                        />
                    ))}
                </div>

                {/* Events */}
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
    );
}