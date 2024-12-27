document.addEventListener("DOMContentLoaded", () => {
    buildTimeline();
    setupScrollAnimations();
});

function buildTimeline() {
    const eventsContainer = document.getElementById("events-container");
    const ticksContainer = document.getElementById("ticks-container");
    const { events } = window.TIMELINE_DATA;

    // 1. Sort events by date
    events.sort((a, b) => toDateObj(a.start_date) - toDateObj(b.start_date));

    // 2. Create event cards & track unique (season, year)
    let uniquePoints = [];
    events.forEach((event) => {
        // Create event card
        const card = document.createElement("div");
        card.className = "event-card";

        const { year, month, day } = event.start_date;
        const dateStr = formatDate(year, month, day);

        card.innerHTML = `
        <div class="event-date">${dateStr}</div>
        <div class="event-title">${event.text.headline}</div>
        <div class="event-text">${event.text.text}</div>
      `;
        eventsContainer.appendChild(card);

        // for ticks, we'll do season-year
        const season = getSeason(parseInt(month));
        const y = parseInt(year);
        const found = uniquePoints.find((pt) => pt.year === y && pt.season === season);
        if (!found) {
            uniquePoints.push({ year: y, season });
        }
    });

    // 3. Sort the season-year
    uniquePoints.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return seasonRank(a.season) - seasonRank(b.season);
    });

    // 4. Build ticks
    const totalPoints = uniquePoints.length;
    uniquePoints.forEach((pt, i) => {
        const tick = document.createElement("div");
        tick.className = "tick";

        // Position each tick
        const topPercent = (i / (totalPoints - 1)) * 100;
        tick.style.top = `${topPercent}%`;

        const label = document.createElement("div");
        label.className = "tick-label";
        label.innerText = `${pt.season} ${pt.year}`;
        tick.appendChild(label);

        ticksContainer.appendChild(tick);
    });
}

function setupScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Cards fade/slide in
    const cards = document.querySelectorAll(".event-card");
    cards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.03,
        });
    });

    // Move the timeline-circle with scroll
    gsap.to("#timeline-circle", {
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
        y: () => {
            const ticksContainer = document.getElementById("ticks-container");
            // Overshoot a bit to ensure final tick is reached
            return (ticksContainer.offsetHeight * 1.05) - 24;
        },
    });
}

// Utilities
function toDateObj({ year, month, day }) {
    return new Date(+year, +month - 1, +day);
}
function formatDate(year, month, day) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[month - 1] || "??"} ${day}, ${year}`;
}
function getSeason(m) {
    if (m === 12 || m === 1 || m === 2) return "Winter";
    if (m >= 3 && m <= 5) return "Spring";
    if (m >= 6 && m <= 8) return "Summer";
    return "Fall";
}
function seasonRank(season) {
    switch (season) {
        case "Winter": return 1;
        case "Spring": return 2;
        case "Summer": return 3;
        case "Fall": return 4;
    }
    return 5;
}
