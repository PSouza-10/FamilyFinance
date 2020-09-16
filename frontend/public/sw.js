const CACHE_NAME = 'v-1'

const cacheUrls = [
  '/',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/1.chunk.js',
  '/static/js/0.chunk.js',
  '/favicon.ico',
  '/Roboto-Regular.ttf'
]
const self = this

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened Cache')
      return cache.addAll(cacheUrls)
    })
  )
})

const update = async request => {
  console.log('update fired')
  const response = await fetch(request.url)

  await caches.open(CACHE_NAME).then(cache => {
    cache.put(request, response.clone())
  })

  return response
}

const refresh = async response => {
  const clients = await Promise.resolve(self.clients.matchAll())
  const data = await Promise.resolve(response.json())

  clients.forEach(client => {
    client.postMessage(
      JSON.stringify({
        type: 'Update Transactions',
        body: data
      })
    )
  })

  return data
}
self.addEventListener('fetch', async e => {
  if (e.request.method === 'GET' && e.request.url.includes('/api')) {
    e.respondWith(
      caches.match(e.request).then(stored => {
        return stored || fetch(e.request)
      })
    )
    e.waitUntil(update(e.request).then(refresh))
  } else {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request)
      })
    )
  }
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
