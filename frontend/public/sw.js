const CACHE_NAME = 'v-1'

const cacheUrls = ['index.html', 'offline.html']

const self = this

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened Cache')
      return cache.addAll(cacheUrls)
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match('offline.html'))
    })
  )
})

self.addEventListener('activate', e => {
  const whitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys().then(cacheNames => {
      Promise.all(
        cacheNames.map(name => {
          if (!whitelist.includes(name)) {
            return caches.delete(name)
          }
        })
      )
    })
  )
})
