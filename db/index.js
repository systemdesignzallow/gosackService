const mariadb = require('mariadb');

// sock : /run/mysqld/mysqld.sock --I found this by stopping the mariaDb service and attempting to run the cli
const homes = mariadb.createPool({socketpath: '/run/mysqld/mysqld.sock', user: 'patrick', password:'ekauq', connectionLimit: 5, database:'gosackService'});

module.exports = {
     House: homes
  };

// const houseSchema = mongoose.Schema({
//   _id: Number,
//   address: String,
//   price: Number,
//   beds: Number,
//   baths: Number,
//   floorSize: Number,
//   description: String,
//   type: String,
//   year: Number,
//   heating: String,
//   cooling: String,
//   parking: Number,
//   lotSize: Number,
//   daysListed: Number,
//   saves: Number,
//   appliances: Array,
//   interiorFeatures: Array,
//   construction: String,
//   roof: String,
//   exterior: String,
//   flooring: String,
//   rooms: Number,
//   stories: Number,
//   spaces: String,
// });
