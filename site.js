(function(){
  var S = window.SITE, set = S.settings;
  var lang = pickLang();

  function pickLang(){
    var forced = document.documentElement.getAttribute("data-lang");
    if (forced === "ru" || forced === "en") return forced;
    var h = (location.hash||"").replace("#","");
    if (h === "ru" || h === "en") return h;
    try { var saved = localStorage.getItem("lang"); if (saved === "ru" || saved === "en") return saved; } catch(e){}
    var nav = (navigator.language||"en").toLowerCase();
    return /^(ru|uk|lv|be|kk)/.test(nav) ? "ru" : "en";
  }
  function $(id){ return document.getElementById(id) || document.createElement("div"); }
  function get(obj, path){ return path.split(".").reduce(function(o,k){ return o ? o[k] : undefined; }, obj); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function marked(s){ return esc(s).replace(/\*(.+?)\*/g, "<mark>$1</mark>"); }
  function el(tag, cls, html){ var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function fill(id, items, make){ var box = $(id); box.innerHTML = ""; (items||[]).forEach(function(it){ box.appendChild(make(it)); }); }

  function render(){
    var T = S[lang];
    ["about","steps","offer","lesson","reviews","levels","languages","prices","faq","book","test","reviewsPage","payment"].forEach(function(k){ if (!T[k]) T[k] = { items: [], paragraphs: [], expect: [], notes: [], labels: {} }; });
    if (!T.hero) T.hero = { facts: [] };
    document.documentElement.lang = lang;
    var page = document.body.getAttribute("data-page") || "home";
    document.title = page === "reviews" ? T.reviewsPage.metaTitle : page === "payment" ? T.payment.metaTitle : (T.pages && T.pages[page]) ? T.pages[page].metaTitle : T.meta.title;
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", T.meta.description);

    document.querySelectorAll("[data-t]").forEach(function(n){
      var v = get(T, n.getAttribute("data-t")); if (v == null) return;
      n.innerHTML = marked(v);
    });
    document.querySelectorAll("[data-t-alt]").forEach(function(n){ var v = get(T, n.getAttribute("data-t-alt")); if (v) n.setAttribute("alt", v); });
    document.querySelectorAll(".lang button").forEach(function(b){ b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"); });

    fill("facts", T.hero.facts, function(f){ return el("li", null, esc(f)); });
    fill("about-text", T.about.paragraphs, function(p){ return el("p", null, marked(p)); });
    $("about-first").innerHTML = marked((T.about.paragraphs || [""])[0]);
    fill("steps", T.steps.items, function(s){ var li = el("li"); li.appendChild(el("h3", null, esc(s.title))); li.appendChild(el("p", null, marked(s.text))); return li; });
    fill("offer-list", T.offer.items, function(o){ var d = el("div"); d.appendChild(el("h3", null, esc(o.title))); d.appendChild(el("p", null, marked(o.text))); return d; });
    fill("lesson-text", T.lesson.paragraphs, function(p){ return el("p", null, marked(p)); });
    fill("expect-list", T.lesson.expect, function(x){ return el("li", null, esc(x)); });
    var rl = document.getElementById("reviews-list");
    var revItems = (rl && rl.getAttribute("data-limit") === "featured") ? T.reviews.items.filter(function(r){ return r.featured; }) : T.reviews.items;
    fill("reviews-list", revItems, function(r){
      var f = el("figure", "review" + (r.featured ? " featured" : ""));
      f.appendChild(el("blockquote", null, esc(r.text)));
      f.appendChild(el("figcaption", null, esc(r.name) + (r.date ? "<span>" + esc(r.date) + "</span>" : "")));
      return f;
    });
    fill("faq-list", T.faq ? T.faq.items : [], function(f){
      var d = el("details"); d.appendChild(el("summary", null, esc(f.q))); d.appendChild(el("p", null, marked(f.a))); return d;
    });
    var n = 0;
    fill("levels-list", T.levels.items, function(l){ n++; var d = el("div","lvl"); var s = el("div","step", esc(l.code)); s.style.height = (52 + n*22) + "px"; d.appendChild(s); d.appendChild(el("div","name", esc(l.name))); return d; });
    fill("chips", T.languages.items, function(c){ return el("li", null, esc(c.name) + (c.level ? " <small>" + esc(c.level) + "</small>" : "")); });

    var pr = $("prices");
    pr.hidden = !set.showPrices;
    document.querySelectorAll(".price-nav").forEach(function(a){ a.hidden = !set.showPrices; });
    fill("price-list", T.prices.items, function(p){
      var isExam = /exam|экзам/i.test(p.tag || "");
      var d = el("article", "offer" + (isExam ? " exam" : ""));
      if (p.tag) d.appendChild(el("span","tag", esc(p.tag)));
      d.appendChild(el("h3", null, esc(p.name)));
      if (p.text) d.appendChild(el("p", null, marked(p.text)));
      d.appendChild(el("div","foot", '<span class="len">' + esc(p.length || "") + '</span><span class="price">' + esc(p.price || "") + '<small>' + esc(fx(p.price)) + '</small></span>'));
      return d;
    });

    // home: prices strip
    var nums = (T.prices.items || []).map(function(p){ return num(p.price); }).filter(function(x){ return x > 0; });
    if (nums.length) {
      var mn = Math.min.apply(null, nums);
      $("price-from").innerHTML = "£" + mn + " <small>" + esc(fx("£" + mn)) + "</small>";
    }
    fill("price-mini", T.prices.items, function(p){ return el("li", null, "<span>" + esc(p.name) + (p.tag && !/exam|экзам/i.test(p.tag) ? " · " + esc(p.tag) : "") + "</span><b>" + esc(p.price || "") + "</b>"); });

    // booking
    var has = !!(set.bookingLink && set.bookingLink.trim());
    var cal = $("calendar-btn");
    cal.hidden = !has; if (has) cal.href = set.bookingLink;
    $("soon").hidden = has;
    document.querySelectorAll(".book-link").forEach(function(a){
      if (has) { a.href = set.bookingLink; a.target = "_blank"; a.rel = "noopener"; }
      else { a.href = "#book"; a.removeAttribute("target"); }
    });

    // embedded Google calendar (only for calendar.google.com appointment links)
    var embedOk = has && /calendar\.google\.com\/calendar\/appointments/.test(set.bookingLink);
    var eb = $("embed-box"), fr = $("booking-frame");
    eb.hidden = !embedOk;
    if (embedOk) {
      var src = set.bookingLink + (set.bookingLink.indexOf("?") > -1 ? "&" : "?") + "gv=true";
      if (fr.getAttribute("src") !== src) fr.setAttribute("src", src);
    }

    // level test
    var showTest = set.showTest !== false && S.testQuestions && S.testQuestions.length;
    $("test").hidden = !showTest;
    document.querySelectorAll(".test-nav").forEach(function(a){ a.hidden = !showTest; });
    if (showTest) drawQuiz();

    // contacts
    var rows = [];
    if (set.email) rows.push(["Email", set.email, "mailto:" + set.email]);
    if (set.whatsapp) rows.push(["WhatsApp", set.whatsapp, "https://wa.me/" + set.whatsapp.replace(/[^0-9]/g,"")]);
    if (set.telegram) rows.push(["Telegram", "@" + set.telegram.replace("@",""), "https://t.me/" + set.telegram.replace("@","")]);
    if (set.instagram) rows.push(["Instagram", "@" + set.instagram.replace("@",""), "https://instagram.com/" + set.instagram.replace("@","")]);
    $("contact-box").hidden = rows.length === 0;
    fill("contacts", rows, function(r){
      var li = el("li");
      li.appendChild(el("span","k", r[0]));
      var a = el("a", null, esc(r[1])); a.href = r[2]; if (r[2].indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      li.appendChild(a);
      var b = el("button","copy", esc(T.book.copy)); b.type = "button";
      b.addEventListener("click", function(){
        var done = function(){ b.textContent = T.book.copied; setTimeout(function(){ b.textContent = T.book.copy; }, 1600); };
        try { navigator.clipboard.writeText(r[1]).then(done, function(){ selectText(a); }); } catch(e){ selectText(a); }
      });
      li.appendChild(b);
      return li;
    });
    // ---------- reviews page: form ----------
    var ff = (set.feedbackForm || "").trim();
    $("feedback-embed").hidden = !ff;
    $("feedback-soon").hidden = !!ff;
    if (ff) { var fr2 = $("feedback-frame"); if (fr2.getAttribute("src") !== ff) fr2.setAttribute("src", ff); }
    var fe = $("feedback-email"); fe.textContent = set.email || ""; fe.href = "mailto:" + (set.email || "");

    // ---------- payment page ----------
    var links = set.payLinks || {}, anyLink = false;
    fill("pay-list", T.prices.items, function(p){
      var li = el("li");
      var info = el("div", "pay-info", "<b>" + esc(p.name) + "</b><span>" + esc(p.tag || "") + (p.length ? " · " + esc(p.length) : "") + "</span>");
      li.appendChild(info);
      li.appendChild(el("span", "pay-price", esc(p.price || "") + "<small>" + esc(fx(p.price)) + "</small>"));
      var link = (links[p.id] || "").trim();
      if (link) {
        anyLink = true;
        var a = el("a", "btn btn-hl btn-sm", esc(T.payment.payButton)); a.href = link; a.target = "_blank"; a.rel = "noopener";
        li.appendChild(a);
      }
      return li;
    });
    $("no-card").hidden = anyLink;
    var bank = set.bank || {}, L2 = T.payment.labels, bankRows = [];
    ["holder","sortCode","account","iban","bic"].forEach(function(k){ if (bank[k]) bankRows.push([L2[k], bank[k], true]); });
    if (bankRows.length) bankRows.push([L2.reference, T.payment.reference, false]);
    $("bank-soon").hidden = bankRows.length > 0;
    fill("bank-rows", bankRows, function(r){
      var li = el("li");
      li.appendChild(el("span", "k", esc(r[0])));
      var v = el("span", "v", esc(r[1])); li.appendChild(v);
      if (r[2]) li.appendChild(copyBtn(r[1], v, T));
      return li;
    });
    fill("pay-notes", T.payment.notes, function(n){ return el("li", null, marked(n)); });

    // floating Telegram button on every page
    var tgBtn = document.getElementById("tg-float");
    if (set.telegram) {
      if (!tgBtn) { tgBtn = el("a", "tg-float"); tgBtn.id = "tg-float"; tgBtn.target = "_blank"; tgBtn.rel = "noopener"; document.body.appendChild(tgBtn); }
      tgBtn.href = "https://t.me/" + set.telegram.replace("@","");
      tgBtn.setAttribute("aria-label", "Telegram @" + set.telegram.replace("@",""));
      tgBtn.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M9.8 15.3l-.4 5.3c.6 0 .8-.2 1.1-.5l2.6-2.5 5.4 4c1 .5 1.7.3 2-.9l3.6-17c.3-1.5-.5-2.1-1.5-1.7L1.4 9.9C0 10.4 0 11.3 1.2 11.6l5.4 1.7L19 5.5c.6-.4 1.1-.2.7.2"/></svg><span>Telegram</span>';
    }


    // ---------- new home page ----------
    renderFront(T);
    $("year").textContent = new Date().getFullYear();
  }

  var ICONS = {
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/><path d="M22 9v6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    cert: '<rect x="4" y="3" width="16" height="13" rx="2"/><path d="M8 8h8M8 11h5"/><circle cx="15" cy="17" r="3"/><path d="M13.5 19.5L13 22l2-1 2 1-.5-2.5"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    book: '<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v14c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v14"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z"/><path d="M12 10c0-3 2-5 6-5 0 3-2 5-6 5z"/>',
    tutorful: '<circle cx="12" cy="12" r="9"/><path d="M8 9h8M12 9v8"/>',
    preply: '<circle cx="12" cy="12" r="9"/><path d="M9 17V7h4a3 3 0 010 6H9"/>',
    threads: '<circle cx="12" cy="12" r="9"/><path d="M15.5 10.5c-.5-2-2-3-3.8-3-2.6 0-4.2 2-4.2 4.5s1.6 4.5 4.2 4.5c2 0 3.3-1 3.3-2.6 0-1.8-1.6-2.4-3.2-2.4-1.3 0-2.3.6-2.3 1.6 0 .8.7 1.4 1.8 1.4"/>'
  };
  function icon(name){ return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || "") + '</svg>'; }

  function renderFront(T){
    var F = T.front; if (!F) return;
    fill("facts2", F.facts, function(f){
      return el("li", null, icon(f.icon) + "<span><b>" + esc(f.title) + "</b>" + (f.sub ? "<small>" + esc(f.sub) + "</small>" : "") + "</span>");
    });
    $("m-wrong").textContent = F.marginWrong || ""; $("m-right").textContent = F.marginRight || "";
    fill("dir-list", F.directions.items, function(d){
      var a = el("article", "dir");
      a.appendChild(el("div", "dir-ic", icon(d.icon)));
      a.appendChild(el("h3", null, esc(d.title)));
      a.appendChild(el("p", "q", esc(d.q)));
      a.appendChild(el("p", null, marked(d.text)));
      if (d.link) { var m = el("a", "dir-more", esc(F.directions.more) + " →"); m.href = d.link; a.appendChild(m); }
      return a;
    });
    fill("how-points", F.how.points, function(p){ return el("li", null, esc(p)); });
    var pre = location.pathname.indexOf("/en/") === 0 ? "../" : "";
    fill("peek-list", F.peek.cards, function(c){
      var a = el("article", "peek");
      var img = el("img"); img.src = pre + c.img; img.alt = ""; img.loading = "lazy"; img.width = 800; img.height = 500;
      var link = el("a", "peek-img"); link.href = c.href; link.appendChild(img); a.appendChild(link);
      var b = el("div", "peek-body");
      b.appendChild(el("h3", null, esc(c.title)));
      b.appendChild(el("p", "meta", esc(c.meta)));
      b.appendChild(el("p", null, esc(c.text)));
      var o = el("a", "btn btn-line btn-sm", esc(F.peek.open) + " →"); o.href = c.href; b.appendChild(o);
      a.appendChild(b);
      return a;
    });
    fill("home-reviews-list", (T.reviews.items || []).filter(function(r){ return r.home; }), function(r){
      var f = el("figure", "review");
      f.appendChild(el("blockquote", null, esc(r.text)));
      f.appendChild(el("figcaption", null, esc(r.name) + (r.role ? "<span>" + esc(r.role) + "</span>" : "")));
      return f;
    });
    var ch = (set.telegramChannel || "").trim();
    $("word-more-box").hidden = !ch; if (ch) $("word-more").href = ch;
    var cb = $("club-btn"), form = (set.clubForm || "").trim();
    cb.href = form || (set.telegram ? "https://t.me/" + set.telegram.replace("@","") : "book.html");
    var pf = set.profiles || {}, rows = [];
    if (set.telegram) rows.push(["Telegram", "https://t.me/" + set.telegram.replace("@",""), "chat"]);
    if (pf.preply) rows.push(["Preply", pf.preply, "preply"]);
    if (pf.tutorful) rows.push(["Tutorful", pf.tutorful, "tutorful"]);
    if (pf.threads) rows.push(["Threads", pf.threads, "threads"]);
    fill("profiles", rows, function(r){ var a = el("a", null, icon(r[2]) + "<span>" + r[0] + "</span>"); a.href = r[1]; a.target = "_blank"; a.rel = "noopener"; return a; });
  }
  // ---------- level test ----------
  var quiz = { step: -1, picks: [] };
  function drawQuiz(){
    var T = S[lang], L = T.test, Q = S.testQuestions, box = $("quiz");
    box.innerHTML = "";
    if (quiz.step < 0) {
      var ul = el("ul","intro-list"); ["A1","A2","B1","B2","C1","C2"].forEach(function(c){ ul.appendChild(el("li",null,c)); });
      box.appendChild(ul);
      box.appendChild(el("p","note", esc(L.text)));
      var st = el("button","btn btn-hl", esc(L.start)); st.type = "button"; st.id = "quiz-start";
      st.addEventListener("click", function(){ quiz.step = 0; quiz.picks = []; drawQuiz(); });
      var r = el("div","row"); r.appendChild(st); box.appendChild(r);
      return;
    }
    if (quiz.step < Q.length) {
      var item = Q[quiz.step];
      var pr = el("div","progress"); var bar = el("i"); bar.style.width = (quiz.step / Q.length * 100) + "%"; pr.appendChild(bar); box.appendChild(pr);
      box.appendChild(el("div","count", esc(L.question) + " " + (quiz.step+1) + " " + esc(L.of) + " " + Q.length));
      box.appendChild(el("p","q", esc(item.q).replace("___", "<span style=\"border-bottom:2px solid var(--margin);display:inline-block;min-width:3em\">&nbsp;</span>")));
      var opts = el("div","opts");
      var nx = el("button","btn btn-hl", esc(L.next) + " →"); nx.type = "button"; nx.id = "quiz-next";
      nx.disabled = quiz.picks[quiz.step] == null;
      item.options.forEach(function(o, idx){
        var b = el("button","opt", esc(o)); b.type = "button";
        b.setAttribute("aria-pressed", quiz.picks[quiz.step] === idx ? "true" : "false");
        b.addEventListener("click", function(){
          quiz.picks[quiz.step] = idx;
          opts.querySelectorAll(".opt").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
          b.setAttribute("aria-pressed","true"); nx.disabled = false;
        });
        opts.appendChild(b);
      });
      box.appendChild(opts);
      nx.addEventListener("click", function(){ quiz.step++; drawQuiz(); });
      var r2 = el("div","row"); r2.appendChild(nx); box.appendChild(r2);
      return;
    }
    // result
    var score = 0; Q.forEach(function(item, idx){ if (quiz.picks[idx] === item.answer) score++; });
    var code = "A1"; (S.testLevels||[]).forEach(function(l){ if (score >= l.min) code = l.code; });
    var lv = (T.levels.items||[]).filter(function(x){ return x.code === code; })[0];
    box.appendChild(el("div","count", esc(L.resultLabel)));
    box.appendChild(el("div","big", esc(code) + "<small>" + esc(lv ? lv.name : "") + "</small>"));
    box.appendChild(el("p", null, "<b>" + score + " / " + Q.length + "</b> " + esc(L.scoreText)));
    box.appendChild(el("p","note", esc(L.resultNote)));
    var row = el("div","row");
    var bk = el("a","btn btn-hl", esc(L.book));
    bk.href = "book.html";
    row.appendChild(bk);
    var msg = L.messageText + code + " (" + score + "/" + Q.length + ")";
    var sendHref = set.whatsapp ? "https://wa.me/" + set.whatsapp.replace(/[^0-9]/g,"") + "?text=" + encodeURIComponent(msg)
                 : set.telegram ? "https://t.me/" + set.telegram.replace("@","") + "?text=" + encodeURIComponent(msg)
                 : set.email ? "mailto:" + set.email + "?subject=" + encodeURIComponent("English test: " + code) + "&body=" + encodeURIComponent(msg) : "";
    var viaTg = !set.whatsapp && !!set.telegram;
    if (sendHref) { var sd = el("a", viaTg ? "btn btn-tg" : "btn btn-line", (viaTg ? '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M9.8 15.3l-.4 5.3c.6 0 .8-.2 1.1-.5l2.6-2.5 5.4 4c1 .5 1.7.3 2-.9l3.6-17c.3-1.5-.5-2.1-1.5-1.7L1.4 9.9C0 10.4 0 11.3 1.2 11.6l5.4 1.7L19 5.5c.6-.4 1.1-.2.7.2"/></svg>' : "") + esc(L.send) + (viaTg ? (lang === "ru" ? " в Telegram" : " on Telegram") : "")); sd.href = sendHref; if (sendHref.indexOf("http") === 0) { sd.target = "_blank"; sd.rel = "noopener"; } row.appendChild(sd); }
    box.appendChild(row);
    var ag = el("button","opt", "↺ " + esc(L.again)); ag.type = "button"; ag.style.alignSelf = "flex-start";
    ag.addEventListener("click", function(){ quiz.step = 0; quiz.picks = []; drawQuiz(); });
    box.appendChild(ag);
  }

  function num(price){ var m = String(price || "").match(/[0-9]+(\.[0-9]+)?/); return m ? parseFloat(m[0]) : 0; }
  function fx(price){
    var n = num(price), r = set.rates || {};
    if (!n || !/£/.test(String(price))) return "";
    var out = [];
    if (r.EUR) out.push("€" + Math.round(n * r.EUR));
    if (r.USD) out.push("$" + Math.round(n * r.USD));
    return out.length ? "≈ " + out.join(" · ") : "";
  }
  function copyBtn(text, node, T){
    var b = el("button", "copy", esc(T.book.copy)); b.type = "button";
    b.addEventListener("click", function(){
      var done = function(){ b.textContent = T.book.copied; setTimeout(function(){ b.textContent = T.book.copy; }, 1600); };
      try { navigator.clipboard.writeText(text).then(done, function(){ selectText(node); }); } catch(e){ selectText(node); }
    });
    return b;
  }
  function selectText(node){ var r = document.createRange(); r.selectNodeContents(node); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }

  document.querySelectorAll(".lang button").forEach(function(b){
    b.addEventListener("click", function(){ lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch(e){} render(); });
  });
  render();
})();

/* Day / night switch: remembers the choice; otherwise follows the device setting */
(function(){
  var b = document.getElementById("theme-btn");
  if (!b) return;
  b.addEventListener("click", function(){
    var root = document.documentElement;
    var cur = root.getAttribute("data-theme") || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch(e){}
  });
})();
