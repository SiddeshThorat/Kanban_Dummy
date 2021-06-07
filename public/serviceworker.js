const cacheName = 'version1';

const urlsToCache = ['index.html','fallback.html'];

const self = this;
//Install Service worker
self.addEventListener('install',(event) => {
  event.waitUntil(
      caches.open(cacheName)
      .then(cache => {
          return cache.addAll(urlsToCache)
      })
  )
})

//Listening for request
self.addEventListener('fetch',(event) => {
    event.respondWith(
      caches.match(event.request)
      .then(() => {
          return fetch(event.request)
          .catch(() => caches.match('fallback.html'))
      })
    )
})

//Activate SW
self.addEventListener('activate',(event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(cacheName)
  event.waitUntil(
      caches.keys()
      .then(cacheNames => Promise.all(
          cacheNames.map( cacheName =>
            {
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            }
          )
      ))
  )
})