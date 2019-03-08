#!/usr/bin/env node

const release = require('commander')
const pkg = require('../package.json')
const cmd = require('node-cmd')
const chalk = require('chalk')
const rimraf = require('rimraf')
const fs = require('fs-extra')
const Promise = require('bluebird')
const path = require('path')

const rootFolder = path.join(__dirname, '..')
const clientFolder = path.join(__dirname, '../src/client')
const distFolder = path.join(__dirname, '../dist')
const cmdAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
const distPkg = JSON.parse(JSON.stringify(pkg))
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

// return --help if no release style specified
if (!releaseType) {
  return release.outputHelp()
}

async function runRelease() {
  console.log('releasing to', distFolder)
  // empty any previous distribution
  await fs.emptyDir(distFolder).catch(logError)

  // ensure /dist directory exists
  await fs.ensureDir(distFolder)

  // copy client to dist folder
  !hasErrors() && await fs.copy(clientFolder, distFolder).catch(logError)

  // copy .npmrc to dist folder
  !hasErrors() && await fs.copy(`${rootFolder}/.npmrc`, `${distFolder}/.npmrc`).catch(logError)

  console.log('current dir:', __dirname)
  delete distPkg.devDependencies
  delete distPkg.scripts

  // write modified package.json
  await fs.writeJson(`${distFolder}/package.json`, distPkg, { spaces: 2 })
          .then(() => console.log(`created ${distFolder}/package.json`))
          .catch(console.log)

  // update version and publish
  process.chdir('./dist')
  await cmdAsync(`npm version ${releaseType}`)
  const { version, name } = require(`${distFolder}/package.json`)
  console.log(chalk.green(`publishing ${name} --> v${version}`))

  // publish
  await cmdAsync(`yarn publish --new-version ${version}`).catch(logError)

  if (hasErrors()) {
    console.log(chalk.yellow(`\n${errors.length} errors...`))
    console.log(...errors)
  } else {
    // write new version back to root package.json
    pkg.version = version

    await fs.writeJson(`${rootFolder}/package.json`, pkg, { spaces: 2 })
      .catch(console.log)

    console.log(chalk.green('\nSuccess!'))
  }
}

runRelease()

