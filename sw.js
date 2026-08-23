const CACHE='farm-finance-v6';
const BASE=new URL('./',self.location.href);
const APP_SHELL=[new URL('./',BASE).href,new URL('./manifest.webmanifest',BASE).href,new URL('./icons/icon-192.png',BASE).href,new URL('./icons/icon-512.png',BASE).href];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(u.origin!==location.origin || u.pathname.includes('/api/')) return;
 if(e.request.method!=='GET') return;
 e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(c=>c||caches.match(new URL('./',BASE).href))));
});
