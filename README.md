```javascript
var increment = require('reviewers-edition-increment')
var assert = require('assert')

assert.equal(increment('1e', 'edition'), '2e')
assert.equal(increment('1e', 'update'), '1e1u')
assert.equal(increment('1e', 'correction'), '1e1c')
assert.equal(increment('1e', 'draft'), '1e1d')

assert.throws(function () {
  increment('invalid', 'edition')
}, /invalid reviewers edition argument/)

assert.throws(function () {
  increment('1e', 'version')
}, /invalid component argument/)
```
