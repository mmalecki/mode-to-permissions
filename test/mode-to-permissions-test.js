var assert = require('assert'),
    m = require('../');

assert.deepEqual(m(0777), {
  read: { owner: true, group: true, others: true },
  write: { owner: true, group: true, others: true },
  execute: { owner: true, group: true, others: true }
});

assert.deepEqual(m(0071), {
  read: { owner: false, group: true, others: false },
  write: { owner: false, group: true, others: false },
  execute: { owner: false, group: true, others: true }
});
