#!/usr/bin/env node

const release = require('commander')
const pkg = require('../package.json')
const cmd = require('node-cmd')
const chalk = require('chalk')
const rimraf = require('rimraf')
const fs = require('fs-extra')
const Promise = require('bluebird')

const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
const errors = []

const logError = (err) => err && errors.push(err.message)
const hasErrors = () => errors.length > 0

release
  .version(pkg.version)
  .option('-M, --major', 'Major release X.#.# for breaking changes')
  .option('-m, --minor', 'Minor release #.X.# non-breaking for feature additions')
  .option('-p, --patch', 'Patch release #.#.X for patch fixes/tweaks')
  .parse(process.argv)

let releaseType =
  (release.major && 'major') ||
  (release.minor && 'minor') ||
  (release.patch && 'patch') ||
  undefined

if (!releaseType) return console.log('exiting...')

async function runRelease() {
  // empty any previous distribution
  fs.emptyDir('./dist').catch(logError)

  // copy package.json to dist folder
  !hasErrors() && fs.copy('package.json', './dist/package.json').catch(logError)

  // copy client to dist folder
  !hasErrors() && fs.copy('./src/client', './dist/').catch(logError)

  console.log('has errors', hasErrors())
  if (hasErrors()) {
    console.log(chalk.yellow(`\n${errors.length} errors...`))
    console.log(...errors)
  }

}

runRelease()

