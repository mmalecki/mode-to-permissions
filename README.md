# mode-to-permissions
Convert file mode numeral to a convenient object describing file permissions.

## Usage
```js
var modeToPermissions = require('mode-to-permissions');
console.dir(modeToPermissiones(0777));
```

Outputs:
```
{ read: { owner: true, group: true, others: true },
  write: { owner: true, group: true, others: true },
  execute: { owner: true, group: true, others: true } }
```
