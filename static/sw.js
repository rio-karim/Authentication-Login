importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/153b559ae935100199e5.js",
    "revision": "f9a4c21f26f0c966b4f4d957e0195e86"
  },
  {
    "url": "/_nuxt/23b1fb08ff8fafcd1c9a.js",
    "revision": "1a4cf709088b41310c1570ddde8c41cf"
  },
  {
    "url": "/_nuxt/2b5142369dce7a459517.js",
    "revision": "56eb20bb1c7d4879da1901099cd647e5"
  },
  {
    "url": "/_nuxt/382b4764046ef038d70c.js",
    "revision": "d35f4a7965782c3392fe3e93e020bd86"
  },
  {
    "url": "/_nuxt/8bc616727d0dc47d92ab.js",
    "revision": "117d22492bcddd3dac03e6793ad814c0"
  },
  {
    "url": "/_nuxt/a24dcaf84a9cc7808e98.js",
    "revision": "d548e1a2a2e24fcc67d37af6bf6682f5"
  },
  {
    "url": "/_nuxt/d585883749e8d6de51a1.js",
    "revision": "3f16a01ccb0c6aee322ec0ee748b9afc"
  },
  {
    "url": "/_nuxt/d6ccf415a815da0c18aa.js",
    "revision": "344afb5c612dad98fd457d1233cee65c"
  },
  {
    "url": "/_nuxt/d8a98be97f5f1cbccede.js",
    "revision": "62ceaf721a4927f71b0861e0fc667fb7"
  }
], {
  "cacheId": "ops-ui",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
