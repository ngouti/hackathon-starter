#!/usr/bin/env node

const { DEV_BUILD_PATH, CACHE_PATH } = require('./paths')
const fs = require('fs-extra')
const { clientConfig, serverConfig } = require('./fuse')
const { src, task, exec, context } = require('fuse-box/sparky')
const { FuseBox } = require('fuse-box')

task('default', async context => {
  console.log('[fusebox] clearing cache:', CACHE_PATH)
  await fs.remove(CACHE_PATH)

  await src(`./${DEV_BUILD_PATH}`)
      .clean(`${DEV_BUILD_PATH}/`)
      .exec()

  const client = FuseBox.init(clientConfig(false))
  const server = FuseBox.init(serverConfig(false))
  client.dev({ port: 4445, httpServer: false })

  client
    .bundle('app')
    .instructions(' > client/index.jsx')
    .watch('src/client/**')
    .hmr()

  server
    .bundle('server')
    .instructions(` > [server/index.js]`)
    .watch('src/server/**')
    .completed(proc => proc.start())

  await client.run()
  await server.run()
})
