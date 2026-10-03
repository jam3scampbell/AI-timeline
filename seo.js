// Build-time SEO: structured data crediting the authors, a crawlable list of
// every event for clients that don't run JavaScript, and a sitemap. All of it
// is generated from src/data/timelineData.js so it never goes stale.
import { TIMELINE_DATA } from "./src/data/timelineData.js";

const SITE = "https://ai-timeline.org/";
const TITLE = "AI Timeline: The Road to AGI";
const DESCRIPTION =
  "An interactive timeline of artificial intelligence from 2015 to today: the model releases, research, business, culture and policy on the road to AGI.";

const person = (name, url, sameAs = []) => ({
  "@type": "Person",
  name,
  url,
  ...(sameAs.length ? { sameAs } : {}),
});
const AUTHORS = [
  person("James Campbell", "https://x.com/jam3scampbell", [
    "https://github.com/jam3scampbell",
  ]),
  person("Emiliano Garcia-Lopez", "https://emilianogl.com", [
    "https://x.com/Emiliano_GLopez",
  ]),
];
const CONTRIBUTORS = [
  person("suntzoogway", "https://x.com/suntzoogway"),
  person("puravparab", "https://github.com/puravparab"),
  person("jamesms36", "https://github.com/jamesms36"),
  { "@type": "Person", name: "Max Kieffer" },
  person("Jonathan Talmi", "https://github.com/jtalmi"),
];

const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

function events() {
  return TIMELINE_DATA.events
    .map((e) => {
      const { year, month, day } = e.start_date;
      const m = /href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/.exec(e.text.headline);
      return {
        y: +year,
        m: +month,
        d: +day,
        url: m ? m[1] : "",
        title: m ? m[2] : e.text.headline.replace(/<[^>]+>/g, ""),
        text: e.text.text.replace(/^<p>|<\/p>$/g, ""),
      };
    })
    .sort((a, b) => a.y - b.y || a.m - b.m || a.d - b.d);
}

const pad = (n) => String(n).padStart(2, "0");

function jsonLd(today) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}#website`,
        url: SITE,
        name: "The Road to AGI",
        alternateName: "AI Timeline",
        inLanguage: ["en", "zh"],
        author: AUTHORS,
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE}#page`,
        url: SITE,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": `${SITE}#website` },
        inLanguage: "en",
        image: `${SITE}og-image.jpg`,
        dateModified: today,
        author: AUTHORS,
        contributor: CONTRIBUTORS,
        isBasedOn: "https://github.com/jam3scampbell/AI-timeline",
        about: [
          {
            "@type": "Thing",
            name: "Artificial general intelligence",
            sameAs:
              "https://en.wikipedia.org/wiki/Artificial_general_intelligence",
          },
          {
            "@type": "Thing",
            name: "History of artificial intelligence",
            sameAs:
              "https://en.wikipedia.org/wiki/History_of_artificial_intelligence",
          },
        ],
      },
    ],
  };
  // Escape "<" so event text can never close the script tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function noscriptList() {
  const years = new Map();
  for (const e of events()) {
    if (!years.has(e.y)) years.set(e.y, []);
    years.get(e.y).push(e);
  }
  let html = `<noscript><main class="seo"><h1>The Road to AGI</h1><p>${DESCRIPTION} By James Campbell and Emiliano Garcia-Lopez.</p>`;
  for (const [y, list] of years) {
    html += `<section><h2>${y}</h2><ol>`;
    for (const e of list) {
      html += `<li><time datetime="${e.y}-${pad(e.m)}-${pad(e.d)}">${MONTHS[e.m - 1]} ${e.d}, ${e.y}</time> <a href="${e.url}">${e.title}</a>: ${e.text}</li>`;
    }
    html += `</ol></section>`;
  }
  return html + `</main></noscript>`;
}

export default function seo() {
  const today = new Date().toISOString().slice(0, 10);
  return {
    name: "ai-timeline-seo",
    transformIndexHtml(html) {
      return html
        .replace(
          "</head>",
          `  <script type="application/ld+json">${jsonLd(today)}</script>\n</head>`
        )
        .replace(
          '<div id="root"></div>',
          `<div id="root"></div>\n    ${noscriptList()}`
        );
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>\n</urlset>\n`,
      });
    },
  };
}
