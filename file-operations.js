const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello node', (err) => {
    if (err) throw err;
    console.log('welocom.txt created');
});


fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
     console.log(data);

});