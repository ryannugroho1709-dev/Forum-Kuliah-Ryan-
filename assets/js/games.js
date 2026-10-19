/* =====================================================================
   PERMAINAN & LATIHAN
   PG (pilihan ganda), BS (benar/salah), Jodoh (menjodohkan), Urut,
   Isian (lengkapi kalimat), Pilah (kelompokkan), Kartu (flashcard),
   Tugas (soal wajib esai), serta mode Arena (ujian, tahan uji, kilat).
   ===================================================================== */
window.Games = (function () {
  const { bi, one, esc, shuffle, arNum } = U;
  const lab = (id, ar) => Render.label(id, ar);
  const n = x => U.lang === "ar" ? arNum(x) : x;

  /* ---------- Kerangka umum ---------- */
  function shell(root, o) {
    root.innerHTML = '<div class="game ' + (o.cls || "") + '">' +
      '<div class="g-top"><div class="g-prog"><i style="width:0%"></i></div>' +
      '<div class="g-stat"><span class="g-count"></span><span class="g-combo" hidden>' + Icon("flame") + '<b>0</b></span><span class="g-score">' + Icon("star8") + "<b>0</b></span>" +
      (o.lives ? '<span class="g-lives"></span>' : "") + (o.timer ? '<span class="g-timer">' + Icon("timer") + "<b></b></span>" : "") + "</div></div>" +
      '<div class="g-stage"></div></div>';
    const g = {
      el: root.querySelector(".game"), stage: root.querySelector(".g-stage"),
      prog(i, t) { root.querySelector(".g-prog i").style.width = (t ? Math.round(i / t * 100) : 0) + "%"; root.querySelector(".g-count").textContent = t ? n(Math.min(i + 1, t)) + " / " + n(t) : n(i + 1); },
      score(v) { const b = root.querySelector(".g-score b"); b.textContent = n(v); b.parentNode.classList.remove("bump"); void b.offsetWidth; b.parentNode.classList.add("bump"); },
      combo(v) { const c = root.querySelector(".g-combo"); c.hidden = v < 2; c.querySelector("b").textContent = "×" + n(v); if (v >= 3) { c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump"); } },
      lives(v, max) { const l = root.querySelector(".g-lives"); if (l) l.innerHTML = Array.from({ length: max }, (_, i) => Icon("lantern", i < v ? "on" : "off")).join(""); },
      timer(sec) { const t = root.querySelector(".g-timer b"); if (t) { t.textContent = fmtTime(sec); t.parentNode.classList.toggle("warn", sec <= 10); } }
    };
    return g;
  }
  const fmtTime = s => { s = Math.max(0, Math.ceil(s)); const m = Math.floor(s / 60), d = s % 60; return n(m) + ":" + n(String(d).padStart(2, "0")); };

  function stars(pct) { return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0; }
  function burst(el) {
    if (!Store.s.set.gerak) return;
    const box = document.createElement("div"); box.className = "burst";
    for (let i = 0; i < 26; i++) {
      const s = document.createElement("i");
      s.style.setProperty("--a", (i / 26 * 360) + "deg"); s.style.setProperty("--r", (90 + Math.random() * 120) + "px"); s.style.setProperty("--d", (Math.random() * 0.25) + "s");
      s.innerHTML = Icon("star8"); box.appendChild(s);
    }
    el.appendChild(box); setTimeout(() => box.remove(), 1800);
  }

  function result(root, r) {
    const pct = r.total ? Math.round(r.benar / r.total * 100) : 0, st = stars(pct);
    const msg = pct >= 90 ? ["Mumtaz! Luar biasa.", "ممتاز! بارك الله فيك"] : pct >= 70 ? ["Jayyid jiddan! Hampir sempurna.", "جيد جدًا"] : pct >= 40 ? ["Jayyid. Terus berlatih.", "جيد، واصل التدريب"] : ["Jangan menyerah — ulangi materinya ya.", "لا تيأس، راجع الدرس"];
    root.innerHTML = '<div class="g-result">' +
      '<div class="gr-stars">' + [0, 1, 2].map(i => '<span class="' + (i < st ? "on" : "") + '" style="--i:' + i + '">' + Icon("star8") + "</span>").join("") + "</div>" +
      '<div class="gr-pct"><b>' + n(pct) + "</b>%</div>" +
      '<div class="gr-msg">' + lab(msg[0], msg[1]) + "</div>" +
      '<div class="gr-meta">' + lab(n(r.benar) + " dari " + n(r.total) + " benar", n(r.benar) + " من " + n(r.total)) + (r.xp ? ' · <span class="xp-chip">+' + n(r.xp) + " XP</span>" : "") + (r.durasi ? " · " + fmtTime(r.durasi) : "") + "</div>" +
      (r.salah && r.salah.length ? '<details class="gr-rev"><summary>' + Icon("eye") + lab("Tinjau jawaban yang keliru (" + r.salah.length + ")", "مراجعة الأخطاء") + "</summary>" +
        r.salah.map(s => '<div class="rev-item"><div class="rev-q">' + bi(s.q) + '</div><div class="rev-a">' + Icon("check") + one(s.benar) + "</div>" + (s.b ? '<div class="rev-b">' + bi(s.b) + "</div>" : "") + "</div>").join("") + "</details>" : "") +
      '<div class="gr-act"><button class="btn" data-act="ulang">' + Icon("refresh") + lab("Ulangi", "أعد") + "</button>" + (r.next ? '<button class="btn gold" data-act="next">' + lab(r.next.label, r.next.ar || "التالي") + Icon("arrowRight") + "</button>" : "") + "</div></div>";
    Audio2.sfx(pct >= 70 ? "done" : pct >= 40 ? "good" : "bad");
    if (pct >= 80) burst(root.querySelector(".g-result"));
    root.querySelector('[data-act="ulang"]').onclick = () => { Audio2.sfx("tap"); r.ulang(); };
    const nx = root.querySelector('[data-act="next"]'); if (nx) nx.onclick = () => { Audio2.sfx("tap"); r.next.fn(); };
  }

  /* ---------- Pilihan ganda (juga dipakai Arena) ---------- */
  function pg(root, items, opt) {
    opt = opt || {};
    const qs = (opt.acak === false ? items : shuffle(items)).map(q => {
      const order = shuffle(q.o.map((_, k) => k));
      return Object.assign({}, q, { order });
    });
    let i = 0, benar = 0, combo = 0, lives = opt.lives || 0, salah = [], t0 = Date.now(), tLeft = opt.waktu || 0, tick = null, locked = false;
    const g = shell(root, { cls: "g-pg", timer: !!opt.waktu, lives: !!opt.lives });
    if (opt.lives) g.lives(lives, opt.lives);
    if (opt.waktu) { g.timer(tLeft); tick = setInterval(() => { tLeft -= 1; g.timer(tLeft); if (tLeft <= 5 && tLeft > 0) Audio2.sfx("tick"); if (tLeft <= 0) { clearInterval(tick); finish(); } }, 1000); }

    function show() {
      if (i >= qs.length) return finish();
      locked = false;
      const q = qs[i];
      g.prog(i, opt.lives ? 0 : qs.length);
      g.stage.innerHTML = '<div class="q-card swap-in">' + (q.src ? '<div class="q-src">' + esc(q.src) + "</div>" : "") +
        '<div class="q-text">' + bi(q.q) + "</div>" +
        '<div class="q-opts">' + q.order.map((k, idx) => '<button class="opt" data-k="' + k + '"><span class="opt-l">' + (U.lang === "ar" ? "أبجد"[idx] || idx + 1 : "ABCDE"[idx]) + '</span><span class="opt-t">' + one(q.o[k]) + "</span></button>").join("") + "</div>" +
        '<div class="q-feed" hidden></div></div>';
      g.stage.querySelectorAll(".opt").forEach(b => b.onclick = () => answer(+b.dataset.k, b));
    }
    function answer(k, btn) {
      if (locked) return; locked = true;
      const q = qs[i], ok = k === q.j;
      g.stage.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (+b.dataset.k === q.j) b.classList.add("ok"); });
      if (ok) { benar++; combo++; g.score(benar); g.combo(combo); Audio2.sfx(combo >= 3 ? "combo" : "good"); }
      else {
        btn.classList.add("no"); combo = 0; g.combo(0); Audio2.sfx("bad"); Audio2.vibrate(80);
        salah.push({ q: q.q, benar: q.o[q.j], b: q.b });
        if (opt.lives) { lives--; g.lives(lives, opt.lives); }
      }
      const fb = g.stage.querySelector(".q-feed");
      fb.hidden = false;
      fb.className = "q-feed " + (ok ? "ok" : "no");
      fb.innerHTML = '<div class="qf-h">' + Icon(ok ? "checkCircle" : "xCircle") + (ok ? lab(pickPraise(), "أحسنت") : lab("Kurang tepat", "إجابة غير صحيحة")) + "</div>" + (q.b ? bi(q.b) : "") +
        '<button class="btn sm gold qf-next">' + (opt.lives && lives <= 0 ? lab("Lihat hasil", "النتيجة") : lab("Lanjut", "التالي")) + Icon("arrowRight") + "</button>";
      const go = () => { i++; if (opt.lives && lives <= 0) return finish(); if (opt.lives && i >= qs.length) { qs.push(...shuffle(items).map(q2 => Object.assign({}, q2, { order: shuffle(q2.o.map((_, z) => z)) }))); } show(); };
      fb.querySelector(".qf-next").onclick = () => { Audio2.sfx("tap"); go(); };
      fb.querySelector(".qf-next").focus({ preventScroll: true });
      if (opt.auto && ok) setTimeout(() => { if (g.stage.contains(fb)) go(); }, 900);
    }
    function finish() {
      clearInterval(tick);
      const total = opt.lives ? i : qs.length;
      const r = { benar, total: Math.max(total, 1), salah, durasi: (Date.now() - t0) / 1000 };
      if (opt.onDone) Object.assign(r, opt.onDone(r) || {});
      r.ulang = () => pg(root, items, opt);
      result(root, r);
    }
    root._key = e => {
      if (!g.stage.isConnected) return;
      const btns = g.stage.querySelectorAll(".opt"); const k = parseInt(e.key, 10);
      if (k >= 1 && k <= btns.length && !locked) btns[k - 1].click();
      if (e.key === "Enter" && locked) { const nx = g.stage.querySelector(".qf-next"); if (nx) nx.click(); }
    };
    show();
    return { stop() { clearInterval(tick); } };
  }
  const PRAISE = ["Tepat sekali!", "Masya Allah, benar!", "Bagus!", "Benar!", "Mantap!"];
  const pickPraise = () => PRAISE[Math.floor(Math.random() * PRAISE.length)];

  /* Ubah soal benar/salah menjadi format pilihan ganda (untuk Arena) */
  const bsToPg = s => ({ q: s.t, o: [{ id: "Benar", ar: "صحيح" }, { id: "Salah", ar: "خطأ" }], j: s.j ? 0 : 1, b: s.b, src: s.src, bs: true });

  /* ---------- Benar / Salah ---------- */
  function bs(root, items, opt) {
    opt = opt || {};
    const qs = shuffle(items);
    let i = 0, benar = 0, combo = 0, salah = [], t0 = Date.now(), tLeft = opt.waktu || 0, tick = null, locked = false;
    const g = shell(root, { cls: "g-bs", timer: !!opt.waktu });
    if (opt.waktu) { g.timer(tLeft); tick = setInterval(() => { tLeft--; g.timer(tLeft); if (tLeft <= 5 && tLeft > 0) Audio2.sfx("tick"); if (tLeft <= 0) { clearInterval(tick); finish(); } }, 1000); }
    function show() {
      if (i >= qs.length) { if (opt.waktu && tLeft > 0) { qs.push(...shuffle(items)); } else return finish(); }
      locked = false;
      const q = qs[i];
      g.prog(i, opt.waktu ? 0 : qs.length);
      g.stage.innerHTML = '<div class="bs-card swap-in">' + (q.src ? '<div class="q-src">' + esc(q.src) + "</div>" : "") + '<div class="q-text">' + bi(q.t) + "</div></div>" +
        '<div class="bs-btns"><button class="btn bs-t" data-v="1">' + Icon("check") + lab("Benar", "صحيح") + '</button><button class="btn bs-f" data-v="0">' + Icon("x") + lab("Salah", "خطأ") + "</button></div>" +
        '<div class="q-feed" hidden></div>';
      g.stage.querySelectorAll(".bs-btns .btn").forEach(b => b.onclick = () => answer(b.dataset.v === "1"));
    }
    function answer(v) {
      if (locked) return; locked = true;
      const q = qs[i], ok = v === !!q.j;
      const card = g.stage.querySelector(".bs-card");
      card.classList.add(ok ? "fly-ok" : "shake");
      g.stage.querySelectorAll(".bs-btns .btn").forEach(b => { b.disabled = true; if ((b.dataset.v === "1") === !!q.j) b.classList.add("ok"); });
      if (ok) { benar++; combo++; g.score(benar); g.combo(combo); Audio2.sfx(combo >= 3 ? "combo" : "good"); }
      else { combo = 0; g.combo(0); Audio2.sfx("bad"); Audio2.vibrate(80); salah.push({ q: q.t, benar: q.j ? { id: "Benar", ar: "صحيح" } : { id: "Salah", ar: "خطأ" }, b: q.b }); }
      const fb = g.stage.querySelector(".q-feed");
      if (opt.waktu) { setTimeout(() => { i++; show(); }, ok ? 350 : 900); return; }
      fb.hidden = false; fb.className = "q-feed " + (ok ? "ok" : "no");
      fb.innerHTML = '<div class="qf-h">' + Icon(ok ? "checkCircle" : "xCircle") + (ok ? lab(pickPraise(), "أحسنت") : lab("Kurang tepat", "غير صحيح")) + "</div>" + (q.b ? bi(q.b) : "") + '<button class="btn sm gold qf-next">' + lab("Lanjut", "التالي") + Icon("arrowRight") + "</button>";
      fb.querySelector(".qf-next").onclick = () => { Audio2.sfx("tap"); i++; show(); };
    }
    function finish() {
      clearInterval(tick);
      const r = { benar, total: Math.max(opt.waktu ? i : qs.length, 1), salah, durasi: (Date.now() - t0) / 1000 };
      if (opt.onDone) Object.assign(r, opt.onDone(r) || {});
      r.ulang = () => bs(root, items, opt);
      result(root, r);
    }
    root._key = e => {
      if (locked) { if (e.key === "Enter") { const nx = g.stage.querySelector(".qf-next"); if (nx) nx.click(); } return; }
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "b") answer(true);
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "s") answer(false);
    };
    show();
    return { stop() { clearInterval(tick); } };
  }

  /* ---------- Menjodohkan ---------- */
  function jodoh(root, pairs, opt) {
    opt = opt || {};
    const P = pairs.map((p, k) => ({ k, a: p.a, b: p.b }));
    const left = shuffle(P), right = shuffle(P);
    let sel = null, done = 0, salahN = 0, firstTry = new Set(P.map(p => p.k)), t0 = Date.now();
    const g = shell(root, { cls: "g-jodoh" });
    g.prog(0, P.length);
    g.stage.innerHTML = '<p class="g-hint">' + Icon("puzzle") + lab("Pilih satu istilah, lalu pasangkan dengan penjelasannya.", "اختر مصطلحًا ثم صِلْه بمعناه") + "</p>" +
      '<div class="jd-grid"><div class="jd-col">' + left.map(p => '<button class="jd a" data-k="' + p.k + '">' + one(p.a) + "</button>").join("") + "</div>" +
      '<div class="jd-col">' + right.map(p => '<button class="jd b" data-k="' + p.k + '">' + one(p.b) + "</button>").join("") + "</div></div>";
    const colors = 6;
    g.stage.querySelectorAll(".jd").forEach(btn => btn.onclick = () => {
      if (btn.classList.contains("done")) return;
      const side = btn.classList.contains("a") ? "a" : "b";
      if (!sel || sel.side === side) {
        g.stage.querySelectorAll(".jd.sel").forEach(x => x.classList.remove("sel"));
        btn.classList.add("sel"); sel = { side, btn, k: +btn.dataset.k }; Audio2.sfx("tap"); return;
      }
      if (+btn.dataset.k === sel.k) {
        const c = "c" + (done % colors);
        [btn, sel.btn].forEach(x => { x.classList.remove("sel"); x.classList.add("done", c); });
        done++; Audio2.sfx("good"); g.score(done - 0); g.prog(done, P.length);
        if (done === P.length) setTimeout(finish, 600);
      } else {
        salahN++; firstTry.delete(sel.k); firstTry.delete(+btn.dataset.k);
        [btn, sel.btn].forEach(x => { x.classList.add("shake"); setTimeout(() => x.classList.remove("shake", "sel"), 500); });
        Audio2.sfx("bad"); Audio2.vibrate(60);
      }
      sel = null;
    });
    function finish() {
      const benar = Math.max(0, P.length - salahN);
      const r = { benar, total: P.length, salah: [], durasi: (Date.now() - t0) / 1000 };
      if (opt.onDone) Object.assign(r, opt.onDone(r) || {});
      r.ulang = () => jodoh(root, pairs, opt);
      result(root, r);
    }
  }

  /* ---------- Menyusun urutan ---------- */
  function urut(root, data, opt) {
    opt = opt || {};
    const items = data.item.map((t, k) => ({ k, t }));
    let pool = shuffle(items), seq = [], t0 = Date.now();
    if (pool.every((p, i) => p.k === i)) pool = pool.reverse();
    const g = shell(root, { cls: "g-urut" });
    g.prog(0, items.length);
    function draw(checked) {
      g.stage.innerHTML = '<div class="q-text">' + bi(data.t) + "</div>" +
        '<ol class="ur-seq">' + items.map((_, i) => { const it = seq[i]; return '<li class="ur-slot ' + (it ? "fill" : "") + (checked ? (it && it.k === i ? " ok" : " no") : "") + '" data-i="' + i + '"><span class="ur-n">' + n(i + 1) + "</span>" + (it ? '<span class="ur-t">' + one(it.t) + "</span>" : '<span class="ur-e">…</span>') + "</li>"; }).join("") + "</ol>" +
        '<div class="ur-pool">' + pool.map(p => '<button class="chip" data-k="' + p.k + '">' + one(p.t) + "</button>").join("") + "</div>" +
        '<div class="g-act">' + (checked ? "" : '<button class="btn ghost sm ur-reset">' + Icon("refresh") + lab("Atur ulang", "إعادة") + '</button><button class="btn gold ur-cek" ' + (seq.length < items.length ? "disabled" : "") + ">" + Icon("check") + lab("Periksa", "تحقق") + "</button>") + "</div>";
      if (checked) return;
      g.stage.querySelectorAll(".ur-pool .chip").forEach(c => c.onclick = () => { const k = +c.dataset.k; seq.push(pool.find(p => p.k === k)); pool = pool.filter(p => p.k !== k); Audio2.sfx("pop"); g.prog(seq.length, items.length); draw(); });
      g.stage.querySelectorAll(".ur-slot.fill").forEach(s => s.onclick = () => { const i = +s.dataset.i; pool.push(seq[i]); seq.splice(i, 1); Audio2.sfx("tap"); draw(); });
      g.stage.querySelector(".ur-reset").onclick = () => { pool = shuffle(items); seq = []; draw(); };
      g.stage.querySelector(".ur-cek").onclick = () => {
        const benar = seq.filter((it, i) => it.k === i).length;
        draw(true);
        Audio2.sfx(benar === items.length ? "good" : "bad");
        setTimeout(() => {
          const r = { benar, total: items.length, salah: benar === items.length ? [] : [{ q: data.t, benar: { id: data.item.map((t, i) => (i + 1) + ". " + U.pickId(t)).join(" → "), ar: data.item.map((t, i) => arNum(i + 1) + ". " + U.pickAr(t)).join(" ← ") } }], durasi: (Date.now() - t0) / 1000 };
          if (opt.onDone) Object.assign(r, opt.onDone(r) || {});
          r.ulang = () => urut(root, data, opt);
          result(root, r);
        }, 1600);
      };
    }
    draw();
  }

  /* ---------- Lengkapi kalimat ---------- */
  function isian(root, items, opt) {
    opt = opt || {};
    const qs = shuffle(items);
    let i = 0, benar = 0, salah = [], t0 = Date.now(), locked = false;
    const g = shell(root, { cls: "g-isian" });
    const ar = () => U.lang === "ar";
    function sentence(q, fill, state) {
      const src = ar() ? U.pickAr(q.t) : U.pickId(q.t);
      const blank = '<span class="blank ' + (state || "") + '">' + (fill ? one(fill, ar() ? "ar" : "id") : "&nbsp;") + "</span>";
      const html = (ar() ? U.arFmt(src) : U.fmt(src)).replace(/_{3,}/, blank);
      return '<div class="' + (ar() ? "t-ar" : "t-id") + ' isi-s" ' + (ar() ? 'dir="rtl" lang="ar"' : "") + "><p>" + html + "</p></div>" +
        (U.lang === "dual" && q.t.ar ? '<div class="t-ar isi-s2" dir="rtl" lang="ar"><p>' + U.arFmt(q.t.ar).replace(/_{3,}/, '<span class="blank sm">…</span>') + "</p></div>" : "");
    }
    function show() {
      if (i >= qs.length) return finish();
      locked = false;
      const q = qs[i]; g.prog(i, qs.length);
      const chips = shuffle([q.j].concat(q.x || []));
      g.stage.innerHTML = '<div class="q-card swap-in"><p class="g-hint">' + Icon("pen") + lab("Lengkapi bagian yang kosong.", "أكمل الفراغ") + "</p>" + '<div class="isi-box">' + sentence(q) + "</div>" +
        '<div class="isi-chips">' + chips.map((c, k) => '<button class="chip" data-k="' + k + '">' + one(c) + "</button>").join("") + '</div><div class="q-feed" hidden></div></div>';
      g.stage.querySelectorAll(".isi-chips .chip").forEach((b, k) => b.onclick = () => {
        if (locked) return; locked = true;
        const c = chips[k], ok = c === q.j;
        g.stage.querySelector(".isi-box").innerHTML = sentence(q, q.j, ok ? "ok" : "no");
        g.stage.querySelectorAll(".isi-chips .chip").forEach((x, z) => { x.disabled = true; if (chips[z] === q.j) x.classList.add("ok"); });
        if (ok) { benar++; g.score(benar); Audio2.sfx("good"); } else { b.classList.add("no"); Audio2.sfx("bad"); Audio2.vibrate(60); salah.push({ q: q.t, benar: q.j, b: q.b }); }
        const fb = g.stage.querySelector(".q-feed"); fb.hidden = false; fb.className = "q-feed " + (ok ? "ok" : "no");
        fb.innerHTML = (q.b ? bi(q.b) : "") + '<button class="btn sm gold qf-next">' + lab("Lanjut", "التالي") + Icon("arrowRight") + "</button>";
        fb.querySelector(".qf-next").onclick = () => { Audio2.sfx("tap"); i++; show(); };
      });
    }
    function finish() {
      const r = { benar, total: qs.length, salah, durasi: (Date.now() - t0) / 1000 };
      if (opt.onDone) Object.assign(r, opt.onDone(r) || {});
      r.ulang = () => isian(root, items, opt);
      result(root, r);
    }
    show();
  }

  /* ---------- Memilah ke kategori ---------- */
  function pilah(root, data, opt) {
    opt = opt || {};
    const qs = shuffle(data.item);
    let i = 0, benar = 0, salah = [], t0 = Date.now(), locked = false;
    const g = shell(root, { cls: "g-pilah" });
    const counts = data.kategori.map(() => 0);
    function show() {
      if (i >= qs.length) return finish();
      locked = false;
      const q = qs[i]; g.prog(i, qs.length);
      g.stage.innerHTML = '<div class="q-text pl-t">' + bi(data.t) + "</div>" +
        '<div class="pl-card swap-in">' + one(q.t) + "</div>" +
        '<div class="pl-bins" style="--n:' + data.kategori.length + '">' + data.kategori.map((k, z) => '<button class="pl-bin" data-z="' + z + '"><span class="pl-c">' + n(counts[z]) + "</span>" + one(k) + "</button>").join("") + "</div>" +
        '<div class="q-feed" hidden></div>';
      g.stage.querySelectorAll(".pl-bin").forEach(b => b.onclick = () => {
        if (locked) return; locked = true;
        const z = +b.dataset.z, ok = z === q.k, card = g.stage.querySelector(".pl-card");
        g.stage.querySelectorAll(".pl-bin").forEach(x => { if (+x.dataset.z === q.k) x.classList.add("ok"); });
        if (ok) { benar++; counts[z]++; g.score(benar); Audio2.sfx("pop"); card.classList.add("drop-" + (z === 0 ? "l" : z === data.kategori.length - 1 ? "r" : "c")); setTimeout(() => { i++; show(); }, q.b ? 1100 : 650); if (q.b) { const fb = g.stage.querySelector(".q-feed"); fb.hidden = false; fb.className = "q-feed ok mini"; fb.innerHTML = bi(q.b); } }
        else {
          b.classList.add("no"); card.classList.add("shake"); Audio2.sfx("bad"); Audio2.vibrate(60); counts[q.k]++;
          salah.push({ q: q.t, benar: data.kategori[q.k], b: q.b });
          const fb = g.stage.querySelector(".q-feed"); fb.hidden = false; fb.className = "q-feed no";
          fb.innerHTML = '<div class="qf-h">' + Icon("xCircle") + lab("Seharusnya: ", "الصواب: ") + one(data.kategori[q.k]) + "</div>" + (q.b ? bi(q.b) : "") + '<button class="btn sm gold qf-next">' + lab("Lanjut", "التالي") + Icon("arrowRight") + "</button>";
          fb.querySelector(".qf-next").onclick = () => { i++; show(); };
        }
      });
    }
    function finish() {
      const r = { benar, total: qs.length, salah, durasi: (Date.now() - t0) / 1000 };
      if (opt.onDone) Object.assign(r, opt.onDone(r) || {});
      r.ulang = () => pilah(root, data, opt);
      result(root, r);
    }
    show();
  }

  /* ---------- Kartu istilah (flashcard + muraja'ah) ---------- */
  function kartu(root, cards, opt) {
    opt = opt || {};
    const qs = opt.acak === false ? cards.slice() : shuffle(cards);
    let i = 0, ingat = 0;
    const g = shell(root, { cls: "g-kartu" });
    function show() {
      if (i >= qs.length) {
        root.innerHTML = '<div class="g-result"><div class="gr-stars"><span class="on">' + Icon("cards") + '</span></div><div class="gr-msg">' + lab("Muraja'ah selesai!", "انتهت المراجعة") + '</div><div class="gr-meta">' + lab(n(ingat) + " dari " + n(qs.length) + " kartu sudah diingat", n(ingat) + " من " + n(qs.length)) + '</div><div class="gr-act"><button class="btn" data-act="ulang">' + Icon("refresh") + lab("Ulangi", "أعد") + "</button></div></div>";
        Audio2.sfx("done");
        root.querySelector('[data-act="ulang"]').onclick = () => kartu(root, cards, opt);
        if (opt.onDone) opt.onDone({ ingat, total: qs.length });
        return;
      }
      const c = qs[i]; g.prog(i, qs.length); g.score(ingat);
      const box = Store.srs(c.key).box;
      g.stage.innerHTML = '<div class="fc-wrap"><button class="fc" type="button"><span class="fc-in"><span class="fc-f"><span class="fc-box">' + (box ? lab("Kotak " + box, "الصندوق " + arNum(box)) : lab("Baru", "جديدة")) + '</span><span class="fc-ar" lang="ar" dir="rtl">' + esc(c.ar) + "</span>" + (c.latin ? '<span class="fc-lt">' + esc(c.latin) + "</span>" : "") + '<span class="fc-hint">' + Icon("refresh") + lab("ketuk untuk membalik", "انقر للقلب") + "</span></span>" +
        '<span class="fc-b"><span class="fc-id">' + one(c.id, "id") + "</span>" + (c.def ? bi(c.def) : "") + (c.src ? '<span class="q-src">' + esc(c.src) + "</span>" : "") + "</span></span></button></div>" +
        '<div class="fc-rate" hidden><button class="btn r0" data-v="0">' + Icon("refresh") + lab("Lupa", "نسيت") + '</button><button class="btn r1" data-v="1">' + Icon("hourglass") + lab("Ragu", "متردد") + '</button><button class="btn r2" data-v="2">' + Icon("check") + lab("Ingat", "تذكرت") + "</button></div>";
      const fc = g.stage.querySelector(".fc"), rate = g.stage.querySelector(".fc-rate");
      fc.onclick = () => { fc.classList.toggle("on"); rate.hidden = false; Audio2.sfx("flip"); };
      rate.querySelectorAll(".btn").forEach(b => b.onclick = () => { const v = +b.dataset.v; Store.nilaiKartu(c.key, v); if (v === 2) { ingat++; Audio2.sfx("good"); } else Audio2.sfx("tap"); i++; show(); });
    }
    root._key = e => { const fc = root.querySelector(".fc"); if (!fc) return; if (e.key === " ") { e.preventDefault(); fc.click(); } const v = { "1": 0, "2": 1, "3": 2 }[e.key]; if (v != null && !root.querySelector(".fc-rate").hidden) root.querySelector('.fc-rate [data-v="' + v + '"]').click(); };
    show();
  }

  /* ---------- Soal wajib (أسئلة الواجب) ---------- */
  function tugas(root, items, keyBase, meta) {
    const save = U.debounce((k, v) => Store.simpanTugas(k, { teks: v }), 400);
    root.innerHTML = '<div class="tugas">' + '<div class="tg-intro">' + Icon("pen") + "<div>" + lab("Soal wajib dari modul (<b>أسئلة الواجب</b>). Tulis jawabanmu sendiri dulu, baru buka kunci jawaban sebagai pembanding, lalu nilai pemahamanmu.", "هذه أسئلة الواجب من المحاضرة: اكتب إجابتك أولًا، ثم قارنها بالإجابة النموذجية، ثم قيّم فهمك.") + "</div></div>" +
      items.map((it, k) => {
        const key = keyBase + "/" + k, st = Store.tugas(key);
        return '<div class="tg-item ' + (st.nilai === 2 ? "paham" : "") + '" data-k="' + k + '"><div class="tg-q"><span class="tg-n">' + n(k + 1) + "</span><div>" + bi(it.t) + "</div></div>" +
          '<textarea class="tg-in" rows="4" placeholder="' + (U.lang === "ar" ? "اكتب إجابتك هنا…" : "Tulis jawabanmu di sini… (tersimpan otomatis)") + '" ' + (U.lang === "ar" ? 'dir="rtl"' : "") + ">" + esc(st.teks || "") + "</textarea>" +
          '<div class="tg-act"><button class="btn ghost sm tg-show">' + Icon("key") + lab("Kunci jawaban", "الإجابة النموذجية") + "</button>" +
          '<div class="tg-rate">' + [["Belum paham", "لم أفهم", "r0"], ["Hampir", "تقريبًا", "r1"], ["Paham", "فهمت", "r2"]].map((r, v) => '<button class="pill ' + r[2] + (st.nilai === v ? " on" : "") + '" data-v="' + v + '">' + lab(r[0], r[1]) + "</button>").join("") + "</div></div>" +
          '<div class="tg-ans" hidden>' + bi(it.j) + "</div></div>";
      }).join("") +
      '<div class="tg-foot"><button class="btn tg-copy">' + Icon("chat") + lab("Salin jawaban (format WhatsApp)", "نسخ الإجابات") + '</button><button class="btn ghost tg-print">' + Icon("print") + lab("Cetak / PDF", "طباعة") + "</button></div></div>";
    root.querySelectorAll(".tg-item").forEach(el => {
      const k = +el.dataset.k, key = keyBase + "/" + k;
      el.querySelector(".tg-in").addEventListener("input", e => save(key, e.target.value));
      el.querySelector(".tg-show").onclick = () => { const a = el.querySelector(".tg-ans"); a.hidden = !a.hidden; Audio2.sfx(a.hidden ? "tap" : "open"); };
      el.querySelectorAll(".pill").forEach(p => p.onclick = () => {
        const v = +p.dataset.v; Store.simpanTugas(key, { nilai: v });
        el.querySelectorAll(".pill").forEach(x => x.classList.toggle("on", x === p));
        el.classList.toggle("paham", v === 2); Audio2.sfx(v === 2 ? "good" : "tap");
      });
    });
    root.querySelector(".tg-copy").onclick = () => {
      const pr = Store.s.profil || {};
      let txt = "*" + meta.judul + "*\n" + (pr.nama ? "Nama: " + pr.nama + (pr.nim ? " (" + pr.nim + ")" : "") + "\n" : "") + "\n";
      items.forEach((it, k) => { txt += "*" + (k + 1) + ". " + (it.t.ar || "") + "*\n" + (it.t.id ? "_" + it.t.id + "_\n" : "") + "Jawaban: " + ((Store.tugas(keyBase + "/" + k).teks) || "-") + "\n\n"; });
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => U.toast(Icon("check") + " Jawaban disalin. Tempel di WhatsApp/Telegram.", "ok")).catch(() => { prompt("Salin teks berikut:", txt); });
    };
    root.querySelector(".tg-print").onclick = () => { root.querySelectorAll(".tg-ans").forEach(a => a.hidden = false); window.print(); };
  }

  return { pg, bs, jodoh, urut, isian, pilah, kartu, tugas, bsToPg, result, burst, fmtTime };
})();
