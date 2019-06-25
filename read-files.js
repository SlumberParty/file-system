const fs = require('fs');

fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.error(err);
  }
console.log(data);
});