

const fs = require('fs');

function readData(cb) {
    fs.readFile('data.json', 'Utf8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        cb(JSON.parse(data)); 
    });
}

function writeData(data) {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if(err) {
            console.log(err);
            return
        }
        else {
            console.log("written succesfully");
        }
    })
}

module.exports.readData = readData;
module.exports.writeData = writeData;
