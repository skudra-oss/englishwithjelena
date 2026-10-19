/* Builds the finished website into the _site folder.
   Runs automatically on GitHub after every change (see .github/workflows/deploy.yml).
   It turns content.js into ready-made HTML pages in Russian (/) and English (/en/)
   so that Google and Yandex can read every word. You don't need to edit this file. */

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = __dirname;
const OUT = path.join(ROOT, "_site");
const DOMAIN = "https://englishwithjelena.com";

const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
const contentJs = read("content.js");
const siteJs = read("site.js");

// Load the content once to use in the head tags
const sandbox = { window: {} };
new Function("window", contentJs)(sandbox.window);
const SITE = sandbox.window.SITE;

const pages = [
  { tpl: "index.html", slug: "", meta: (T) => T.meta },
  { tpl: "about.html", slug: "about", meta: (T) => ({ title: T.pages.about.metaTitle, description: T.pages.about.description }) },
  { tpl: "start.html", slug: "start", meta: (T) => ({ title: T.pages.start.metaTitle, description: T.pages.start.description }) },
  { tpl: "prices.html", slug: "prices", meta: (T) => ({ title: T.pages.prices.metaTitle, description: T.pages.prices.description }) },
  { tpl: "test.html", slug: "test", meta: (T) => ({ title: T.pages.test.metaTitle, description: T.pages.test.description }) },
  { tpl: "book.html", slug: "book", meta: (T) => ({ title: T.pages.book.metaTitle, description: T.pages.book.description }) },
  { tpl: "reviews.html", slug: "reviews", meta: (T) => ({ title: T.reviewsPage.metaTitle, description: T.reviewsPage.text }) },
  { tpl: "payment.html", slug: "payment", meta: (T) => ({ title: T.payment.metaTitle, description: T.payment.text }) }
];
const langs = ["ru", "en"];

const url = (lang, slug) => DOMAIN + (lang === "en" ? "/en/" : "/") + slug;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function faqLd(T) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: (T.faq ? T.faq.items : []).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
}

function jsonLd(T, lang) {
  const offers = (T.prices.items || []).map((p) => ({
    "@type": "Service",
    name: p.name,
    description: p.text,
    provider: { "@id": DOMAIN + "/#jelena" },
    areaServed: "Worldwide",
    availableChannel: { "@type": "ServiceChannel", serviceUrl: url(lang, "") },
    offers: { "@type": "Offer", price: String(p.price || "").replace(/[^0-9.]/g, ""), priceCurrency: "GBP" }
  }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": DOMAIN + "/#jelena",
        name: "Jelena Skudra",
        alternateName: "Елена Скудра",
        jobTitle: lang === "ru" ? "Преподаватель английского языка" : "English teacher",
        alumniOf: { "@type": "CollegeOrUniversity", name: "University of Nottingham" },
        knowsLanguage: ["en", "ru", "uk", "lv", "es"],
        url: DOMAIN + "/",
        image: DOMAIN + "/jelena.jpg",
        email: SITE.settings.email || undefined
      },
      { "@type": "WebSite", "@id": DOMAIN + "/#website", url: DOMAIN + "/", name: "English with Jelena", inLanguage: ["ru", "en"] },
      ...offers
    ]
  };
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "en"), { recursive: true });

for (const lang of langs) {
  const T = SITE[lang];
  for (const page of pages) {
    const dom = new JSDOM(read(page.tpl), { url: url(lang, page.slug), runScripts: "outside-only", pretendToBeVisual: true });
    const { window } = dom;
    const doc = window.document;
    doc.documentElement.setAttribute("data-lang", lang);
    doc.documentElement.setAttribute("lang", lang);
    window.eval(contentJs);
    window.eval(siteJs);

    const prefix = lang === "en" ? "../" : "";
    const m = page.meta(T);

    // Head: title, description, canonical, languages, social previews
    doc.title = m.title;
    const head = doc.head;
    const add = (html) => head.insertAdjacentHTML("beforeend", html + "\n");
    doc.querySelector('meta[name="description"]').setAttribute("content", m.description);
    add(`<link rel="canonical" href="${url(lang, page.slug)}">`);
    add(`<link rel="alternate" hreflang="ru" href="${url("ru", page.slug)}">`);
    add(`<link rel="alternate" hreflang="en" href="${url("en", page.slug)}">`);
    add(`<link rel="alternate" hreflang="x-default" href="${url("ru", page.slug)}">`);
    add(`<meta property="og:type" content="website">`);
    add(`<meta property="og:site_name" content="English with Jelena">`);
    add(`<meta property="og:title" content="${esc(m.title)}">`);
    add(`<meta property="og:description" content="${esc(m.description)}">`);
    add(`<meta property="og:url" content="${url(lang, page.slug)}">`);
    add(`<meta property="og:image" content="${DOMAIN}/share.jpg">`);
    add(`<meta property="og:image:width" content="1200">`);
    add(`<meta property="og:image:height" content="630">`);
    add(`<meta property="og:locale" content="${lang === "ru" ? "ru_RU" : "en_GB"}">`);
    add(`<meta name="twitter:card" content="summary_large_image">`);
    add(`<link rel="apple-touch-icon" href="${prefix}icon.png">`);
    if (page.slug === "") add(`<script type="application/ld+json">${JSON.stringify(jsonLd(T, lang, false))}</script>`);
    if (page.slug === "test") add(`<script type="application/ld+json">${JSON.stringify(faqLd(T))}</script>`);

    // Language switch becomes real links between the two versions
    const other = lang === "ru" ? "en" : "ru";
    const otherHref = lang === "ru" ? "en/" + page.slug : "../" + page.slug;
    const sw = doc.querySelector(".lang");
    if (sw) {
      sw.innerHTML =
        (lang === "ru" ? '<span aria-current="true">RU</span>' : `<a href="${otherHref}" hreflang="ru" lang="ru">RU</a>`) +
        (lang === "en" ? '<span aria-current="true">EN</span>' : `<a href="${otherHref}" hreflang="en" lang="en">EN</a>`);
    }

    // Pretty links (/reviews instead of reviews.html) and asset paths for /en/
    let html = dom.serialize();
    html = html.replace(/href="index\.html"/g, 'href="./"').replace(/href="([a-z]+)\.html(#[a-z-]+)?"/g, 'href="$1$2"');
    // Cache-busting: browsers always fetch the newest text/design after a change
    const v = Date.now().toString(36);
    html = html.replace(/(href|src)="(style\.css|content\.js|site\.js)"/g, '$1="$2?v=' + v + '"');
    if (lang === "en") {
      html = html
        .replace(/srcset="jelena\.webp"/g, 'srcset="../jelena.webp"')
        .replace(/src="jelena\.jpg"/g, 'src="../jelena.jpg"')
        .replace(/(href|src)="(style\.css|content\.js|site\.js|icon\.png|favicon-[0-9]+\.png)(\?v=[a-z0-9]+)?"/g, '$1="../$2$3"');
    }
    const file = path.join(OUT, lang === "en" ? "en" : "", (page.slug || "index") + ".html");
    fs.writeFileSync(file, html);
    window.close();
  }
}

// Static files
for (const f of ["style.css", "content.js", "site.js", "CNAME", "share.jpg", "icon.png", "jelena.jpg", "jelena.webp", "live-lesson.html", "homework.html", "favicon-32.png", "favicon-64.png", "favicon-192.png"]) {
  if (fs.existsSync(path.join(ROOT, f))) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
}

// Lessons: everything in the "lessons" folder goes on the site as it is (e.g. lessons/autumn.html -> englishwithjelena.com/lessons/autumn)
if (fs.existsSync(path.join(ROOT, "lessons"))) {
  fs.cpSync(path.join(ROOT, "lessons"), path.join(OUT, "lessons"), { recursive: true });
}

// Search engine verification files (Google, Yandex, Bing) uploaded to the repository
for (const f of fs.readdirSync(ROOT)) {
  if (/^(google[0-9a-z]+\.html|yandex_[0-9a-z]+\.html|BingSiteAuth\.xml)$/i.test(f)) {
    fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
  }
}

// sitemap.xml and robots.txt
const today = new Date().toISOString().slice(0, 10);
let sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for (const lang of langs) for (const page of pages) {
  sm += `  <url>\n    <loc>${url(lang, page.slug)}</loc>\n    <lastmod>${today}</lastmod>\n`;
  for (const l of langs) sm += `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, page.slug)}"/>\n`;
  sm += `  </url>\n`;
}
sm += "</urlset>\n";
fs.writeFileSync(path.join(OUT, "sitemap.xml"), sm);
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`);

console.log("Built", langs.length * pages.length, "pages into _site/");
