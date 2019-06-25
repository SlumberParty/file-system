const fs = require('fs');

fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
  if (err) return console.error(err);

  fs.writeFile('hi-copy.txt', data, err => {
    if (err) return console.error(err);

    console.log('Done');
  });
});