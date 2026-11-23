/* Minimal service worker: lets the admin install as an app. No caching, so edits always load fresh. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
