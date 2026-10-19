/* Service worker: membuat website bisa dibuka tanpa internet setelah kunjungan pertama.
   Strategi: file aplikasi & materi → ambil dari jaringan dulu (agar selalu terbaru),
   jika gagal pakai salinan tersimpan; font Google → simpanan dulu. */
const CACHE = "forum-kuliah-v2";
const CORE = ["./", "index.html", "manifest.webmanifest", "assets/css/style.css", "assets/js/core.js", "assets/js/icons.js", "assets/js/audio.js", "assets/js/store.js", "assets/js/art.js", "assets/js/render.js", "assets/js/games.js", "assets/js/app.js", "data/site.js", "data/program.js", "assets/img/favicon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then(hit => hit || (req.mode === "navigate" ? caches.match("index.html") : undefined))));
});
