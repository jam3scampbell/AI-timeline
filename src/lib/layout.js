// Horizontal timeline layout. The axis runs through the middle of the track
// and events are packed into rows on both sides of it. An expanded card always
// grows away from the axis (upward above it, downward below it), so its title
// never moves and the axis is never covered.
// Month widths scale with how much happened in them (quiet months shrink,
// busy ones widen).
import { monthIndex, formatDate } from "./events";
import { textWidth, lineCount, FONTS } from "./measure";

export const CARD_H = 32;
export const ROW_STEP = 40; // card height + gap
export const GAP_UP = 18; // axis → bottom of the first row above
export const GAP_DOWN = 30; // axis → top of the first row below (month labels live here)
const RESERVE = 116; // free space beyond the outer rows for expansions

// Zoom never hides events. Zooming out packs months tighter so cards stack
// into more rows (more of the timeline fits on screen); zooming in spreads
// them out. `fill` is the share of rows a busy month is sized to fill.
export const ZOOM_LEVELS = [
  { fill: 1.0, base: 8, scale: 0.8 },
  { fill: 0.85, base: 20, scale: 0.9 },
  { fill: 0.6, base: 36, scale: 1 },
  { fill: 0.45, base: 48, scale: 1.3 },
  { fill: 0.35, base: 64, scale: 1.7 },
];
export const DEFAULT_ZOOM = 2;

// Straight connector from the event's date on the axis to its card.
export function stemPath(it, axis) {
  const x = it.dateX + 0.5;
  const minor = it.kind === "minor";
  const edge =
    it.side === "up"
      ? minor
        ? it.y + 16
        : it.slotTop + CARD_H
      : minor
        ? it.y
        : it.slotTop;
  return `M${x} ${axis}V${edge}`;
}

const daysIn = (y, m) => new Date(y, m, 0).getDate();

export function cardWidth(e, lang) {
  const font = e.tier === 3 ? FONTS.landmark : FONTS.major;
  return Math.ceil(
    24 +
      2 +
      textWidth(e.title, font) +
      10 +
      textWidth(formatDate(e, lang), FONTS.date, 0.6)
  );
}

export function expandedHeight(e, width) {
  return 45 + lineCount(e.text, FONTS.desc, width - 26) * 20;
}

export function layoutTimeline(
  events,
  lang,
  level = DEFAULT_ZOOM,
  height = 440
) {
  const Z = ZOOM_LEVELS[level];
  const axis = Math.round(height / 2) - 6;
  const rowsUp = Math.max(
    2,
    Math.floor((axis - GAP_UP - CARD_H - RESERVE) / ROW_STEP) + 1
  );
  const rowsDown = Math.max(
    2,
    Math.floor((height - axis - GAP_DOWN - CARD_H - RESERVE) / ROW_STEP) + 1
  );
  const fillRows = Math.max(3, Math.round((rowsUp + rowsDown) * Z.fill));
  const kindOf = (e) => (e.tier >= 2 ? "card" : "minor");

  const lastMonth = events.length
    ? monthIndex(events[events.length - 1].y, events[events.length - 1].m) + 2
    : 12;
  // Each month gets enough width for its events to fill most of the rows;
  // empty months collapse to a sliver.
  const load = new Array(lastMonth + 1).fill(0);
  const widths = new Map();
  for (const e of events) {
    const mi = monthIndex(e.y, e.m);
    const kind = kindOf(e);
    if (kind === "card") {
      const w = cardWidth(e, lang);
      widths.set(e.id, w);
      load[mi] += w + 10;
    } else {
      const w = Math.ceil(textWidth(e.title, FONTS.minor) + 22);
      widths.set(e.id, w);
      load[mi] += w + 10;
    }
  }
  const months = [];
  let x = 0;
  for (let i = 0; i <= lastMonth; i++) {
    const w = (Z.base + load[i] / fillRows) * Z.scale;
    months.push({ i, y: 2015 + Math.floor(i / 12), m: (i % 12) + 1, x, w });
    x += w;
  }

  const baseX = (e) => {
    const mo = months[monthIndex(e.y, e.m)];
    return mo.x + (mo.w * (e.d - 1)) / daysIn(e.y, e.m);
  };

  // Slots ordered nearest-the-axis first, alternating sides.
  const slots = [];
  for (let r = 0; r < Math.max(rowsUp, rowsDown); r++) {
    if (r < rowsUp) slots.push({ side: "up", r });
    if (r < rowsDown) slots.push({ side: "down", r });
  }
  const right = slots.map(() => -Infinity);
  const items = [];
  // Every card sits exactly on its date. When no row is free there, the time
  // axis itself opens a small gap at that moment (everything later shifts
  // right), so connectors are always straight.
  const gaps = []; // [base x, extra px]
  let shift = 0;
  for (const e of events) {
    const b = baseX(e);
    let ex = b + shift;
    const kind = kindOf(e);
    const w = widths.get(e.id);
    let s = slots.findIndex((_, k) => right[k] + 10 <= ex);
    if (s < 0) {
      s = 0;
      for (let k = 1; k < slots.length; k++) if (right[k] < right[s]) s = k;
      const need = right[s] + 10 - ex;
      gaps.push([b, need]);
      shift += need;
      ex += need;
    }
    right[s] = ex + w;
    const { side, r } = slots[s];
    const slotTop =
      side === "up"
        ? axis - GAP_UP - CARD_H - r * ROW_STEP
        : axis + GAP_DOWN + r * ROW_STEP;
    items.push({
      e,
      x: ex,
      dateX: ex,
      w,
      kind,
      side,
      slotTop,
      y: slotTop + (kind === "minor" ? 8 : 0),
    });
  }
  // Fold the gaps back into the months so labels and the scrubber line up.
  if (gaps.length) {
    let gi = 0;
    let acc = 0;
    for (const mo of months) {
      const end = mo.x + mo.w;
      let inside = 0;
      while (gi < gaps.length && gaps[gi][0] < end) inside += gaps[gi++][1];
      mo.x += acc;
      mo.w += inside;
      acc += inside;
    }
  }
  const total = x + shift;

  // x (track px) → fractional month index, for the scrubber.
  const monthAt = (px) => {
    if (px <= 0) return 0;
    for (const mo of months) {
      if (px < mo.x + mo.w) return mo.i + (px - mo.x) / mo.w;
    }
    return lastMonth + 1;
  };
  const xOfMonth = (fm) => {
    const i = Math.max(0, Math.min(lastMonth, Math.floor(fm)));
    const mo = months[i];
    return mo.x + mo.w * (fm - i);
  };

  return { months, total, items, axis, height, lastMonth, monthAt, xOfMonth };
}
