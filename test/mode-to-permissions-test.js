var assert = require('assert'),
    m = require('../');

assert.deepEqual(m(0777), {
  dir: false,
  read: { owner: true, group: true, others: true },
  write: { owner: true, group: true, others: true },
  execute: { owner: true, group: true, others: true }
});
assert.equal(m(0777),'-rwxrwxrwx')

assert.deepEqual(m(0071), {
  dir: false,
  read: { owner: false, group: true, others: false },
  write: { owner: false, group: true, others: false },
  execute: { owner: false, group: true, others: true }
});
assert.equal(m(0071),'----rwx--x')

var fs = require('fs');
var mode = fs.statSync('.');
assert.equal(true,m(mode).dir);
assert.equal('d',m(mode).toString().charAt(0));
