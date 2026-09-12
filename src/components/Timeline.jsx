// src/components/Timeline.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useLayoutEffect,
} from "react";
import { TIMELINE_DATA, CATEGORIES } from "../data/timelineData";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MIN_CARD_WIDTH = 180;
const ROW_GAP = 10;
const TIME_MARKER_HEIGHT = 40;
const Z_INDEX_BASE = 20;
const Z_INDEX_HOVER = 100;
const MIN_CARD_HEIGHT = 58;
const MIN_EXPANDED_HEIGHT = 120;
const ROW_HEIGHT = 58;
const ZOOM_LEVELS = [1, 2, 3, 4, 6, 8];

// Muted per-category accents (left border + hovered category label).
const CATEGORY_COLORS = {
  [CATEGORIES.MODEL_RELEASE]: "rgba(96, 165, 250, 0.6)",
  [CATEGORIES.RESEARCH]: "rgba(167, 139, 250, 0.6)",
  [CATEGORIES.BUSINESS]: "rgba(52, 211, 153, 0.55)",
  [CATEGORIES.CULTURE]: "rgba(251, 191, 36, 0.55)",
  [CATEGORIES.POLICY]: "rgba(244, 114, 182, 0.55)",
};

function formatEventDate(startDate, language) {
  const date = new Date(startDate.year, startDate.month - 1, startDate.day);
  return date.toLocaleDateString(language === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const BASE_ROW_COUNT_CARDS = 5;
const BASE_TIMELINE_ROWS = 6;
const MIN_ROW_COUNT = 4;
const MAX_ROW_COUNT = 16;

const MAX_CARD_WIDTH = 260;
const CARD_H_GAP = 14;
const EXPANDED_CARD_WIDTH = 300;
// Headline ~ Tailwind text-lg (1.125rem) on a 13px root ≈ 14.6px EB Garamond.
const HEADLINE_FONT = '400 14.6px "EB Garamond", "Times New Roman", serif';

// Deterministically estimate a card's rendered width from its headline text so
// row-packing can reserve the correct horizontal space and avoid overlaps.
let _measureCtx = null;
function estimateCardWidth(headlineHTML) {
  const text = headlineHTML.replace(/<[^>]*>/g, "");
  let textWidth = text.length * 8; // fallback when canvas/fonts are unavailable
  if (typeof document !== "undefined") {
    if (!_measureCtx) {
      _measureCtx = document.createElement("canvas").getContext("2d");
    }
    _measureCtx.font = HEADLINE_FONT;
    textWidth = _measureCtx.measureText(text).width;
  }
  // Add room for card padding, content padding, and the external-link icon.
  const w = Math.ceil(textWidth) + 44;
  return Math.max(MIN_CARD_WIDTH, Math.min(MAX_CARD_WIDTH, w));
}

// Cards view components
const CardsView = React.memo(function CardsView({ events, activeCategories }) {
  const timelineRef = useRef(null);
  const { i18n, t } = useTranslation();
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [spineOffset, setSpineOffset] = useState(0);
  const [backgroundProgress, setBackgroundProgress] = useState(0);

  const filteredEvents = useMemo(
    () => events.filter((event) => activeCategories[event.category]),
    [events, activeCategories]
  );
  const currentEvent = filteredEvents[activeEventIndex];

  // Track which card is closest to the viewport center while scrolling.
  // getBoundingClientRect() is viewport-relative (scrollY cancels out), so the
  // listener can be installed a single time for the component's lifetime.
  useEffect(() => {
    let scrollTimeout;

    const updateActiveCard = () => {
      if (!timelineRef.current) return;

      const cards = timelineRef.current.getElementsByClassName("event-card");
      const viewportMiddle = window.innerHeight / 2;

      let closestCard = 0;
      let minDistance = Infinity;
      Array.from(cards).forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(cardMiddle - viewportMiddle);
        if (distance < minDistance) {
          minDistance = distance;
          closestCard = index;
        }
      });

      setActiveEventIndex(closestCard);
    };

    const handleScroll = () => {
      // Debounce until the scroll settles.
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveCard, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveCard();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Position the spine/background from the active event. This depends only on
  // the event's date and the viewport height (not scroll position), so it runs
  // when the active event changes or on resize.
  useEffect(() => {
    if (!currentEvent) return;

    const updateSpinePosition = () => {
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

      setBackgroundProgress(Math.max(0, Math.min(1, progress)));

      const viewportHeight = window.innerHeight;
      const spineHeight = 1200;
      const dotPosition = 60 + progress * (spineHeight - 120);

      if (dotPosition > viewportHeight - 180) {
        const overflow = dotPosition - (viewportHeight - 180);
        setSpineOffset(-Math.min(overflow, spineHeight - viewportHeight));
      } else {
        setSpineOffset(0);
      }
    };

    updateSpinePosition();
    window.addEventListener("resize", updateSpinePosition);
    return () => window.removeEventListener("resize", updateSpinePosition);
  }, [currentEvent]);

  return (
    <div
      className="relative font-sans cards-view"
      data-scroll-progress={backgroundProgress}
    >
      {/* Main timeline */}
      <section
        ref={timelineRef}
        className="grid grid-cols-[70px_1fr]  mb-10 relative"
      >
        {/* Left column: Timeline spine */}
        <div className="sticky top-0 pl-6 h-screen">
          {/* Timeline container */}
          <div className="relative h-full">
            <div
              className="relative"
              style={{
                height: "1200px",
                transform: `translateY(${spineOffset}px)`,
                transition: "transform 0.2s ease-out",
                willChange: "transform",
              }}
            >
              {/* Vertical line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-white/30"
                style={{ height: "100%" }}
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
                    const totalDays =
                      (endDate - startDate) / (1000 * 60 * 60 * 24);
                    const daysPassed =
                      (currentDate - startDate) / (1000 * 60 * 60 * 24);
                    const progress = daysPassed / totalDays;

                    const usableHeight = 1200 - 120;
                    return 60 + progress * usableHeight;
                  })()}px`,
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              />

              {/* Year markers - update positioning */}
              {(() => {
                const years = [
                  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
                  2025,
                ];
                const startDate = new Date(2015, 0, 1);
                const endDate = new Date(2025, 11, 31);
                const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

                const totalSpacing = 1200;
                const topPadding = 60;
                const bottomPadding = 60;
                const usableHeight = totalSpacing - topPadding - bottomPadding;

                return years.map((year) => {
                  const yearDate = new Date(year, 0, 1);
                  const daysPassed =
                    (yearDate - startDate) / (1000 * 60 * 60 * 24);
                  const progress = daysPassed / totalDays;
                  const position = topPadding + progress * usableHeight;

                  return (
                    <div
                      key={`year-${year}`}
                      className="absolute left-1/2 transform -translate-x-full pr-4 text-right"
                      style={{
                        top: `${position}px`,
                        transform: "translate(-100%, -50%)",
                      }}
                    >
                      <span className="text-xl font-medium whitespace-nowrap text-white/80">
                        {year}
                      </span>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>

        <div className="space-y-8 py-12">
          {filteredEvents.map((event, index) => {
            // Use the Chinese version if the current language is 'zh'
            const localizedContent =
              i18n.language === "zh" && event.chinese
                ? event.chinese
                : event.text;

            return (
              <div
                key={index}
                className={`event-card p-6 ${
                  index === activeEventIndex ? "active" : ""
                }`}
              >
                <div className="text-sm text-white/50 font-sans tracking-wide">
                  {formatEventDate(event.start_date, i18n.language)}
                </div>
                <div
                  className="font-serif text-2xl font-normal text-white leading-snug mt-2"
                  // Use localized headline
                  dangerouslySetInnerHTML={{
                    __html: localizedContent.headline,
                  }}
                />
                <div
                  className="text-xs font-sans mt-1"
                  style={{ color: CATEGORY_COLORS[event.category] }}
                >
                  {t("categories." + event.category)}
                </div>
                <div
                  className="text-white/80 text-base leading-relaxed mt-3"
                  // Use localized text
                  dangerouslySetInnerHTML={{ __html: localizedContent.text }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
});

const EventCard = React.memo(function EventCard({
  event,
  position,
  row,
  isHovered,
  onHover,
  rowHeight,
  cardWidth,
  setActiveEventPositions,
}) {
  const { i18n, t } = useTranslation();
  const localizedContent =
    i18n.language === "zh" && event.chinese ? event.chinese : event.text;
  // Flat fill whose brightness scales with importance (~0.06 to ~0.11 alpha).
  const baseAlpha = 0.03 + (Math.min(event.importance, 3) / 3) * 0.08;
  const accentColor =
    CATEGORY_COLORS[event.category] || "rgba(255,255,255,0.3)";
  const contentRef = useRef(null);
  const [expandedHeight, setExpandedHeight] = useState(MIN_EXPANDED_HEIGHT);

  useEffect(() => {
    if (isHovered) {
      setActiveEventPositions(new Set([position]));
    }
  }, [isHovered, position]);

  // Measure the fully-expanded content height *before paint* so the card
  // animates straight to its correct size (no second "correction" animation).
  // Width snaps to its expanded value (it's not transitioned), so this
  // measurement reflects how the description actually wraps when open.
  useLayoutEffect(() => {
    if (isHovered && contentRef.current) {
      const full = contentRef.current.scrollHeight;
      setExpandedHeight(Math.max(MIN_EXPANDED_HEIGHT, full + 20));
    }
  }, [isHovered, localizedContent, i18n.language]);

  const expandedWidth = Math.max(cardWidth, EXPANDED_CARD_WIDTH);
  const topPos = row * rowHeight + TIME_MARKER_HEIGHT + ROW_GAP * row;

  return (
    <motion.div
      className="event-card absolute"
      style={{
        left: `${position - 20}px`,
        top: `${topPos}px`,
        // Width snaps (no transition) so the height measurement above reflects
        // the open layout; only height/shadow animate, keeping it snappy.
        width: isHovered ? `${expandedWidth}px` : `${cardWidth}px`,
        height: isHovered ? `${expandedHeight}px` : `${MIN_CARD_HEIGHT}px`,
        transition: "height 0.2s ease, box-shadow 0.2s ease",
        zIndex: isHovered ? Z_INDEX_HOVER : Z_INDEX_BASE,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      tabIndex={0}
      onMouseEnter={() => {
        onHover(event);
        setActiveEventPositions(new Set([position]));
      }}
      onMouseLeave={() => {
        onHover(null);
        setActiveEventPositions(new Set());
      }}
      onFocus={() => {
        onHover(event);
        setActiveEventPositions(new Set([position]));
      }}
      onBlur={() => {
        onHover(null);
        setActiveEventPositions(new Set());
      }}
    >
      <div
        className={`
                    h-full rounded-lg border p-2 overflow-hidden
                    ${isHovered ? "border-white/25" : "border-white/[0.07]"}
                `}
        style={{
          backgroundColor: isHovered
            ? "rgba(28, 28, 38, 0.97)"
            : `rgba(255, 255, 255, ${baseAlpha})`,
          boxShadow: isHovered
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 12px 28px -6px rgba(0, 0, 0, 0.55)"
            : "none",
          transition:
            "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <div className="relative z-10" ref={contentRef}>
          <div
            className={`
                            font-serif leading-snug mb-0.5 text-lg
                            ${isHovered ? "text-white" : "text-white/90"}
                        `}
            dangerouslySetInnerHTML={{ __html: localizedContent.headline }}
          />
          <div className="flex items-center gap-1.5 text-xs font-sans text-white/45">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            {formatEventDate(event.start_date, i18n.language)}
          </div>
          {isHovered && (
            <>
              <div
                className="text-xs font-sans mt-1.5"
                style={{ color: accentColor }}
              >
                {t("categories." + event.category)}
              </div>
              <div
                className="text-sm font-sans text-white/80 mt-1"
                dangerouslySetInnerHTML={{ __html: localizedContent.text }}
              />
            </>
          )}
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
          {`${date.toLocaleDateString("en-US", { month: "short" })} '${date
            .getFullYear()
            .toString()
            .slice(2)}`}
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
                        absolute text-xl font-sans text-white/50 font-medium
                        whitespace-nowrap transform -translate-x-1/2
                    "
        >
          {year}
        </div>
        <div />
      </div>
    </div>
  );
});

const TickMarker = React.memo(function TickMarker({
  position,
  isYearTick,
  hasEvent,
  isActive,
  rowHeights,
}) {
  const lineHeight = rowHeights ? rowHeights : "500px";

  return (
    <div
      className="absolute select-none pointer-events-none z-0 -bottom-8"
      style={{ left: `${position}px` }}
    >
      <div className="relative">
        <div
          className={`
                        absolute left-0
                        ${
                          isYearTick
                            ? "border-l h-6 border-white/40"
                            : "border-l h-3 border-white/20"
                        }
                    `}
        />
        {hasEvent && (
          <>
            <div
              className={`
                                absolute w-[2px] transition-opacity duration-300
                                ${
                                  isActive
                                    ? "bg-gradient-to-b from-white/10 via-white/20 to-white/20 opacity-100"
                                    : "bg-gradient-to-b from-transparent via-white/10 to-white/20 opacity-30"
                                }
                            `}
              style={{
                height: lineHeight,
                bottom: "4px",
                left: "3px",
                transform: "translateX(-50%)",
              }}
            />
            <div
              className={`
                                absolute w-[6px] h-[6px] bg-white/60 rounded-full -bottom-2
                                transition-all duration-300
                                ${
                                  isActive
                                    ? "bg-white scale-150"
                                    : "bg-white/60 scale-100"
                                }
                            `}
              style={{ left: "0px" }}
            />
          </>
        )}
      </div>
    </div>
  );
});

export default function Timeline() {
  const { t, i18n } = useTranslation();

  // Recompute card widths once web fonts load so packing matches the rendered
  // text metrics (avoids overlap from fallback-font estimates on first paint).
  const [fontsReady, setFontsReady] = useState(false);
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => setFontsReady(true));
    }
  }, []);

  const [activeCategories, setActiveCategories] = useState(() => {
    const categoriesRecord = {};
    Object.values(CATEGORIES).forEach((cat) => {
      categoriesRecord[cat] = true;
    });
    return categoriesRecord;
  });

  const [hoveredEvent, setHoveredEvent] = useState(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(4);
  const [viewMode, setViewMode] = useState("timeline");
  const [isMobile, setIsMobile] = useState(false);
  const pixelsPerDay = ZOOM_LEVELS[zoomIndex];
  const [activeEventPositions, setActiveEventPositions] = useState(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setViewMode(isMobile ? "cards" : "timeline");
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
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const events = useMemo(() => {
    return [...TIMELINE_DATA.events]
      .sort((a, b) => {
        const dateA = new Date(
          a.start_date.year,
          a.start_date.month - 1,
          a.start_date.day
        );
        const dateB = new Date(
          b.start_date.year,
          b.start_date.month - 1,
          b.start_date.day
        );
        return dateA - dateB;
      })
      .map((event, index) => ({
        ...event,
        // The source data has no stable id; derive one so React keys and
        // per-card effects (width/height measurement) are unique and stable.
        id: event.id ?? `event-${index}`,
      }));
  }, []);

  const baseRowCount = useMemo(() => {
    if (viewMode === "cards") {
      return BASE_ROW_COUNT_CARDS;
    }
    const dynamic = BASE_TIMELINE_ROWS + (3 - zoomIndex) * 2;
    return Math.min(MAX_ROW_COUNT, Math.max(dynamic, MIN_ROW_COUNT));
  }, [viewMode, zoomIndex]);

  const positionedEvents = useMemo(() => {
    const startDate = new Date(2015, 1, 1);
    const filteredEvents = events.filter(
      (event) => activeCategories[event.category]
    );

    // Rightmost occupied X per row (cards render at `left: position - 20`).
    // Starts with the baseline rows and grows on demand up to MAX_ROW_COUNT so
    // dense clusters get their own rows instead of overlapping.
    const rowRightEdges = Array(baseRowCount).fill(-Infinity);

    // `events` is already sorted ascending by date and `filter` preserves order.
    return filteredEvents.map((event) => {
      const date = new Date(
        event.start_date.year,
        event.start_date.month - 1,
        event.start_date.day
      );
      const daysSinceStart = (date - startDate) / (1000 * 60 * 60 * 24);
      const position = daysSinceStart * pixelsPerDay;
      const leftEdge = position - 20;

      const headline = (
        i18n.language === "zh" && event.chinese ? event.chinese : event.text
      ).headline;
      const width = estimateCardWidth(headline);

      // Prefer the "most behind" row that this card fully clears (keeps rows
      // balanced and reuses freed space).
      let chosenRow = -1;
      let bestRightEdge = Infinity;
      for (let i = 0; i < rowRightEdges.length; i++) {
        if (rowRightEdges[i] <= leftEdge && rowRightEdges[i] < bestRightEdge) {
          bestRightEdge = rowRightEdges[i];
          chosenRow = i;
        }
      }
      if (chosenRow === -1) {
        if (rowRightEdges.length < MAX_ROW_COUNT) {
          // No clear row: add one rather than overlapping an occupied card.
          chosenRow = rowRightEdges.length;
          rowRightEdges.push(-Infinity);
        } else {
          // At the row cap: fall back to the row with the smallest right edge.
          let minRowIndex = 0;
          for (let i = 1; i < rowRightEdges.length; i++) {
            if (rowRightEdges[i] < rowRightEdges[minRowIndex]) {
              minRowIndex = i;
            }
          }
          chosenRow = minRowIndex;
        }
      }

      rowRightEdges[chosenRow] = leftEdge + width + CARD_H_GAP;

      return {
        ...event,
        position,
        row: chosenRow,
        width,
      };
    });
  }, [
    events,
    pixelsPerDay,
    activeCategories,
    baseRowCount,
    i18n.language,
    fontsReady,
  ]);

  // Effective number of rows actually used (>= baseline). Drives the timeline
  // height and tick line lengths.
  const rowCount = useMemo(() => {
    let maxRow = baseRowCount - 1;
    for (const e of positionedEvents) {
      if (e.row > maxRow) maxRow = e.row;
    }
    return maxRow + 1;
  }, [positionedEvents, baseRowCount]);

  const timeMarkers = useMemo(() => {
    const startDate = new Date(2015, 1, 1);
    const endDate = new Date(2025, 2, 31);
    const markers = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      markers.push({
        date: new Date(currentDate),
        position:
          ((currentDate - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay,
      });
      currentDate.setMonth(currentDate.getMonth() + 2);
    }

    return markers;
  }, [pixelsPerDay]);

  const yearMarkers = useMemo(() => {
    const years = [
      2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
    ];
    const startDate = new Date(2015, 1, 1);

    return years.map((yr) => {
      const yearStart = new Date(yr, 0, 1);
      const nextYearStart = new Date(yr, 0, 1);
      const midYearTime = (yearStart.getTime() + nextYearStart.getTime()) / 2;
      const midYearDate = new Date(midYearTime);

      return {
        year: yr,
        position:
          ((midYearDate - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay,
      };
    });
  }, [pixelsPerDay]);

  const tickMarkers = useMemo(() => {
    const startDate = new Date(2015, 1, 1);
    const endDate = new Date(2025, 2, 31);
    const ticks = [];

    // Create a map of positions to row heights
    const positionToRowHeight = {};
    const totalHeight =
      rowCount * (ROW_HEIGHT + ROW_GAP) + TIME_MARKER_HEIGHT + 70;

    positionedEvents.forEach((event) => {
      const rowMiddle =
        event.row * (ROW_HEIGHT + ROW_GAP) +
        ROW_HEIGHT / 2 +
        TIME_MARKER_HEIGHT;
      // Subtract from total height to get the correct line height
      positionToRowHeight[event.position] = `${totalHeight - rowMiddle}px`;
    });

    const eventDates = new Set(
      events.map(
        (event) =>
          new Date(
            event.start_date.year,
            event.start_date.month - 1,
            event.start_date.day
          )
            .toISOString()
            .split("T")[0]
      )
    );

    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split("T")[0];
      const position =
        ((currentDate - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay;

      ticks.push({
        position,
        isYearTick: false,
        hasEvent: eventDates.has(dateString),
        rowHeight: positionToRowHeight[position],
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    for (let year = 2022; year <= 2025; year++) {
      const janFirst = new Date(year, 0, 1);
      if (janFirst >= startDate && janFirst <= endDate) {
        const dateString = janFirst.toISOString().split("T")[0];
        const position =
          ((janFirst - startDate) / (1000 * 60 * 60 * 24)) * pixelsPerDay;
        ticks.push({
          position,
          isYearTick: true,
          hasEvent: eventDates.has(dateString),
          rowHeight: positionToRowHeight[position],
        });
      }
    }

    ticks.sort((a, b) => a.position - b.position);

    return ticks;
    // `activeEventPositions` is intentionally excluded: it changes on every
    // hover and would otherwise rebuild ~3.6k tick objects each time. The
    // active state is applied at render time instead.
  }, [pixelsPerDay, events, positionedEvents, rowCount]);

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container || viewMode !== "timeline") return;

    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
          setZoomIndex((prev) =>
            prev < ZOOM_LEVELS.length - 1 ? prev + 1 : prev
          );
        } else {
          setZoomIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
      } else {
        e.preventDefault();
        container.scrollLeft += e.deltaY;

        if (e.deltaX !== 0) {
          container.scrollLeft += e.deltaX;
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [viewMode]);

  // Set the initial scroll position once the timeline container is mounted.
  // The container only exists while viewMode === "timeline", so depending on
  // viewMode re-runs this effect when it mounts (refs are attached before
  // effects run in the same commit).
  useEffect(() => {
    if (viewMode !== "timeline") return;

    // Calculate position for 2022
    const startDate = new Date(2015, 1, 1);
    const targetDate = new Date(2022, 1, 1);
    const daysSinceStart = (targetDate - startDate) / (1000 * 60 * 60 * 24);
    const scrollPosition = daysSinceStart * pixelsPerDay;

    // Defer slightly so the container has its final layout. By the time this
    // fires the container may have unmounted (e.g. viewMode flipped to "cards"
    // on a narrow viewport), so re-check the ref and cancel on cleanup.
    const timeoutId = setTimeout(() => {
      const container = containerRef.current;
      if (container) {
        container.scrollLeft = scrollPosition;
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [viewMode, pixelsPerDay]);

  // For cards view, add initial scroll position
  useEffect(() => {
    if (viewMode === "cards") {
      // Find the first event from 2022
      const events2022Index = events.findIndex(
        (event) => Number(event.start_date.year) >= 2022
      );
      if (events2022Index !== -1) {
        // Calculate approximate scroll position (assuming each card is about 300px tall)
        const scrollPosition = events2022Index * 300;
        window.scrollTo({
          top: scrollPosition,
          behavior: "instant",
        });
      }
    }
  }, [viewMode, events]);

  // Add mouse drag handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container || viewMode !== "timeline") return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      container.style.cursor = "grab";
      container.style.userSelect = "auto";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      container.style.cursor = "grab";
      container.style.userSelect = "auto";
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [viewMode, isDragging, startX, scrollLeft]);

  return (
    <div className={`relative mx-auto max-w-[2000px] px-4 md:px-12 py-2`}>
      {viewMode === "timeline" && <div className="absolute inset-0" />}

      <div className="relative">
        <div className="py-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
            <div className="flex gap-2 flex-wrap">
              {Object.values(CATEGORIES).map((categoryKey) => {
                const isActive = activeCategories[categoryKey];
                return (
                  <button
                    key={categoryKey}
                    onClick={() => toggleCategory(categoryKey)}
                    aria-pressed={isActive}
                    className={`
                                        flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-sans border transition-all
                                        focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/50
                                        ${
                                          isActive
                                            ? "border-white/15 bg-white/10 text-white/90"
                                            : "border-white/[0.07] bg-transparent text-white/35 hover:text-white/60"
                                        }
                                    `}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: CATEGORY_COLORS[categoryKey],
                        opacity: isActive ? 1 : 0.35,
                      }}
                    />
                    {t("categories." + categoryKey)}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-2 font-sans text-sm sm:ml-auto">
              <button
                className="bg-white/10 text-white/90 px-4 py-1 my-auto rounded hover:bg-white/20 transition whitespace-nowrap focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/50"
                onClick={() =>
                  setViewMode(viewMode === "timeline" ? "cards" : "timeline")
                }
              >
                {viewMode === "timeline"
                  ? t("switchToCards")
                  : t("switchToTimeline")}
              </button>
              {viewMode === "timeline" && (
                <>
                  <button
                    className="bg-white/10 text-white/90 w-8 py-1 my-auto rounded hover:bg-white/20 transition disabled:opacity-30 disabled:hover:bg-white/10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/50"
                    onClick={zoomOut}
                    disabled={zoomIndex === 0}
                    aria-label={t("zoomOut")}
                    title={t("zoomOut")}
                  >
                    &minus;
                  </button>
                  <button
                    className="bg-white/10 text-white/90 w-8 py-1 my-auto rounded hover:bg-white/20 transition disabled:opacity-30 disabled:hover:bg-white/10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/50"
                    onClick={zoomIn}
                    disabled={zoomIndex === ZOOM_LEVELS.length - 1}
                    aria-label={t("zoomIn")}
                    title={t("zoomIn")}
                  >
                    +
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {viewMode === "timeline" ? (
          <div
            ref={containerRef}
            className="relative mx-auto overflow-x-scroll timeline-container"
            style={{ cursor: "grab" }}
          >
            <div
              className="relative"
              style={{
                width: `${totalWidth}px`,
                height: `${
                  rowCount * (ROW_HEIGHT + ROW_GAP) + TIME_MARKER_HEIGHT + 30
                }px`,
                padding: "0 2rem",
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
                    isActive={activeEventPositions.has(marker.position)}
                    rowHeights={marker.rowHeight}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {positionedEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    position={event.position}
                    row={event.row}
                    cardWidth={event.width}
                    isHovered={hoveredEvent === event}
                    onHover={setHoveredEvent}
                    rowHeight={ROW_HEIGHT}
                    setActiveEventPositions={setActiveEventPositions}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <CardsView events={events} activeCategories={activeCategories} />
        )}
      </div>
    </div>
  );
}
