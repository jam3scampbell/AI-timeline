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
const RESERVE = 96; // free space beyond the outer rows for expansions

// Semantic zoom. Zooming out first turns minor events into bare dots, then
// majors too, so the track never becomes a wall of cards; zooming in just
// gives every month more room.
export const ZOOM_LEVELS = [
  { cardTier: 3, minors: false, scale: 0.8, base: 18 },
  { cardTier: 2, minors: false, scale: 0.85, base: 24 },
  { cardTier: 2, minors: true, scale: 1, base: 36 },
  { cardTier: 2, minors: true, scale: 1.5, base: 48 },
  { cardTier: 2, minors: true, scale: 2.2, base: 64 },
];
export const DEFAULT_ZOOM = 2;

// Connector from the event's date on the axis to the near edge of its card.
// Nudged cards get an elbow: out from the date, then across to the card.
export function stemPath(it, axis) {
  if (it.kind === "dot") return "";
  const x0 = it.dateX + 0.5;
  const x1 = it.x + 0.5;
  const minor = it.kind === "minor";
  if (it.side === "up") {
    const edge = minor ? it.y + 16 : it.slotTop + CARD_H;
    if (x1 - x0 < 1) return `M${x0} ${axis}V${edge}`;
    return `M${x0} ${axis}V${it.slotTop + CARD_H + 6}H${x1}V${edge}`;
  }
  const edge = minor ? it.y : it.slotTop;
  if (x1 - x0 < 1) return `M${x0} ${axis}V${edge}`;
  return `M${x0} ${axis}V${it.slotTop - 6}H${x1}V${edge}`;
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
  return 45 + lineCount(e.text, FONTS.desc, width - 26) * 19;
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
  const fillRows = Math.max(3, Math.round((rowsUp + rowsDown) * 0.75));
  const kindOf = (e) =>
    e.tier >= Z.cardTier ? "card" : Z.minors && e.tier === 1 ? "minor" : "dot";

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
    } else if (kind === "minor") {
      const w = Math.ceil(textWidth(e.title, FONTS.minor) + 22);
      widths.set(e.id, w);
      load[mi] += w + 10;
    } else {
      load[mi] += 14;
    }
  }
  const months = [];
  let x = 0;
  for (let i = 0; i <= lastMonth; i++) {
    const w = (Z.base + load[i] / fillRows) * Z.scale;
    months.push({ i, y: 2015 + Math.floor(i / 12), m: (i % 12) + 1, x, w });
    x += w;
  }
  const total = x;

  const xOf = (e) => {
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
  for (const e of events) {
    const ex = xOf(e);
    const kind = kindOf(e);
    if (kind === "dot") {
      items.push({
        e,
        x: ex,
        dateX: ex,
        w: 0,
        kind,
        side: "down",
        y: axis,
        slotTop: axis + GAP_DOWN,
      });
      continue;
    }
    // Nearest slot that fits; if none does, the one needing the smallest
    // sideways nudge (same-day events would otherwise stack forever).
    const w = widths.get(e.id);
    let best = null;
    for (let s = 0; s < slots.length; s++) {
      const left = Math.max(ex, right[s] + 10);
      const cost = left - ex + s * 3;
      if (!best || cost < best.cost) best = { s, left, cost };
      if (left === ex) break;
    }
    right[best.s] = best.left + w;
    const { side, r } = slots[best.s];
    const slotTop =
      side === "up"
        ? axis - GAP_UP - CARD_H - r * ROW_STEP
        : axis + GAP_DOWN + r * ROW_STEP;
    items.push({
      e,
      x: best.left,
      dateX: ex,
      w,
      kind,
      side,
      slotTop,
      y: slotTop + (kind === "minor" ? 8 : 0),
    });
  }

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
