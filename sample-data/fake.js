let faker = require('faker');
let path = require('path');
let fs = require('fs');

let cliArgs = process.argv.slice(2);
let outputDataPath = path.resolve(cliArgs[0]);
let recordQuantity = cliArgs[1];

let getDateTime = function(date, recordQuantity) {
  var min = date.getMinutes() || 0;
  min = (min < 10 ? '0' : '') + min;

  var sec = date.getSeconds();
  sec = (sec < 10 ? '0' : '') + sec;

  return min + ' minutes and ' + sec + ' seconds to generate ' + recordQuantity + ' records.';
};

const startTime = new Date();
let fake = function(outputDataPath, recordQuantity) {
  return new Promise(resolve => {
    let sampleData = [];
    // for fs
    let writeStream = fs.createWriteStream(path.resolve(outputDataPath));

    const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
    const csvStringifier = createCsvStringifier({
      path: path.join(__dirname, 'data.csv'),
      header: [
        { id: 'appliances', title: 'APPLIANCES' },
        { id: 'interiorFeatures', title: 'INTERIORFEATURES' },
        { id: 'construction', title: 'CONSTRUCTION' },
        { id: 'roof', title: 'ROOF' },
        { id: 'exterior', title: 'EXTERIOR' },
        { id: 'flooring', title: 'FLOORING' },
        { id: 'homeId', title: 'ID' },
        { id: 'homeAddress', title: 'ADDRESS' },
        { id: 'price', title: 'PRICE' },
        { id: 'beds', title: 'BEDS' },
        { id: 'baths', title: 'BATHS' },
        { id: 'rooms', title: 'ROOMS' },
        { id: 'stories', title: 'STORIES' },
        { id: 'floorSize', title: 'FLOORSIZE' },
        { id: 'spaces', title: 'SPACES' },
        { id: 'houseDescription', title: 'DESCRIPTION' },
        { id: 'houseType', title: 'TYPE' },
        { id: 'yearBuilt', title: 'YEAR' },
        { id: 'heating', title: 'HEATING' },
        { id: 'cooling', title: 'COOLING' },
        { id: 'parking', title: 'PARKING' },
        { id: 'lotSize', title: 'LOTSIZE' },
        { id: 'daysListed', title: 'DAYSLISTED' },
        { id: 'saves', title: 'SAVES' }
      ],
      fieldDelimiter: ';'
    });

    let i = recordQuantity;

    write();

    function write() {
      i--;
      ok = true;
      do {
        let streetAddress = faker.address.streetAddress();
        let streetName = faker.address.streetName();
        let city = faker.address.city();
        let state = faker.address.state();
        let zip = faker.address.zipCode();
        let address = `${streetAddress} ${streetName}\n${city} ${state} ${zip}`;
        let houseTypes = ['Mansion', 'Villa', 'Dormant Volcano', 'Factory', 'Skyscraper'];
        let heatingTypes = ['Nuclear Fission', 'Fusion Reactor', 'Geothermal'];
        let coolingTypes = ['Central', 'Refrigeration', 'Roof', 'Solar'];
        let appliances = [
          'Dishwasher',
          'Garbage Disposal',
          'Microwave',
          'Range / Oven',
          'Washing/ Drying Unit',
          'Refrigerator'
        ];
        let flooring = ['Carpet', 'Laminate', 'Tile', 'Hardwood'];
        let interiorFeatures = [
          'Crime Lab',
          'Batcave',
          'Secret Entrance',
          'Secret Bookcase Exit',
          'Moat',
          'Henchpersons Quarters',
          'Harbor',
          'Armory',
          'Integrated Weapons',
          'Booby-traps',
          'Shark Tank',
          'Helipad',
          'Manufacturing Facility'
        ];
        let construction = ['Modern', 'Spanish', 'Frame - Wood', 'Pueblo'];
        let roofTypes = ['Tile', 'Flat'];
        let exteriorTypes = ['Stucco', 'Brick', 'Stone Veneer', 'Wood'];
        let house = {};

        house.appliances = [];
        for (let j = 0; j < Math.floor(Math.random() * appliances.length); j++) {
          house.appliances.push(appliances[Math.floor(Math.random() * appliances.length)]);
        }

        house.interiorFeatures = [];
        for (let j = 0; j < Math.floor(Math.random() * interiorFeatures.length); j++) {
          house.interiorFeatures.push(
            interiorFeatures[Math.floor(Math.random() * interiorFeatures.length)]
          );
        }

        house.homeAddress = address;
        house.construction = construction[Math.floor(Math.random() * construction.length)];
        house.roof = roofTypes[Math.floor(Math.random() * roofTypes.length)];
        house.exterior = exteriorTypes[Math.floor(Math.random() * exteriorTypes.length)];
        house.flooring = flooring[Math.floor(Math.random() * flooring.length)];
        house.homeId = i;
        house.address = address;
        house.price = Math.floor(Math.random() * 1000000 + 100000);
        house.beds = Math.floor(Math.random() * 6 + 1);
        house.baths = Math.floor(Math.random() * 2 + 1);
        house.rooms = house.beds + house.baths + Math.floor(Math.random() * 3);
        house.stories = Math.floor(Math.random() * 3 + 1);
        house.floorSize = Math.floor(Math.random() * 3750 + 750);
        house.spaces = ['Pool', 'N/A'][Math.floor(Math.random() * 2)];
        house.houseDescription = faker.lorem.paragraph();
        house.houseType = houseTypes[Math.floor(Math.random() * houseTypes.length)];
        house.yearBuilt = Math.floor(Math.random() * 88 + 1930);
        house.heating = heatingTypes[Math.floor(Math.random() * heatingTypes.length)];
        house.cooling = coolingTypes[Math.floor(Math.random() * coolingTypes.length)];
        house.parking = Math.floor(Math.random() * 6 + 1);
        house.lotSize = Math.floor(Math.random() * (10000 - house.floorSize) + house.floorSize);
        house.daysListed = Math.floor(Math.random() * 364 + 1);
        house.saves = Math.floor(Math.random() * 150);

        sampleData.push(house);

        ok = writeStream.write(csvStringifier.stringifyRecords(sampleData), 'utf8');

        sampleData = [];

        i--;

        if (i % 1e5 === 0 || i < 5) {
          console.log(i);
          if (i === 0) {
            resolve('Done');
          }
        }
      } while (i > 0 && ok);

      if (i > 0) {
        writeStream.once('drain', write);
      }
    }
  }).then(resolve => {
    let endTime = new Date();
    let elapsedTime = new Date(endTime - startTime);
    console.log(getDateTime(elapsedTime, recordQuantity));
  });
};

async function run(outputDataPath, recordQuantity) {
  console.log(outputDataPath);
  await fake(outputDataPath, recordQuantity);
}

run(outputDataPath, recordQuantity);

//module.exports = run;
