import { TIMELINE_DATA } from "./timelineData.js";
import gsap from "gsap";

/**
 * When DOM is loaded, initialize the timeline logic
 */
document.addEventListener("DOMContentLoaded", () => {
    buildTimeline();
    // Listen for window scroll
    window.addEventListener("scroll", onWindowScroll);
    // Also do an initial circle position if the page is pre-scrolled
    onWindowScroll();
});

/**
 * Build the timeline:
 *  - Sort events
 *  - Create an event card for each
 *  - Generate ticks for each season in [minDate..maxDate]
 */
function buildTimeline() {
    const eventsContainer = document.getElementById("events-container");
    const ticksContainer = document.getElementById("ticks-container");
    const { events } = TIMELINE_DATA;

    // Sort events by date
    events.sort((a, b) => toDateObj(a.start_date) - toDateObj(b.start_date));

    // Create a card for EVERY event
    events.forEach((ev) => {
        const card = document.createElement("div");
        card.className = "event-card";

        const { year, month, day } = ev.start_date;
        const dateStr = formatDate(year, month, day);

        card.innerHTML = `
      <div class="event-date">${dateStr}</div>
      <div class="event-title">${ev.text.headline}</div>
      <div class="event-text">${ev.text.text}</div>
    `;

        // Store the date on the card for quick reference
        card.dataset.eventDate = `${year}-${month}-${day}`;
        eventsContainer.appendChild(card);
    });

    // Now build seasonal ticks from earliest -> latest
    const minDate = toDateObj(events[0].start_date);
    const maxDate = toDateObj(events[events.length - 1].start_date);
    const seasonalTicks = generateSeasonalTicks(minDate, maxDate);
    const totalTicks = seasonalTicks.length;

    seasonalTicks.forEach((tickData, i) => {
        const tick = document.createElement("div");
        tick.className = "tick";

        // Evenly space from 0% at top to 100% at bottom
        const topPercent = (i / (totalTicks - 1)) * 100;
        tick.style.top = `${topPercent}%`;

        // Label
        const label = document.createElement("div");
        label.className = "tick-label";
        label.innerText = `${seasonLabel(tickData.seasonIndex)} ${tickData.year}`;

        tick.appendChild(label);
        ticksContainer.appendChild(tick);
    });
}

/**
 * On every window scroll, find which card is near the viewport's vertical center,
 * convert that card's date to a fraction in [minDate..maxDate], move the circle.
 */
function onWindowScroll() {
    const cards = document.querySelectorAll(".event-card");
    if (!cards.length) return;

    // The vertical center of the viewport
    const viewportMid = window.innerHeight / 2;

    let closestCard = null;
    let closestDist = Infinity;

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // midpoint of card relative to top of viewport
        const cardMid = rect.top + rect.height / 2;
        const dist = Math.abs(cardMid - viewportMid);

        if (dist < closestDist) {
            closestDist = dist;
            closestCard = card;
        }
    });

    if (!closestCard) return;

    // parse the date from the card
    const cardDateStr = closestCard.dataset.eventDate; // e.g. "2023-02-17"
    const cardDate = parseYYYYMMDD(cardDateStr);

    // map date to fraction
    const { events } = TIMELINE_DATA;
    const minDate = toDateObj(events[0].start_date);
    const maxDate = toDateObj(events[events.length - 1].start_date);
    const fraction = (cardDate - minDate) / (maxDate - minDate);

    // Place circle
    const ticksContainer = document.getElementById("ticks-container");
    const maxY = ticksContainer.offsetHeight - 24; // circle is 24px tall
    const yVal = fraction * maxY;

    // Animate or set instantly
    gsap.to("#timeline-circle", {
        duration: 0.3,
        y: yVal,
        ease: "power2.out"
    });
}

/* ------------------ Utilities ------------------ */

/** Convert { year, month, day } to a JS Date object. */
function toDateObj({ year, month, day }) {
    return new Date(+year, +month - 1, +day);
}

/** Parse "YYYY-MM-DD" => JS Date. */
function parseYYYYMMDD(str) {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
}

/** Format date for card display, e.g. "Feb 17, 2023". */
function formatDate(year, month, day) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    return `${months[month - 1]} ${day}, ${year}`;
}

/** Generate seasonal ticks in [minDate..maxDate]. seasonIndex: 0=Winter,1=Spring,2=Summer,3=Fall. */
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

/** Convert a Date => (year, seasonIndex). */
function dateToSeason(d) {
    const m = d.getMonth() + 1;
    const y = d.getFullYear();
    if (m === 12 || m === 1 || m === 2) return [y, 0]; // Winter
    if (m >= 3 && m <= 5) return [y, 1]; // Spring
    if (m >= 6 && m <= 8) return [y, 2]; // Summer
    return [y, 3]; // Fall
}

/** Advance (year, seasonIndex) => next season. */
function nextSeason(y, s) {
    if (s < 3) return [y, s + 1];
    return [y + 1, 0];
}

/** Convert seasonIndex => string label. */
function seasonLabel(seasonIndex) {
    switch (seasonIndex) {
        case 0:
            return "Winter";
        case 1:
            return "Spring";
        case 2:
            return "Summer";
        case 3:
            return "Fall";
    }
    return "Unknown";
}
