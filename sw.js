const CACHE_NAME = 'nut-allergy-card-v1';
const CACHE_PREFIX = 'nut-allergy-card-';
const ROOT = new URL(self.registration.scope);
const HOME = new URL('index.html', ROOT).href;
const ASSETS = [
  'index.html',
  'site.webmanifest',
  'favicon.svg',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'qrcode.min.js',
].map(path => new URL(path, ROOT).href);
const ASSET_PATHS = new Set(ASSETS.map(url => new URL(url).pathname));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(ASSETS);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

async function networkFirst(request, cacheKey) {
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response.ok) {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(cacheKey, response.clone());
      } catch (error) {
        console.warn('Could not refresh the offline copy', error);
      }
    }
    return response;
  } catch (error) {
    return (await caches.match(cacheKey)) || Response.error();
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== ROOT.origin) return;

  if (request.mode === 'navigate' &&
      (url.pathname === ROOT.pathname || url.pathname === new URL(HOME).pathname)) {
    event.respondWith(networkFirst(request, HOME));
    return;
  }

  if (ASSET_PATHS.has(url.pathname)) {
    event.respondWith(networkFirst(request, new URL(url.pathname, ROOT.origin).href));
  }
});
