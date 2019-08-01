const fake = require('../../../sample-data/fake');
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const regeneratorRuntime = require('regenerator-runtime');
const recordQuantity = 1e3;

fake.fakeData(path.resolve('./test.csv'), recordQuantity);

let makeCsv = async () => {
  try {
    return csv({
      noheader: true,
      headers: [
        'appliances',
        'interiorFeatures',
        'construction',
        'roof',
        'exterior',
        'flooring',
        'homeId',
        'homeAddress',
        'price',
        'beds',
        'baths',
        'stories',
        'rooms',
        'floorSize',
        'spaces',
        'houseDescription',
        'houseType',
        'yearBuilt',
        'heating',
        'cooling',
        'parking',
        'lotSize',
        'daysListed',
        'saves'
      ],
      delimiter: ';',
      colParser: {
        appliances: 'string',
        interiorFeatures: 'string',
        construction: 'string',
        roof: 'string',
        exterior: 'string',
        flooring: 'string',
        homeId: 'number',
        homeAddress: 'string',
        price: 'number',
        beds: 'number',
        baths: 'number',
        rooms: 'number',
        stories: 'number',
        floorSize: 'number',
        spaces: 'string',
        houseDescription: 'string',
        houseType: 'string',
        yearBuilt: 'number',
        heating: 'string',
        cooling: 'string',
        parking: 'number',
        lotSize: 'number',
        daysListed: 'number',
        saves: 'number'
      },
      checkType: true
    })
      .fromFile(path.resolve('./test.csv'))
      .then(jsonObj => jsonObj);
  } catch (e) {
    console.error(e);
  }
};

it('makes the correct amount of records', async () => {
  try {
    let houses = await makeCsv();
    expect(houses).toHaveLength(recordQuantity);
  } catch (e) {
    console.error(e);
  }
});

it('makes a csv with the correct properties', async () => {
  try {
    let houses = await makeCsv();
    expect(houses[0]).toHaveProperty(
      'appliances',
      'interiorFeatures',
      'construction',
      'roof',
      'exterior',
      'flooring',
      'homeId',
      'homeAddress',
      'price',
      'beds',
      'baths',
      'stories',
      'rooms',
      'floorSize',
      'spaces',
      'houseDescription',
      'houseType',
      'yearBuilt',
      'heating',
      'cooling',
      'parking',
      'lotSize',
      'daysListed',
      'saves'
    );
  } catch (e) {
    console.error(e);
  }
});
