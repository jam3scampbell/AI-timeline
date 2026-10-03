// The timeline: a horizontal track of event cards (desktop/tablet) or a
// vertical list (phones), with a quarterly scrubber along the bottom.
// Every event behaves the same way: hover / focus / first tap expands the
// card in place to show its description; clicking it opens the source.
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { CATEGORIES } from "../data/timelineData";
import {
  getEvents,
  monthIndex,
  formatDate,
  formatMonth,
  formatMonthLong,
  START_YEAR,
} from "../lib/events";
import {
  layoutTimeline,
  expandedHeight,
  stemPath,
  CARD_H,
  GAP_DOWN,
  ZOOM_LEVELS,
  DEFAULT_ZOOM,
} from "../lib/layout";
import LanguageSwitcher from "./LanguageSwitcher";

const CATS = [
  CATEGORIES.MODEL_RELEASE,
  CATEGORIES.BUSINESS,
  CATEGORIES.RESEARCH,
  CATEGORIES.CULTURE,
  CATEGORIES.POLICY,
];

function useMedia(query) {
  const get = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;
  const [match, setMatch] = useState(get);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return match;
}

function useFontsReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let live = true;
    Promise.all([
      document.fonts.load("500 19px 'EB Garamond'"),
      document.fonts.load("500 14px Geist"),
      document.fonts.load("400 14px Geist"),
      document.fonts.load("400 10px 'Geist Mono'"),
    ])
      .catch(() => {})
      .then(() => live && setReady(true));
    return () => {
      live = false;
    };
  }, []);
  return ready;
}

/* ───────────────────────── Header ───────────────────────── */

function Header({ cat, setCat }) {
  const { t } = useTranslation();
  return (
    <header className="road-head">
      <h1 className="road-title">{t("hero.title", "The Road to AGI")}</h1>
      <div className="road-head-right">
        <nav className="road-filters" aria-label={t("filters", "Filter")}>
          {["ALL", ...CATS].map((c) => (
            <button
              key={c}
              type="button"
              className={`chip${cat === c ? " on" : ""}`}
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
            >
              {t(`short.${c}`)}
            </button>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

/* ───────────────────────── Scrubber ───────────────────────── */

function Scrubber({ events, lastMonth, win, onSeek, height = 40 }) {
  const wrap = useRef(null);
  const [w, setW] = useState(0);
  useLayoutEffect(() => {
    const el = wrap.current;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const nq = Math.floor(lastMonth / 3) + 1;
  const counts = useMemo(() => {
    const c = new Array(nq).fill(0);
    for (const e of events) {
      const q = Math.floor(monthIndex(e.y, e.m) / 3);
      if (q < nq) c[q] += 1;
    }
    return c;
  }, [events, nq]);

  const qw = w / nq;
  const gap = qw > 12 ? 1.5 : 1;
  const peak = Math.min(12, Math.max(4, ...counts));
  const sc = height / peak;
  const q0 = win[0] / 3;
  const q1 = win[1] / 3;
  const lastYear = START_YEAR + Math.floor(lastMonth / 12);
  const yearStep = qw * 4 >= 36 ? 1 : 2;
  const compactYears = qw * 4 < 44;

  const seekAt = (clientX) => {
    const r = wrap.current.getBoundingClientRect();
    const fm = ((clientX - r.left) / r.width) * nq * 3;
    onSeek(Math.max(0, Math.min(lastMonth, fm)));
  };
  const drag = useRef(false);

  return (
    <div
      className="scrub"
      ref={wrap}
      style={{ height: height + 22 }}
      onPointerDown={(e) => {
        drag.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        seekAt(e.clientX);
      }}
      onPointerMove={(e) => drag.current && seekAt(e.clientX)}
      onPointerUp={() => (drag.current = false)}
      onPointerCancel={() => (drag.current = false)}
      role="slider"
      aria-label="Timeline position"
      aria-valuemin={START_YEAR}
      aria-valuemax={lastYear}
      aria-valuenow={START_YEAR + Math.floor(win[0] / 12)}
    >
      {w > 0 && (
        <svg width={w} height={height} className="scrub-svg">
          {counts.map((c, q) =>
            c ? (
              <rect
                key={q}
                x={q * qw + gap}
                y={height - Math.min(c, peak) * sc}
                width={Math.max(qw - 2 * gap, 1)}
                height={Math.min(c, peak) * sc}
                className={q + 1 > q0 && q < q1 ? "bar on" : "bar"}
              />
            ) : null
          )}
          <path d={`M0 ${height - 0.5}H${w}`} className="scrub-base" />
          <rect
            x={Math.max(0, q0 * qw)}
            y={-4}
            width={Math.max((q1 - q0) * qw, 6)}
            height={height + 4}
            rx={3}
            className="scrub-win"
          />
        </svg>
      )}
      {w > 0 &&
        Array.from({ length: lastYear - START_YEAR + 1 }, (_, k) => k).map(
          (k) => {
            const y = START_YEAR + k;
            const active =
              y >= START_YEAR + Math.floor(win[0] / 12) &&
              y <= START_YEAR + Math.floor((win[1] - 0.01) / 12);
            // Sparse labels on narrow scrubbers, but always label the
            // year(s) in view; drop a neighbour that would collide with it.
            const activeYear = START_YEAR + Math.floor(win[0] / 12);
            if (!active && k % yearStep !== 0) return null;
            if (!active && yearStep > 1 && Math.abs(y - activeYear) === 1)
              return null;
            return (
              <span
                key={y}
                className={`scrub-year${active ? " on" : ""}`}
                style={{ left: k * 4 * qw, top: height + 7 }}
              >
                {compactYears ? `’${String(y).slice(2)}` : y}
              </span>
            );
          }
        )}
    </div>
  );
}

/* ───────────────────────── Desktop / tablet ───────────────────────── */

function sidePadFor(width) {
  return Math.round(Math.min(96, Math.max(20, width * 0.066)));
}

// Where an event's open card sits. It never moves from its resting corner;
// it only grows rightward and away from the axis, getting wider (not taller)
// when vertical room is short.
function openGeometry(it, axis, height) {
  const left =
    it.kind === "minor" ? it.x - 4 : it.kind === "dot" ? it.dateX - 12 : it.x;
  const up = it.side === "up";
  const base = it.kind === "dot" ? axis + GAP_DOWN : it.slotTop;
  const space = up ? base + CARD_H - 28 : height - base - 28;
  let w = Math.max(it.w, 280);
  while (expandedHeight(it.e, w) > space && w < 640) w += 40;
  return { left, up, base, w };
}

function TrackEvent({
  it,
  lang,
  state,
  height,
  axis,
  onEnter,
  onLeave,
  onTap,
}) {
  const { e } = it;
  const open = state === "open";
  const pointer = useRef("mouse");
  let cls = `ev t${e.tier} ${it.kind}`;
  if (state === "dim") cls += " dim";
  let style;
  if (open) {
    cls += " open";
    const { left, up, base, w } = openGeometry(it, axis, height);
    // Above the axis the card is pinned by its bottom edge so it grows
    // upward on its own; below, by its top edge.
    if (up) cls += " up";
    style = up
      ? { left, bottom: height - (base + CARD_H), width: w }
      : { left, top: base, width: w };
    if (it.kind === "dot") {
      // Invisible bridge from the dot down to its card keeps the hover alive.
      cls += " from-dot";
      style["--bx"] = `${it.dateX - left - 12}px`;
    }
  } else if (it.kind === "dot") {
    style = { left: it.dateX - 7, top: axis - 7 };
  } else {
    style = { left: it.x, top: it.y };
  }

  return (
    <a
      className={cls}
      style={style}
      href={e.url || undefined}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onTap}
      onBlur={onLeave}
      onPointerDown={(ev) => (pointer.current = ev.pointerType)}
      onClick={(ev) => {
        if (pointer.current !== "mouse" && !open) {
          ev.preventDefault();
          onTap();
        }
      }}
    >
      {it.kind === "dot" && !open ? (
        <span className="sr-only">{e.title}</span>
      ) : it.kind === "minor" && !open ? (
        <span className="minor-t">{e.title}</span>
      ) : (
        <>
          <span className="ev-row">
            <span className="ev-title">{e.title}</span>
            <span className="ev-date">{formatDate(e, lang)}</span>
          </span>
          {open && <span className="ev-desc">{e.text}</span>}
        </>
      )}
    </a>
  );
}

function DesktopTimeline({ events, lang }) {
  const { t } = useTranslation();
  const scroller = useRef(null);
  const [vw, setVw] = useState(() => window.innerWidth);
  const pad = sidePadFor(vw);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  // The track fills the window height left over after the header and the
  // scrubber, so taller screens get more rows (and more room to expand).
  const [trackH, setTrackH] = useState(440);
  const L = useMemo(
    () => layoutTimeline(events, lang, zoom, trackH),
    [events, lang, zoom, trackH]
  );
  const zoomBy = useCallback(
    (d) => setZoom((z) => Math.max(0, Math.min(ZOOM_LEVELS.length - 1, z + d))),
    []
  );
  const [left, setLeft] = useState(0);
  const [hover, setHover] = useState(null);
  const content = vw - 2 * pad;

  useLayoutEffect(() => {
    const measure = () => {
      setVw(window.innerWidth);
      const el = scroller.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const free = window.innerHeight - top - 104;
      setTrackH(Math.round(Math.max(300, Math.min(640, free))));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Keep the moment at the centre of the view fixed when the layout changes
  // (zoom, filters, language, resize); open on 2022 the first time.
  const anchor = useRef(null);
  const contentRef = useRef(content);
  contentRef.current = content;
  useLayoutEffect(() => {
    const el = scroller.current;
    if (anchor.current == null) {
      el.scrollLeft = L.xOfMonth(monthIndex(2022, 1));
      anchor.current = L.monthAt(el.scrollLeft + contentRef.current / 2);
    } else {
      el.scrollLeft = L.xOfMonth(anchor.current) - contentRef.current / 2;
    }
    setLeft(el.scrollLeft);
  }, [L]);

  const raf = useRef(0);
  const onScroll = () => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = scroller.current;
      if (!el) return;
      setLeft(el.scrollLeft);
      anchor.current = L.monthAt(el.scrollLeft + contentRef.current / 2);
    });
  };

  // Vertical wheel scrolls the track sideways; pinch / ⌘-wheel zooms; drag
  // the background to pan; − / = zoom from the keyboard.
  useEffect(() => {
    const el = scroller.current;
    let acc = 0;
    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        acc += e.deltaY;
        if (Math.abs(acc) > 40) {
          zoomBy(acc > 0 ? -1 : 1);
          acc = 0;
        }
        return;
      }
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const max = el.scrollWidth - el.clientWidth;
        const next = el.scrollLeft + e.deltaY;
        if (
          (next > 0 || el.scrollLeft > 0) &&
          (next < max || el.scrollLeft < max)
        ) {
          e.preventDefault();
          el.scrollLeft = next;
        }
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    const onKey = (e) => {
      if (e.target.closest("input, select, textarea")) return;
      if (e.key === "-" || e.key === "_") zoomBy(-1);
      else if (e.key === "=" || e.key === "+") zoomBy(1);
      else if (e.key === "Escape") setHover(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomBy]);
  const dragging = useRef(null);
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.target.closest(".ev")) return;
    dragging.current = { x: e.clientX, left: scroller.current.scrollLeft };
    scroller.current.classList.add("grabbing");
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    scroller.current.scrollLeft =
      dragging.current.left - (e.clientX - dragging.current.x);
  };
  const endDrag = () => {
    dragging.current = null;
    scroller.current?.classList.remove("grabbing");
  };

  // Hover intent: a short delay before the first card opens so sweeping the
  // pointer across the track doesn't flash cards; once one is open, moving
  // to a neighbour switches immediately.
  const hoverRef = useRef(null);
  hoverRef.current = hover;
  const enterTimer = useRef(0);
  const leaveTimer = useRef(0);
  const enter = useCallback((id) => {
    clearTimeout(leaveTimer.current);
    clearTimeout(enterTimer.current);
    if (hoverRef.current != null) setHover(id);
    else enterTimer.current = setTimeout(() => setHover(id), 90);
  }, []);
  const leave = useCallback(() => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setHover(null), 120);
  }, []);
  const openNow = useCallback((id) => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    setHover(id);
  }, []);

  // A card opening near the right edge would run off-screen; glide the
  // timeline just far enough to show it (the card itself never moves).
  useEffect(() => {
    const it = L.items.find((x) => x.e.id === hover);
    const el = scroller.current;
    if (!it || !el) return;
    const { left: l, w } = openGeometry(it, L.axis, L.height);
    const over = l + w - (el.scrollLeft + content + pad * 0.4);
    if (over > 0) el.scrollBy({ left: over + 8, behavior: "smooth" });
  }, [hover, L, content, pad]);

  const seek = (fm) => {
    const el = scroller.current;
    el.scrollLeft = L.xOfMonth(fm) - content / 2;
  };

  const winStart = L.monthAt(left);
  const winEnd = L.monthAt(left + content);
  const year = START_YEAR + Math.floor(L.monthAt(left + content / 2) / 12);
  const hovered = L.items.find((it) => it.e.id === hover);

  // Month labels above the axis; years always win, months only where they
  // fit without touching their neighbours.
  const monthLabels = useMemo(() => {
    const out = [];
    const charW = lang === "zh" ? 10.5 : 7.2;
    const yearSpans = L.months
      .filter((mo) => mo.m === 1)
      .map((mo) => {
        const label = mo.w >= 64 ? formatMonth(1, lang, mo.y) : String(mo.y);
        return { mo, label, l: mo.x + 6, r: mo.x + 6 + label.length * charW };
      });
    let lastR = -Infinity;
    let yi = 0;
    for (const mo of L.months) {
      if (mo.m === 1) {
        const ys = yearSpans[yi++];
        out.push(ys);
        lastR = ys.r;
        continue;
      }
      const label = formatMonth(mo.m, lang);
      const l = mo.x + 6;
      const r = l + label.length * charW;
      const nextYear = yearSpans[yi];
      if (l < lastR + 10 || (nextYear && r + 10 > nextYear.l)) continue;
      out.push({ mo, label, l, r });
      lastR = r;
    }
    return out;
  }, [L, lang]);

  return (
    <section className="road-desk" style={{ "--pad": `${pad}px` }}>
      <div className="road-bar">
        <div className="road-year" aria-live="polite">
          {year}
        </div>
        <div className="zoom" role="group" aria-label={t("zoom", "Zoom")}>
          <button
            type="button"
            onClick={() => zoomBy(-1)}
            disabled={zoom === 0}
            aria-label={t("zoomOut")}
            title={t("zoomOut")}
          >
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2.5 6h7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => zoomBy(1)}
            disabled={zoom === ZOOM_LEVELS.length - 1}
            aria-label={t("zoomIn")}
            title={t("zoomIn")}
          >
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2.5 6h7M6 2.5v7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="road-scroller"
        ref={scroller}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClick={(e) => !e.target.closest(".ev") && setHover(null)}
      >
        <div
          className={`road-track${hover != null ? " has-hover" : ""}`}
          style={{ width: L.total, height: L.height }}
        >
          <svg
            className="road-svg"
            width={L.total}
            height={L.height}
            aria-hidden="true"
          >
            <path
              className="stems"
              d={L.items
                .filter((it) => it.e.id !== hover)
                .map((it) => stemPath(it, L.axis))
                .join("")}
            />
            <path className="axis" d={`M0 ${L.axis + 0.5}H${L.total}`} />
            <path
              className="ticks"
              d={L.months
                .map(
                  (mo) =>
                    `M${mo.x + 0.5} ${L.axis}V${L.axis + (mo.m === 1 ? 8 : 4)}`
                )
                .join("")}
            />
            {L.items.map((it) =>
              it.e.id === hover ? null : (
                <circle
                  key={it.e.id}
                  cx={it.dateX + 0.5}
                  cy={L.axis + 0.5}
                  r={it.e.tier === 3 ? 3.2 : it.e.tier === 2 ? 2.6 : 2}
                  className={`dot t${it.e.tier}`}
                />
              )
            )}
            {hovered && (
              <>
                <path
                  className="stem-on"
                  d={
                    hovered.kind === "dot"
                      ? `M${hovered.dateX + 0.5} ${L.axis}V${L.axis + GAP_DOWN}`
                      : stemPath(hovered, L.axis)
                  }
                />
                <circle
                  cx={hovered.dateX + 0.5}
                  cy={L.axis + 0.5}
                  r={8}
                  className="halo"
                />
                <circle
                  cx={hovered.dateX + 0.5}
                  cy={L.axis + 0.5}
                  r={4}
                  className="dot-on"
                />
              </>
            )}
          </svg>
          {monthLabels.map(({ mo, label }) => (
            <span
              key={mo.i}
              className={`mlabel${mo.m === 1 ? " jan" : ""}`}
              style={{ left: mo.x + 6, top: L.axis + 9 }}
            >
              {label}
            </span>
          ))}
          {L.items.map((it) => (
            <TrackEvent
              key={it.e.id}
              it={it}
              lang={lang}
              height={L.height}
              axis={L.axis}
              state={
                hover === it.e.id ? "open" : hover != null ? "dim" : "rest"
              }
              onEnter={() => enter(it.e.id)}
              onLeave={leave}
              onTap={() => openNow(it.e.id)}
            />
          ))}
        </div>
      </div>
      <div className="road-scrub-wrap">
        <Scrubber
          events={events}
          lastMonth={L.lastMonth}
          win={[winStart, winEnd]}
          onSeek={seek}
        />
      </div>
    </section>
  );
}

/* ───────────────────────── Phone ───────────────────────── */

function MobileTimeline({ events, lang }) {
  const [open, setOpen] = useState(null);
  const monthRefs = useRef(new Map());
  const [win, setWin] = useState([monthIndex(2022, 1), monthIndex(2022, 4)]);

  const groups = useMemo(() => {
    const years = [];
    for (const e of events) {
      let y = years[years.length - 1];
      if (!y || y.y !== e.y) years.push((y = { y: e.y, months: [] }));
      let m = y.months[y.months.length - 1];
      if (!m || m.m !== e.m)
        y.months.push((m = { m: e.m, mi: monthIndex(e.y, e.m), events: [] }));
      m.events.push(e);
    }
    return years;
  }, [events]);
  const lastMonth = events.length
    ? monthIndex(events[events.length - 1].y, events[events.length - 1].m) + 2
    : 12;

  const measure = useCallback(() => {
    const vh = window.innerHeight;
    let first = null;
    let last = null;
    for (const [mi, el] of monthRefs.current) {
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom > 60 && r.top < vh - 90) {
        if (first == null || mi < first) first = mi;
        if (last == null || mi > last) last = mi;
      }
    }
    if (first != null) setWin([first, last + 1]);
    // Collapse an expanded row once it has scrolled out of view, so the
    // rest of the list isn't left dimmed.
    const openEl = document.querySelector(".m-row.open");
    if (openEl) {
      const r = openEl.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) setOpen(null);
    }
  }, []);

  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    measure();
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [measure, groups]);

  const seek = (fm) => {
    const target = Math.floor(fm);
    let best = null;
    for (const [mi, el] of monthRefs.current) {
      if (el && mi >= target && (best == null || mi < best[0])) best = [mi, el];
    }
    if (!best) {
      for (const [mi, el] of monthRefs.current) {
        if (el && (best == null || mi > best[0])) best = [mi, el];
      }
    }
    if (best) {
      const top = best[1].getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "auto" });
    }
  };

  // Start where the story picks up, like the desktop view.
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const el = document.getElementById("m-year-2022");
    if (el) window.scrollTo({ top: el.offsetTop - 8, behavior: "auto" });
  }, []);

  return (
    <section
      className="road-mobile"
      onClick={(e) => !e.target.closest(".m-row") && setOpen(null)}
    >
      {groups.map((y) => (
        <div className="m-yearblock" key={y.y}>
          <div className="m-year" id={`m-year-${y.y}`}>
            {y.y}
          </div>
          <div className="m-list">
            {y.months.map((mo) => (
              <div
                className="m-month"
                key={mo.mi}
                ref={(el) => monthRefs.current.set(mo.mi, el)}
              >
                <div className="m-mhead">
                  <span className="m-node" />
                  {formatMonthLong(mo.m, lang)}
                </div>
                {mo.events.map((e) => {
                  const isOpen = open === e.id;
                  const dim = open != null && !isOpen;
                  return (
                    <a
                      key={e.id}
                      className={`m-row t${e.tier}${isOpen ? " open" : ""}${dim ? " dim" : ""}`}
                      href={e.url || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(ev) => {
                        if (!isOpen) {
                          ev.preventDefault();
                          setOpen(e.id);
                        }
                      }}
                    >
                      <span className="m-dot" />
                      <span className="m-body">
                        <span className="ev-row">
                          <span className="ev-title">{e.title}</span>
                          <span className="ev-date">{formatDate(e, lang)}</span>
                        </span>
                        {isOpen && <span className="ev-desc">{e.text}</span>}
                      </span>
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="m-scrub">
        <Scrubber
          events={events}
          lastMonth={lastMonth}
          win={win}
          onSeek={seek}
          height={26}
        />
      </div>
    </section>
  );
}

/* ───────────────────────── Root ───────────────────────── */

export default function Road() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const [cat, setCat] = useState("ALL");
  const fontsReady = useFontsReady();
  const isPhone = useMedia("(max-width: 719px)");
  const all = useMemo(() => getEvents(lang), [lang]);
  const events = useMemo(
    () => (cat === "ALL" ? all : all.filter((e) => e.category === cat)),
    [all, cat]
  );

  return (
    <>
      <Header cat={cat} setCat={setCat} />
      {fontsReady &&
        (isPhone ? (
          <MobileTimeline events={events} lang={lang} />
        ) : (
          <DesktopTimeline events={events} lang={lang} />
        ))}
    </>
  );
}
