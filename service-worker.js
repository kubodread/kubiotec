const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    './',
    './images/logokubiotec.png',
    './compostaje.html',
    './tutocomapp.html',
    './tutolistapp.html',
    './csscomposta.css',
    './app.js',
    './scriptuto.js',
    './preload.js',
    './tutoriales.html',
    './tutorial/',
    './images/icon-192x192.png',
    './images/icon-512x512.png',
    'https://composta-control.vercel.app/'
    // No se recomienda cachear la URL del iframe aquí
    // ya que el service worker del iframe se encargará de su propio caché.
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});