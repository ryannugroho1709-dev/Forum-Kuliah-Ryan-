/* =====================================================================
   BACKSOUND & EFEK SUARA (Web Audio API)
   Suara suasana dibangkitkan langsung oleh browser — tanpa file, ringan,
   bebas hak cipta, dan tanpa alat musik. File audio sendiri (mis.
   murattal) bisa ditambahkan lewat SITE.backsoundFiles di data/site.js.
   ===================================================================== */
window.Audio2 = (function () {
  let ctx = null, master = null, sfxBus = null, layer = null, stops = [], fileEl = null;
  let current = null, volume = 0.45, sfxOn = true, token = 0;

  const TRACKS = [
    { id: "hujan", label: "Hujan Teduh", icon: "rain" },
    { id: "pancuran", label: "Pancuran Serambi Masjid", icon: "fountain" },
    { id: "burung", label: "Pagi di Kebun Kurma", icon: "bird" },
    { id: "sungai", label: "Aliran Sungai", icon: "waves" },
    { id: "angin", label: "Angin Gurun", icon: "wind" },
    { id: "malam", label: "Malam Tenang", icon: "moonStar" },
    { id: "ombak", label: "Debur Ombak", icon: "waves" }
  ];
  (window.SITE && window.SITE.backsoundFiles || []).forEach(f => TRACKS.push(f));

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
      sfxBus = ctx.createGain(); sfxBus.gain.value = 0.9; sfxBus.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  }

  const buffers = {};
  function noise(kind) {
    if (buffers[kind]) return buffers[kind];
    const len = ctx.sampleRate * 5, buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        if (kind === "white") d[i] = w * 0.5;
        else if (kind === "pink") {
          b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.969 * b2 + w * 0.153852;
          b3 = 0.8665 * b3 + w * 0.3104856; b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
          d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11; b6 = w * 0.115926;
        } else { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
      }
      for (let k = 0; k < 2000; k++) { const f = k / 2000; d[k] = d[k] * f + d[len - 2000 + k] * (1 - f); }
    }
    return (buffers[kind] = buf);
  }
  function loop(kind) { const s = ctx.createBufferSource(); s.buffer = noise(kind); s.loop = true; s.start(0, Math.random() * 4); stops.push(() => { try { s.stop(); } catch (e) {} }); return s; }
  function filter(type, f, q) { const x = ctx.createBiquadFilter(); x.type = type; x.frequency.value = f; if (q) x.Q.value = q; return x; }
  function gain(v) { const g = ctx.createGain(); g.gain.value = v; return g; }
  function lfo(freq, depth, param) { const o = ctx.createOscillator(); o.frequency.value = freq; const g = gain(depth); o.connect(g); g.connect(param); o.start(); stops.push(() => { try { o.stop(); } catch (e) {} }); }
  function every(ms, fn) { const t = setInterval(fn, ms); stops.push(() => clearInterval(t)); }
  function panTo(out, v) { if (!ctx.createStereoPanner) return out; const p = ctx.createStereoPanner(); p.pan.value = v; p.connect(out); return p; }

  function drop(out, lo, hi, vol) {
    const t = ctx.currentTime + Math.random() * 0.25;
    const s = ctx.createBufferSource(); s.buffer = noise("white");
    const bp = filter("bandpass", lo + Math.random() * (hi - lo), 6), g = gain(0);
    s.connect(bp); bp.connect(g); g.connect(panTo(out, Math.random() * 2 - 1));
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol + Math.random() * vol, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
    s.start(t, Math.random() * 4); s.stop(t + 0.08);
  }
  function chirp(out, f0, n, vol) {
    const base = ctx.currentTime + Math.random() * 0.4, dest = panTo(out, Math.random() * 1.6 - 0.8);
    for (let k = 0; k < n; k++) {
      const t = base + k * (0.06 + Math.random() * 0.05), o = ctx.createOscillator(), g = gain(0);
      const f = f0 + Math.random() * 900;
      o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * (0.75 + Math.random() * 0.6), t + 0.05);
      o.connect(g); g.connect(dest);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.linearRampToValueAtTime(0, t + 0.055);
      o.start(t); o.stop(t + 0.07);
    }
  }

  const BUILD = {
    hujan(out) {
      const a = loop("pink"), hp = filter("highpass", 450), lp = filter("lowpass", 7500), g = gain(0.5);
      a.connect(hp); hp.connect(lp); lp.connect(g); g.connect(out);
      const b = loop("brown"), lp2 = filter("lowpass", 320), g2 = gain(0.3);
      b.connect(lp2); lp2.connect(g2); g2.connect(out);
      every(140, () => { if (Math.random() < 0.75) drop(out, 1800, 5300, 0.08); });
    },
    pancuran(out) {
      const a = loop("white"), bp = filter("bandpass", 2400, 0.6), g = gain(0.16);
      a.connect(bp); bp.connect(g); g.connect(out); lfo(0.4, 0.03, g.gain);
      const b = loop("brown"), lp = filter("lowpass", 900), g2 = gain(0.42);
      b.connect(lp); lp.connect(g2); g2.connect(out); lfo(0.17, 160, lp.frequency);
      every(90, () => { if (Math.random() < 0.6) drop(out, 900, 2600, 0.05); });
      every(2600, () => { if (Math.random() < 0.35) chirp(out, 3600, 3, 0.012); });
    },
    burung(out) {
      const a = loop("pink"), bp = filter("bandpass", 500, 0.6), g = gain(0.12);
      a.connect(bp); bp.connect(g); g.connect(out); lfo(0.07, 0.05, g.gain);
      every(1200, () => { if (Math.random() < 0.7) chirp(out, 2600 + Math.random() * 1800, 2 + Math.floor(Math.random() * 5), 0.02); });
      every(3100, () => { if (Math.random() < 0.5) chirp(out, 1500, 2, 0.016); });
    },
    sungai(out) {
      const a = loop("brown"), lp = filter("lowpass", 700), g = gain(0.75);
      a.connect(lp); lp.connect(g); g.connect(out); lfo(0.11, 260, lp.frequency);
      const b = loop("white"), bp = filter("bandpass", 1700, 0.9), g2 = gain(0.09);
      b.connect(bp); bp.connect(g2); g2.connect(out); lfo(0.33, 0.05, g2.gain); lfo(0.21, 500, bp.frequency);
    },
    angin(out) {
      const a = loop("pink"), bp = filter("bandpass", 650, 0.7), g = gain(0.42);
      a.connect(bp); bp.connect(g); g.connect(out); lfo(0.06, 420, bp.frequency); lfo(0.09, 0.25, g.gain);
      const b = loop("brown"), lp = filter("lowpass", 260), g2 = gain(0.28);
      b.connect(lp); lp.connect(g2); g2.connect(out);
      const c = loop("white"), hp = filter("highpass", 5200), g3 = gain(0.015);
      c.connect(hp); hp.connect(g3); g3.connect(out); lfo(0.05, 0.012, g3.gain);
    },
    malam(out) {
      const a = loop("brown"), lp = filter("lowpass", 380), g = gain(0.22);
      a.connect(lp); lp.connect(g); g.connect(out); lfo(0.05, 0.08, g.gain);
      every(900, () => { if (Math.random() < 0.8) chirp(out, 4200, 3, 0.016); });
    },
    ombak(out) {
      const a = loop("brown"), lp = filter("lowpass", 900), g = gain(0.35);
      a.connect(lp); lp.connect(g); g.connect(out); lfo(0.075, 0.32, g.gain); lfo(0.075, 500, lp.frequency);
      const b = loop("pink"), hp = filter("highpass", 1800), g2 = gain(0.06);
      b.connect(hp); hp.connect(g2); g2.connect(out); lfo(0.075, 0.05, g2.gain);
    }
  };

  function teardown(old, oldStops, oldFile) {
    setTimeout(() => { oldStops.forEach(f => f()); if (old) old.disconnect(); if (oldFile) { oldFile.pause(); oldFile.src = ""; } }, 1300);
  }

  function play(id) {
    const track = TRACKS.find(t => t.id === id) || TRACKS[0];
    if (!ensure()) return false;
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t); master.gain.linearRampToValueAtTime(0, t + 0.6);
    const oldLayer = layer, oldStops = stops, oldFile = fileEl;
    stops = []; fileEl = null;
    const my = ++token;
    setTimeout(() => {
      if (my !== token) return;
      teardown(oldLayer, oldStops, oldFile);
      layer = gain(1); layer.connect(master);
      if (track.file) {
        fileEl = new Audio(track.file); fileEl.loop = true;
        ctx.createMediaElementSource(fileEl).connect(layer); fileEl.play().catch(() => {});
      } else BUILD[track.id](layer);
      const n = ctx.currentTime;
      master.gain.setValueAtTime(0, n); master.gain.linearRampToValueAtTime(volume, n + 2.2);
    }, oldLayer ? 620 : 0);
    current = track.id;
    return true;
  }

  function stop() {
    token++;
    if (!ctx || !current) return;
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t); master.gain.linearRampToValueAtTime(0, t + 1);
    teardown(layer, stops, fileEl);
    layer = null; stops = []; fileEl = null; current = null;
  }

  function setVolume(v) { volume = v; if (ctx && current) { master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setTargetAtTime(v, ctx.currentTime, 0.1); } }

  /* ---------- Efek suara ---------- */
  function tone(f, start, dur, type, vol, glideTo) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || "sine"; o.frequency.setValueAtTime(f, start);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, start + dur);
    o.connect(g); g.connect(sfxBus);
    g.gain.setValueAtTime(0, start); g.gain.linearRampToValueAtTime(vol, start + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.start(start); o.stop(start + dur + 0.05);
  }
  function swish(start, dur, f1, f2, vol) {
    const s = ctx.createBufferSource(); s.buffer = noise("white");
    const bp = filter("bandpass", f1, 1.2), g = gain(0);
    bp.frequency.setValueAtTime(f1, start); bp.frequency.exponentialRampToValueAtTime(f2, start + dur);
    s.connect(bp); bp.connect(g); g.connect(sfxBus);
    g.gain.setValueAtTime(0, start); g.gain.linearRampToValueAtTime(vol, start + dur * 0.3); g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    s.start(start, Math.random() * 3); s.stop(start + dur + 0.05);
  }
  const SFX = {
    tap: t => tone(880, t, 0.08, "sine", 0.05),
    pop: t => tone(520, t, 0.12, "sine", 0.08, 980),
    flip: t => swish(t, 0.28, 900, 3800, 0.09),
    page: t => { swish(t, 0.35, 2600, 600, 0.07); swish(t + 0.12, 0.25, 1800, 500, 0.04); },
    good: t => { tone(659, t, 0.32, "sine", 0.08); tone(988, t + 0.09, 0.45, "sine", 0.07); tone(1319, t + 0.18, 0.5, "sine", 0.035); },
    bad: t => { tone(311, t, 0.28, "triangle", 0.08, 233); tone(233, t + 0.12, 0.35, "triangle", 0.05, 196); },
    combo: t => [784, 988, 1175, 1568].forEach((f, i) => tone(f, t + i * 0.06, 0.3, "sine", 0.05)),
    done: t => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, t + i * 0.1, 0.6, "sine", 0.065)),
    level: t => { [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, t + i * 0.08, 0.7, "sine", 0.06)); swish(t + 0.35, 0.8, 2000, 7000, 0.05); },
    badge: t => { [1047, 1319, 1568, 2093].forEach((f, i) => tone(f, t + i * 0.07, 0.8, "sine", 0.045)); tone(523, t, 1, "sine", 0.04); },
    tick: t => tone(1400, t, 0.04, "square", 0.02),
    open: t => { swish(t, 0.4, 400, 2400, 0.06); tone(660, t + 0.15, 0.3, "sine", 0.03); },
    whoosh: t => swish(t, 0.45, 300, 4000, 0.08)
  };
  function sfx(kind) {
    if (!sfxOn || !ensure()) return;
    (SFX[kind] || SFX.tap)(ctx.currentTime + 0.005);
  }
  function vibrate(p) { try { if (sfxOn && navigator.vibrate) navigator.vibrate(p); } catch (e) {} }

  return {
    tracks: TRACKS, play, stop, setVolume, sfx, vibrate,
    get current() { return current; }, get volume() { return volume; },
    get sfxOn() { return sfxOn; }, set sfxOn(v) { sfxOn = v; }
  };
})();
