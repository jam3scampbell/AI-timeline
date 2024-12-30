// src/components/Timeline.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TIMELINE_DATA } from "../data/timelineData";
import { motion, AnimatePresence } from 'framer-motion';

// Constants
const MIN_COLUMN_WIDTH = 200;
const COLUMN_GAP = 16;
const TIME_MARKER_WIDTH = 100;
const Z_INDEX_BASE = 20; // Update this constant at the top
const Z_INDEX_HOVER = 100; // Keep this the same
const MIN_CARD_HEIGHT = 80;
const PIXELS_PER_DAY = 1.5;

const EventCard = ({
    event,
    position,
    column,
    totalColumns,
    isHovered,
    onHover,
    containerWidth,
    columnIndex,
    totalInColumn
}) => {
    const height = MIN_CARD_HEIGHT + (event.importance * 40);
    const availableWidth = containerWidth;
    const columnWidth = (availableWidth - (COLUMN_GAP * (totalColumns - 1))) / totalColumns;
    const leftPos = column * (columnWidth + COLUMN_GAP);

    const baseZIndex = Z_INDEX_BASE + (column * totalInColumn) + columnIndex;

    return (
        <motion.div
            className="absolute"
            style={{
                top: `${position}px`,
                left: `${leftPos}px`,
                width: `${columnWidth}px`,
                height: `${height}px`,
                zIndex: isHovered ? Z_INDEX_HOVER : baseZIndex,
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
                <h3
                    className={`
                        font-serif leading-snug mb-1
                        ${event.importance >= 2.5 ? 'text-2xl' : 'text-xl'}
                        ${isHovered ? 'text-white' : 'text-white/90'}
                    `}
                >
                    {event.text.headline}
                </h3>
                <div className="text-sm font-sans text-white/60 font-medium">
                    {`${event.start_date.year}-${String(event.start_date.month).padStart(2, '0')}-${String(event.start_date.day).padStart(2, '0')}`}
                </div>
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm font-sans text-white/80 mt-1 overflow-hidden"
                            dangerouslySetInnerHTML={{ __html: event.text.text }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
const TimeMarker = ({ date, position }) => (
    <div
        className="absolute left-0 w-full select-none pointer-events-none z-0"
        style={{ top: `${position}px` }}
    >
        <div className="relative">
            <div className="absolute left-0 w-[100px] text-right text-sm font-sans text-white/40 font-medium whitespace-nowrap transform -translate-y-1/2 -translate-x-[10px]">
                {`${date.toLocaleDateString('en-US', { month: 'short' })} '${date.getFullYear().toString().slice(2)}`}
            </div>
            <div className="absolute left-[100px] right-0 border-t border-white/10" />
        </div>
    </div>
);

export default function Timeline() {
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

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

    const columnCount = useMemo(() => {
        if (!containerWidth) return 3;
        if (containerWidth < 480) return 2; // For very small phones

        const availableWidth = containerWidth - TIME_MARKER_WIDTH;
        const possibleColumns = Math.floor((availableWidth + COLUMN_GAP) / (MIN_COLUMN_WIDTH + COLUMN_GAP));
        return Math.min(4, Math.max(3, possibleColumns));
    }, [containerWidth]);

    const events = useMemo(() => {
        return [...TIMELINE_DATA.events].sort((a, b) => {
            const dateA = new Date(a.start_date.year, a.start_date.month - 1, a.start_date.day);
            const dateB = new Date(b.start_date.year, b.start_date.month - 1, b.start_date.day);
            return dateA - dateB;
        });
    }, []);

    const positionedEvents = useMemo(() => {
        const startDate = new Date(2022, 10, 1);
        const columns = Array(columnCount).fill().map(() => []);

        return events.map(event => {
            const date = new Date(
                event.start_date.year,
                event.start_date.month - 1,
                event.start_date.day
            );
            const daysSinceStart = (date - startDate) / (1000 * 60 * 60 * 24);
            const position = daysSinceStart * PIXELS_PER_DAY;
            const eventHeight = MIN_CARD_HEIGHT + (event.importance * 40);

            let bestColumn = 0;
            let minConflict = Infinity;

            for (let i = 0; i < columnCount; i++) {
                const conflictScore = columns[i].reduce((score, existingEvent) => {
                    const overlapStart = Math.max(existingEvent.position, position);
                    const overlapEnd = Math.min(
                        existingEvent.position + existingEvent.height,
                        position + eventHeight
                    );

                    if (overlapEnd - overlapStart > 0) {
                        return score + (overlapEnd - overlapStart) *
                            (existingEvent.importance + 1);
                    }
                    return score;
                }, 0);

                const distanceFromOptimal = Math.abs(i - columnCount / 2);
                const totalScore = conflictScore + (distanceFromOptimal * 10);

                if (totalScore < minConflict) {
                    minConflict = totalScore;
                    bestColumn = i;
                }
            }

            columns[bestColumn].push({
                position,
                height: eventHeight,
                importance: event.importance
            });

            return {
                ...event,
                position,
                column: bestColumn,
                columnIndex: columns[bestColumn].length - 1,
                totalInColumn: columns[bestColumn].length
            };
        });
    }, [events, columnCount]);

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

    const totalHeight = useMemo(() => {
        const startDate = new Date(2022, 10, 1);
        const endDate = new Date(2025, 2, 31);
        const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
        return totalDays * PIXELS_PER_DAY;
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative mx-auto max-w-[1400px] pl-2 sm:pl-4 md:pl-8 pl-16"
        >
            <div className="relative" style={{ height: `${totalHeight}px` }}>
                <div className="absolute inset-0 z-0">
                    {timeMarkers.map((marker, index) => (
                        <TimeMarker
                            key={index}
                            date={marker.date}
                            position={marker.position}
                        />
                    ))}
                </div>

                <div className="relative z-10 ml-[100px]">
                    {positionedEvents.map((event, index) => (
                        <EventCard
                            key={index}
                            event={event}
                            position={event.position}
                            column={event.column}
                            totalColumns={columnCount}
                            isHovered={hoveredEvent === event}
                            onHover={setHoveredEvent}
                            containerWidth={
                                containerWidth
                                    ? containerWidth - TIME_MARKER_WIDTH - 32
                                    : 0
                            }
                            columnIndex={event.columnIndex}
                            totalInColumn={event.totalInColumn}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}