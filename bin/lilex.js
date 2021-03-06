#!/usr/bin/env node

const fs = require('fs')
    , path = require('path')
    , lilex = require('../lib/lilex')
    , wantsHelp = wants('-h', '--help')
    , wantsVersion = wants('-v', '--version')

if (wantsHelp) {
  console.log(usage())
  return
}

if (wantsVersion) {
  console.log(require('../package.json').version)
  return
}

const dataFile = resolveDataFile()
    , data = loadData(dataFile)
    , json = lilex.parse(data)

console.log(JSON.stringify(json, null, 2))

function loadData(apath) {
  try {
    return fs.readFileSync(apath, 'utf8').split('\n')
  } catch (e) {
    bail('unable to load data \n' + e.message)
  }
}

function wants(short, long) {
  const arg = process.argv[2]
  return (arg == short || arg == long)
}

function resolveDataFile() {
  var apath = process.argv[2]
  if (!apath) bail('missing data file')
  return path.resolve(apath)
}

function bail(message) {
  console.error('Fatal Error: ' + message)
  console.error(usage())
  process.exit(1)
}

function usage() {
  return `
Usage

Download and expand the plain text ASCII version of the Life Lexicon. Once
expanded, you will end-up with a directory with the following files:

lex_asc
├── README
├── emacs.txt
├── lexicon-clean.txt
├── lexicon-small.txt
├── lexicon.txt
└── lifelex.el

The file that you need to use is lexicon.txt.

Then run the following command:

lilex [path/to/lexicon.txt] > lexicon.json

For more see:
https://github.com/elgrancalavera/lilex
http://www.argentum.freeserve.co.uk/lex_home.htm
`
}
