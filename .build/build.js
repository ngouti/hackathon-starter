#!/usr/bin/env node

const { PROD_BUILD_PATH } = require('./paths')
const { clientConfig, serverConfig } = require('./fuse')
const { src, task, exec, context } = require('fuse-box/sparky')
const { FuseBox } = require('fuse-box')

task('default', async context => {
  await src(`./${PROD_BUILD_PATH}`)
      .clean(`${PROD_BUILD_PATH}/`)
      .exec()

  const client = FuseBox.init(clientConfig(true, PROD_BUILD_PATH))
  const server = FuseBox.init(serverConfig(true, PROD_BUILD_PATH))

  client
    .bundle('vendor')
    .instructions('~ client/index.jsx')

  client
    .bundle('app')
    .instructions('!> [client/index.jsx]')

  server
    .bundle('server')
    .instructions(' > [server/index.js]')

  await client.run()
  await server.run()
})
