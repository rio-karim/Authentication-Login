const express = require('express')
const consola = require('consola')
const app = express()
const bodyParser = require('body-parser')
// Import and Set Nuxt.js options
const nuxtConfig = require('../nuxt.config.js')
const {
  Nuxt,
  Builder
} = require('nuxt')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
nuxtConfig.dev = !(process.env.NODE_ENV === 'production')

// Init Server
async function listen() {
  // Init Nuxt.js
  const nuxt = new Nuxt(nuxtConfig)

  const {
    host
  } = nuxt.options.server
  const port = 7070
  // Build only in dev mode
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
  // Listen the server

}
listen()
