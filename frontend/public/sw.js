const CACHE_NAME = 'v-1'

const cacheUrls = [
  'index.html',
  'offline.html',
  '/',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/1.chunk.js',
  '/static/js/0.chunk.js',
  '/favicon.ico',
  'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
]

const self = this

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened Cache')
      return cache.addAll(
        cacheUrls.map(url => {
          return new Request(url, { mode: 'no-cors' })
        })
      )
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return (
        response || fetch(e.request).catch(() => caches.match('offline.html'))
      )
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
