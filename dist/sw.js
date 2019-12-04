importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3499467fed6f9d46ac6d.js",
    "revision": "53350c507a5a9aafeacfb8cf768d00b2"
  },
  {
    "url": "/_nuxt/3805cad7f93d5c6faed6.js",
    "revision": "cb6612ba525df2e9131867b055b69246"
  },
  {
    "url": "/_nuxt/423964c0996c7c32c5b6.js",
    "revision": "e6dd993f8c147e1a0cedd67a443f20e3"
  },
  {
    "url": "/_nuxt/4a7dd6fe67bc771785f1.js",
    "revision": "745c3e3369acb120a6a2dffd87d4619d"
  },
  {
    "url": "/_nuxt/5ce48e2573d16ee34fa1.js",
    "revision": "ddd8c11e81b3e21be6176d29292f71e5"
  },
  {
    "url": "/_nuxt/8473c20c30277062ff9c.js",
    "revision": "d6d8796ed6642a21ee71c962095fbb64"
  },
  {
    "url": "/_nuxt/cdc88f2765a7f9e0478d.js",
    "revision": "5e2e0fa52afee678466de10f1095976a"
  },
  {
    "url": "/_nuxt/d5ed8a5c19202a10b4d4.js",
    "revision": "d7b8916e31619c0ee8422130bc2fc7d2"
  },
  {
    "url": "/_nuxt/e411987ba2326c41cfef.js",
    "revision": "5598012c953600c4f0421eae1b13a326"
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
