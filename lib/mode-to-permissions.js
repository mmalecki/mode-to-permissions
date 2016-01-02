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

  var result = {
    dir: !!(mode & 0x04000),
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

  return Object.defineProperty(result,'toString',{
    enumerable  : false,
    writable    : false,
    configurable: false,
    value       : function() {
      return (result.dir          ? 'd' : '-')
        + (result.read    .owner  ? 'r' : '-')
        + (result.write   .owner  ? 'w' : '-')
        + (result.execute .owner  ? 'x' : '-')
        + (result.read    .group  ? 'r' : '-')
        + (result.write   .group  ? 'w' : '-')
        + (result.execute .group  ? 'x' : '-')
        + (result.read    .others ? 'r' : '-')
        + (result.write   .others ? 'w' : '-')
        + (result.execute .others ? 'x' : '-')
      }
  });
};
