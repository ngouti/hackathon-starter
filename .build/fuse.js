#!/usr/bin/env node
require('dotenv').config()

const { src, task, exec, context } = require('fuse-box/sparky')
const {
  FuseBox,
  EnvPlugin,
  JSONPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  SassPlugin,
  LESSPlugin,
  CopyPlugin,
  ImageBase64Plugin,
  SVGPlugin,
  WebIndexPlugin,
  QuantumPlugin,
} = require('fuse-box')
const { DEV_BUILD_PATH, PROD_BUILD_PATH, pkg, ROOT_PATH } = require('./paths')

// returns only process.env prefixed with CLIENT_{something}
const clientEnv = () => {
  let keys = Object.keys(process.env).filter(v => v.indexOf('CLIENT_') === 0)

  return keys.reduce((out, key) => {
    out[key] = process.env[key]
    return out
  }, {})
}

// console.log('CLIENT ENV', clientEnv())

const clientConfig = (isProduction, basePath = DEV_BUILD_PATH) => ({
  alias : {
    'hooks': '~/client/hooks',
    'images': '~/client/images',
    'services': '~/client/services',
    'utils': '~/client/utils',
    'lib': '~/client/lib',
    'Common': '~/client/components/Common',
    'Layout': '~/client/components/Layout',
    'Pages': '~/client/pages',
  },
  homeDir: `${ROOT_PATH}/src`,
  output: `${basePath}/client/$name.js`,
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  tsConfig: [{ target: 'es5' }],
  hash: isProduction,
  debug: !isProduction,
  cache: !isProduction,
  sourceMaps: true,
  plugins: [
    EnvPlugin(
      Object.assign(
        {
          NODE_ENV: isProduction ? 'production' : 'development',
        },
        clientEnv(),
      )
    ),
    JSONPlugin(),
    [
      SassPlugin(),
      CSSResourcePlugin({
        dist: `${basePath}/client/i/`,
        resolve: f => `/i/${f}`,
      }),
      CSSPlugin(),
    ],
    [
      LESSPlugin(),
      CSSResourcePlugin({
        dist: `${basePath}/client/i/`,
        resolve: f => `/i/${f}`,
      }),
      CSSPlugin(),
    ],
    [
      CSSResourcePlugin({
        dist: `${basePath}/client/i/`,
        resolve: f => `/i/${f}`,
      }),
      CSSPlugin(),
    ],
    CSSPlugin(),
    CopyPlugin({
      files: ['.jpg', '.png'],
      dest: `${basePath}/client/images/`,
    }),
    ImageBase64Plugin(),
    SVGPlugin(),
    WebIndexPlugin({
      title: `${pkg.title} v${pkg.version}`,
      description: pkg.description,
      template: ROOT_PATH + '/src/client/index.html',
      bundles: ['app', 'vendor'],
    }),
    isProduction && QuantumPlugin({
      manifest : true,
      target: 'browser',
      replaceTypeOf: false,
      uglify: true,
      bakeApiIntoBundle: true,
      treeshake: true,
      css: {
        clean: true,
      },
    })
  ]
})

const serverConfig = (isProduction, basePath = DEV_BUILD_PATH) => ({
  homeDir: `${ROOT_PATH}/src`,
  output: `${basePath}/$name.js`,
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  target : 'server@esnext',
  debug: true,
  sourceMaps: true,
  plugins: [
    !isProduction && EnvPlugin({
      NODE_ENV: 'development',
    }),
    JSONPlugin(),
  ]
})

module.exports = {
  clientConfig,
  serverConfig,
}
