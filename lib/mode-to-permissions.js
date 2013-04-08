module.exports = function (mode) {
  if (typeof mode === 'object') {
    //
    // Accept `fs.Stats`.
    //
    mode = mode.mode;
  }

  var owner = mode >> 6,
      group = (mode << 3) >> 6,
      others = (mode << 6) >> 6;

  return {
    read: {
      owner: !!(owner & 4),
      group: !!(group & 4),
      others: !!(others & 4)
    },
    write: {
      owner: !!(owner & 2),
      group: !!(group & 2),
      others: !!(others & 2)
    },
    execute: {
      owner: !!(owner & 1),
      group: !!(group & 1),
      others: !!(others & 1)
    }
  };
};
