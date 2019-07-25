require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zallo:zallo123@cluster0-s3ma8.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

const houseSchema = mongoose.Schema({
  _id: Number,
  address: String,
  price: Number,
  beds: Number,
  baths: Number,
  floorSize: Number,
  description: String,
  type: String,
  year: Number,
  heating: String,
  cooling: String,
  parking: Number,
  lotSize: Number,
  daysListed: Number,
  saves: Number,
  appliances: Array,
  interiorFeatures: Array,
  construction: String,
  roof: String,
  exterior: String,
  flooring: String,
  rooms: Number,
  stories: Number,
  spaces: String,
});

module.exports = {
  House: mongoose.model('House', houseSchema),
  House_test: mongoose.model('House_test', houseSchema),
};
