const fs = require('fs');
const faker = require('faker');

const createSampleFile = (callback) => {
  let addresses = `9343 Orange Road 
  Lake Zurich, IL 60047
  8103 Big Rock Cove St. 
  Grosse Pointe, MI 48236`
  // 20 E. Arrowhead Street 
  // Coatesville, PA 19320
  // 595 North Strawberry St. 
  // Clover, SC 29710
  // 465 Liberty Lane 
  // Mechanicsburg, PA 17050
  // 551 Birchwood Rd. 
  // Monroe Township, NJ 08831
  // 12 West Roehampton Street 
  // Prior Lake, MN 55372
  // 558 Belmont Rd. 
  // Monroe, NY 10950
  // 7298 College Ave. 
  // Nashua, NH 03060
  // 9 Trusel St. 
  // Allentown, PA 18102
  // 97 Poplar St. 
  // La Porte, IN 46350
  // 32 Lake Ave. 
  // Providence, RI 02904
  // 322 Jennings Street 
  // Sun Prairie, WI 53590
  // 430C Wayne Dr. 
  // Westmont, IL 60559
  // 7213 N. St Paul Rd. 
  // Madison Heights, MI 48071
  // 828 Indian Spring Court 
  // Decatur, GA 30030
  // 728 South Wrangler Dr. 
  // Pelham, AL 35124
  // 698 N. Mill Pond Dr. 
  // Lynchburg, VA 24502
  // 543 Rock Creek Avenue 
  // Raeford, NC 28376
  // 287 Piper Drive 
  // Chelsea, MA 02150
  // 11 South Middle River Drive 
  // Phoenix, AZ 85021
  // 741 Spruce Street 
  // East Meadow, NY 11554
  // 7622 West Dogwood Dr. 
  // Augusta, GA 30906
  // 396 South Dogwood St. 
  // Milford, MA 01757
  // 735 Temple Dr. 
  // Hinesville, GA 31313
  // 53 E. Shub Farm Drive 
  // Ladson, SC 29456
  // 9729 Leeton Ridge Ave. 
  // Danville, VA 24540
  // 88 Rose St. 
  // North Tonawanda, NY 14120
  // 478 Mayflower Street 
  // Roslindale, MA 02131
  // 7705 White Dr. 
  // Oklahoma City, OK 73112
  // 925 Cedar Swamp Rd. 
  // Harvey, IL 60426
  // 36 Lantern Court 
  // Ashburn, VA 20147
  // 8629 Wrangler Dr. 
  // Rolling Meadows, IL 60008
  // 500 Goldfield St. 
  // Lynnwood, WA 98037
  // 712 Mayfield Dr. 
  // Piedmont, SC 29673
  // 21 Squaw Creek Drive 
  // Valrico, FL 33594
  // 56 Main Court 
  // Calumet City, IL 60409
  // 8839 Arch St. 
  // Saint Augustine, FL 32084
  // 163 Talbot Street 
  // Mount Holly, NJ 08060
  // 3 Jackson Dr. 
  // Summerville, SC 29483
  // 710 River Street 
  // Bettendorf, IA 52722
  // 254 Courtland Street 
  // Wantagh, NY 11793
  // Reading, MA 01867
  // 132 Gulf Road 
  // Summerfield, FL 34491
  // 78 Myers Road 
  // Navarre, FL 32566
  // 64 Belmont St. 
  // Dearborn, MI 48124
  // 51 Clinton Street 
  // Carpentersville, IL 60110
  // 149 1st Street 
  // Oakland, CA 94603
  // 432 Windfall Court 
  // Hobart, IN 46342
  // 275 Olive Dr. 
  // Forney, TX 75126
  // 46 Oakwood Dr. 
  // Glen Burnie, MD 21060
  // 329 Pendergast Street 
  // Pickerington, OH 43147
  // 475 Taylor Lane 
  // Pleasanton, CA 94566
  // 453 Primrose Ave. 
  // Glen Allen, VA 23059
  // 51 S. Tarkiln Hill Circle 
  // Findlay, OH 45840
  // 371 Meadow Ave. 
  // Longview, TX 75604
  // 131 Redwood St. 
  // Southaven, MS 38671
  // 9 E. Boston Ave. 
  // Canonsburg, PA 15317
  // 9013 Tanglewood Road 
  // Mocksville, NC 27028
  // 12 Birch Hill Dr. 
  // Hopkins, MN 55343
  // 45 Penn Ave. 
  // Deltona, FL 32725
  // 582 Greenrose Drive 
  // Des Moines, IA 50310
  // 992 Beaver Ridge St. 
  // Peachtree City, GA 30269
  // 332 Orchard Ave. 
  // Mishawaka, IN 46544
  // 3 Old Evergreen Street 
  // Thibodaux, LA 70301
  // 479 Elmwood Court 
  // East Northport, NY 11731
  // 139 Rockwell Rd. 
  // Casselberry, FL 32707
  // 67 S. Walt Whitman Ave. 
  // Marcus Hook, PA 19061
  // 82 Fairview Ave. 
  // Morrisville, PA 19067
  // 106 Brewery Drive 
  // Ballston Spa, NY 12020
  // 125 Hillcrest Court 
  // Bear, DE 19701
  // 96 E. Yukon Road 
  // West Bend, WI 53095
  // 176 Jockey Hollow Drive 
  // Suwanee, GA 30024
  // 32 Wilson Ave. 
  // San Angelo, TX 76901
  // 250 New Lane 
  // Bedford, OH 44146
  // 48 Bridge Drive 
  // Kennesaw, GA 30144
  // 77 Clay St. 
  // Wisconsin Rapids, WI 54494
  // 260 North Marconi Circle 
  // West Bloomfield, MI 48322
  // 710 W. Lancaster Rd. 
  // Madison, AL 35758
  // 950 York Lane 
  // Syosset, NY 11791
  // 328 Wall Street 
  // Buffalo Grove, IL 60089
  // 9440 Thomas St. 
  // Hammonton, NJ 08037
  // 7 Halifax Court 
  // Bridgewater, NJ 08807
  // 497 Kingston Street 
  // Bethlehem, PA 18015
  // 980 Saxton Drive 
  // Westlake, OH 44145
  // 75 East Essex Street 
  // Clementon, NJ 08021
  // 102 Sunbeam Lane 
  // Grovetown, GA 30813
  // 782 Green Hill Lane 
  // Eastpointe, MI 48021
  // 5 NE. New Saddle Street 
  // El Dorado, AR 71730
  // 8981 North Bowman St. 
  // Mount Pleasant, SC 29464
  // 9 Halifax Dr. 
  // Santa Monica, CA 90403
  // 8575 Hanover Lane 
  // Owatonna, MN 55060
  // 725 Stillwater St. 
  // Middle Village, NY 11379
  // 2 Locust St. 
  // Windsor Mill, MD 21244
  // 9544 Wild Horse Drive 
  // Severna Park, MD 21146
  // 1 Linden Drive 
  // Woodstock, GA 30188
  // 739 San Juan Drive 
  // Farmingdale, NY 11735
  // 988 Gainsway Street 
  // Rockville, MD 20850
  // 7986 Mulberry Street 
  // Amityville, NY 11701
  // 8517 Arch Court 
  // Windermere, FL 34786`;
  let streetAddress = faker.address.streetAddress();
  let streetName = faker.address.streetName();
  let city = faker.address.city();
  let state = faker.address.state();
  let zip = faker.address.zipCode();
  let address = `${streetAddress} ${streetName} \n ${city} ${state} ${zip}`; 
  // console.log(streetAddress, streetName, city, state, zip);
  // console.log(faker.fake("{{address.streetAddress}}, {{address.streetName}}, {{address.city}}, {{address.state}}, {{a}}"))


  addresses = addresses.split(/[\n\r]/);
  let addArr = [];
  for (let i = 1; i < addresses.length; i++) { 
    if (addresses[i][addresses[i].length - 1] === ' ') {
      console.log(addArr);
      addArr.push(addresses[i] + '\n' + addresses[i + 1]);
    }
  }
  let houseTypes = ['Single Family', 'Townhouse', 'Condo'];
  let heatingTypes = ['Other', 'Central', 'Electric', 'Forced Air', 'Gas'];
  let coolingTypes = ['Central', 'Refrigeration', 'Roof', 'Solar'];
  let appliances = ['Dishwasher', 'Garbage Disposal', 'Microwave', 'Range / Oven', 'Washing/ Drying Unit', 'Refrigerator'];
  let flooring = ['Carpet', 'Laminate', 'Tile', 'Hardwood'];
  let interiorFeatures = ['Fireplace', 'Vaulted Ceiling', 'Ceiling Fan'];
  let construction = ['Modern', 'Spanish', 'Frame - Wood', 'Pueblo']
  let roofTypes = ['Tile', 'Built up'];
  let exteriorTypes = ['Stucco', 'Brick', 'Stone Veneer', 'Wood'];
  let sampleData = [];
  for (let i = 0; i < addArr.length; i++) { 
    let house = {};
    house.appliances = [];
    for(let j = 0; j < Math.floor(Math.random() * appliances.length); j++) {
      house.appliances.push(appliances[Math.floor(Math.random() * appliances.length)]);
    }
    house.interiorFeatures = [];
    for(let j = 0; j < Math.floor(Math.random() * interiorFeatures.length); j++) {
      house.interiorFeatures.push(interiorFeatures[Math.floor(Math.random() * interiorFeatures.length)]);
    }
    house.construction = construction[Math.floor(Math.random() * construction.length)];
    house.roof = roofTypes[Math.floor(Math.random() * roofTypes.length)];
    house.exterior = exteriorTypes[Math.floor(Math.random() * exteriorTypes.length)];
    house.flooring = flooring[Math.floor(Math.random() * flooring.length)];
    house._id = i;
    house.address = addArr[i];
    house.price = Math.floor(Math.random() * 1000000 + 100000);
    house.beds = Math.floor(Math.random() * 6 + 1);
    house.baths = Math.floor(Math.random() * 2 + 1);
    house.rooms = house.beds + house.baths + Math.floor(Math.random() * 3);
    house.stories = Math.floor(Math.random() * 3 + 1);
    house.floorSize = Math.floor(Math.random() * 3750 + 750);
    house.spaces = ['Pool', 'N/A'][Math.floor(Math.random() * 2)];
    house.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae eros massa. Etiam pretium ex purus, vel tempus diam pretium eget. Curabitur hendrerit, tortor sed ultrices finibus, tortor eros condimentum tortor, ac mollis augue arcu sed felis. Vestibulum et aliquet ex. Aenean cursus elementum eleifend. Curabitur sit amet finibus mauris, et porttitor justo. Maecenas imperdiet euismod elit, eu dictum nibh faucibus quis. Pellentesque quis ullamcorper dolor. Morbi vestibulum eget ligula non venenatis.'; 
    house.type = houseTypes[Math.floor(Math.random() * houseTypes.length)];
    house.year = Math.floor(Math.random() * 88 + 1930);
    house.heating = heatingTypes[Math.floor(Math.random() * heatingTypes.length)];
    house.cooling = coolingTypes[Math.floor(Math.random() * coolingTypes.length)];
    house.parking = Math.floor(Math.random() * 6 + 1);
    house.lotSize = Math.floor(Math.random() * (10000 - house.floorSize) + house.floorSize);
    house.daysListed = Math.floor(Math.random() * 364 + 1);
    house.saves = Math.floor(Math.random() * 150);
    sampleData.push(house);
    console.log(i);
  }

  sampleData = JSON.stringify(sampleData);
  fs.writeFile('./sample-data/sample-data.json', sampleData, err => {
    if (err) {
      callback(err);
    } else {
      callback(null, sampleData);
    }
  });
};

module.exports = createSampleFile;