const fs = require('fs');

fs.writeFile('./meetup', 'there is a meetup' err => {
  if (err) return console.error(err);
  console.log('The file has been saved!');
});