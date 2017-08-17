var parse = require('reviewers-edition-parse')
var stringify = require('reviewers-edition-stringify')

module.exports = function increment (reved, component) {
  var parsed = parse(reved)
  if (parsed === false) {
    throw new Error('invalid reviewers edition argument')
  }

  if (
    component !== 'edition' &&
    component !== 'update' &&
    component !== 'correction' &&
    component !== 'draft'
  ) {
    throw new Error('invalid component argument')
  }

  if (!parsed.hasOwnProperty(component)) {
    parsed[component] = 1
  } else {
    parsed[component] = parsed[component] + 1
  }
  return stringify(parsed)
}
