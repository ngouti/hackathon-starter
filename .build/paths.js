const fs = require('fs')
const ROOT_PATH = require('app-root-path').toString()
const pkg = JSON.parse(fs.readFileSync(ROOT_PATH + '/package.json',  'utf8')) // read package.json
const DEV_BUILD_PATH = ROOT_PATH +'/.dist-dev'
const PROD_BUILD_PATH = ROOT_PATH + '/dist'
const CACHE_PATH = ROOT_PATH + '/.fusebox'

const out = module.exports = {
  DEV_BUILD_PATH,
  PROD_BUILD_PATH,
  ROOT_PATH,
  CACHE_PATH,
  pkg,
}
