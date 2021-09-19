const cacheName = 'cache-v1';
const resourcesToPrecache = ['/','Menu.html','logo1.jpg','logo1.png'];


self.addEventListener('install' , event =>{
    console.log('install event')
    event.waitUntil(
        caches.open(cachesName)
        .then(cache => {
         return cache.addAll(resourcesToPrecache);
        })
    )
});
self.addEventListener('activate', event => {
        console.log(' activated event');
});
self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:' , event.request.url);
    event.respondWith(caches.match(event.request)
    .then(cashedRespons => {
        return cachedResponse || fetch(event.request);
    }))
});    
