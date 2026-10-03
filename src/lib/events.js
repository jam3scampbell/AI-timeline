// Normalises TIMELINE_DATA into flat, sorted event objects for the timeline UI.
import { TIMELINE_DATA } from "../data/timelineData";

const toText = (html) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
};

const parseHeadline = (html) => {
  const m = /href="([^"]+)"/.exec(html || "");
  return { url: m ? m[1] : null, title: toText(html) };
};

// importance in the data is 1–3 with a few halves; collapse to three tiers.
export const tierOf = (importance) => {
  const i = Number(importance) || 1;
  if (i >= 2.75) return 3;
  if (i >= 2) return 2;
  return 1;
};

const cache = {};

export function getEvents(lang) {
  const key = lang === "zh" ? "zh" : "en";
  if (cache[key]) return cache[key];
  const events = TIMELINE_DATA.events.map((ev, idx) => {
    const content = key === "zh" && ev.chinese ? ev.chinese : ev.text;
    const { url, title } = parseHeadline(content.headline);
    const y = Number(ev.start_date.year);
    const m = Number(ev.start_date.month) || 1;
    const d = Number(ev.start_date.day) || 1;
    return {
      id: idx,
      y,
      m,
      d,
      title,
      url,
      text: toText(content.text),
      tier: tierOf(ev.importance),
      category: ev.category,
    };
  });
  events.sort((a, b) => a.y - b.y || a.m - b.m || a.d - b.d || a.id - b.id);
  cache[key] = events;
  return events;
}

// Months since Jan 2015 (0-based), the shared time index for layout + scrubber.
export const START_YEAR = 2015;
export const monthIndex = (y, m) => (y - START_YEAR) * 12 + (m - 1);

export function formatDate(e, lang) {
  const date = new Date(e.y, e.m - 1, e.d);
  if (lang === "zh") return `${e.m}月${e.d}日`;
  return date
    .toLocaleDateString("en-US", { month: "short", day: "numeric" })
    .toUpperCase();
}

export function formatMonth(m, lang, withYear) {
  if (lang === "zh") return withYear ? `${withYear}年${m}月` : `${m}月`;
  const s = new Date(2000, m - 1, 1)
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
  return withYear ? `${s} ${withYear}` : s;
}

export function formatMonthLong(m, lang) {
  if (lang === "zh") return `${m}月`;
  return new Date(2000, m - 1, 1)
    .toLocaleDateString("en-US", { month: "long" })
    .toUpperCase();
}
