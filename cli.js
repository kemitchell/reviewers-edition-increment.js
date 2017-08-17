#!/usr/bin/env node
if (process.argv.length !== 4) {
  console.error('usage: <edition> (edition | update | correction | draft)')
  process.exit(1)
} else {
  try {
    console.log(require('./')(process.argv[2], process.argv[3]))
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}
