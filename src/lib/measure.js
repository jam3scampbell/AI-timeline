// Canvas text measurement so card widths can be packed before render.
let ctx;
const getCtx = () => {
  if (!ctx) ctx = document.createElement("canvas").getContext("2d");
  return ctx;
};

export function textWidth(text, font, letterSpacingPx = 0) {
  const c = getCtx();
  c.font = font;
  return c.measureText(text).width + letterSpacingPx * text.length;
}

// Approximate wrapped line count for a paragraph at a given width.
export function lineCount(text, font, width) {
  const c = getCtx();
  c.font = font;
  const words = text.split(" ");
  let lines = 1;
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (c.measureText(next).width > width && line) {
      lines += 1;
      line = w;
    } else {
      line = next;
    }
  }
  return lines;
}

export const FONTS = {
  landmark: "500 19px 'EB Garamond'",
  major: "500 14px Geist",
  minor: "400 14px Geist",
  date: "400 10px 'Geist Mono'",
  desc: "400 14px Geist",
  descMobile: "400 14px Geist",
};
