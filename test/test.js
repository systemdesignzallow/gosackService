const {expect} = require('chai');
const {House_test, House} = require('../db/index');
const fs = require('fs');
const path = require('path');
const app = require('../server/index');
const createSampleFile = require('../sample-data/generate');
const request = require('supertest');
const seed = require('../db/seed');
seed(House);
House.find({_id: 98}, (err, docs) => console.log(docs))
beforeEach((done) => {
  seed(House_test, done);
});
afterEach((done) => {
  House_test.deleteMany({}, () => done());
});

//don't need to test this every time, should be consistently working
describe('Sample Data', function() {
  describe('Generate Sample Data Function', function() {
    it('should create a json file with sample data', function() {
      fs.unlink(path.join(__dirname, '../sample-data/sample-data.json'), (err, data) => {
        createSampleFile((err, success) => {
          fs.readFile(path.join(__dirname, '../sample-data/sample-data.json'), (err, data) => {
            let sampleData = JSON.parse(data.toString());
            expect(sampleData.length > 0).to.be.true;
          });
        });
      });
    });
  });
});

describe('Database', function() {
  describe('House Model', function() {
    it('should be filled with sample data', function() {
      House_test.find({}, (err, docs) => {
        expect(docs.length !== 0).to.be.true;
      });
    });
  });
});
// not too sure on this, do I need a fake server with the same routes so I'm not hitting the actual db?
describe('Server', function() {
  describe('API', function() {
    it('should respond with a house when a get request is sent to /houses/<houseid>', function() {
      request(app)
        .get('/houses/2')
        .end((err, res) => {
          expect(res.body._id).to.equal(2);
        })
    });
  });
});
