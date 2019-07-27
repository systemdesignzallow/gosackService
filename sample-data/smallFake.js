let faker = require('faker');
let path = require('path');
let fs = require('fs');

// for fs
let sampleData = [];
let writeStream = fs.createWriteStream(path.join(__dirname, 'smallFake.csv'));

const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const csvStringifier = createCsvStringifier({
    path: path.join(__dirname, 'data.csv'),
    header: [
        {id: 'appliances', title: 'APPLIANCES'},
        {id: '_id', title: 'ID'},
    ]
});

let appliances = ['Dishwasher', 'Garbage Disposal', 'Microwave', 'Range / Oven', 'Washing/ Drying Unit', 'Refrigerator'];

let i = 1e3;
write();

function write() {
    i--;

    ok = true;
    do {
        let house = {};
    
        house.appliances = [];
        for(let j = 0; j < Math.floor(Math.random() * appliances.length); j++) {
            house.appliances.push(appliances[Math.floor(Math.random() * appliances.length)]);
        }
        house._id = i;
        sampleData.push(house);
        
        ok = writeStream.write(csvStringifier.stringifyRecords(sampleData), 'utf8');
        sampleData = [];
        i--;
        if(i % 1e4 === 0){
            console.log(i);
        } else if (i % 1e4 === 0) {
            console.clear();
        }
    } while (i > 0 && ok);

    if (i > 0) {
        writeStream.once('drain', write);
    }
}
