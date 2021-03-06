const { testHouse, updateHouse, makeTableQuery } = require('../testHelpers');
const House = require('../../../db/index');
const axios = require('axios');
const { servicePort } = require('../../../config');
const regeneratorRuntime = require('regenerator-runtime');

// setup database for records
let setupDatabase = async () => {
  try {
    let conn = await House.getConnection();
    let sql = 'DROP DATABASE IF EXISTS testService';
    await conn.query(sql);
    sql = 'CREATE DATABASE testService';
    await conn.query(sql);
    sql = 'USE testService';
    await conn.query(sql);
    sql = makeTableQuery;
    await conn.query(sql);
  } catch (e) {
    console.error(e);
    conn.end();
  }
};

let postHouse = async () => {
  try {
    await axios.post(`http://localhost:${servicePort}/houses`, testHouse);
  } catch (e) {
    console.error(e);
  }
};

let getHouse = async () => {
  try {
    return await axios.get(`http://localhost:${servicePort}/houses/1`);
  } catch (e) {
    console.error(e);
  }
};

let putHouse = async () => {
  try {
    return await axios.put(`http://localhost:${servicePort}/houses/1`, updateHouse);
  } catch (e) {
    console.error(e);
  }
};

let deleteHouse = async () => {
  try {
    return await axios.delete(`http://localhost:${servicePort}/houses/1`);
  } catch (e) {
    console.error(e);
  }
};

// POST & GET a record
it('posted record matches returned record with incremented homeId', () => {
  return setupDatabase()
    .then(() => {
      postHouse();
    })
    .then(() => {
      return getHouse();
    })
    .then(house => {
      expect(house.data[0]).toEqual(testHouse);
    })
    .catch(error => {
      console.error(error);
    });
});

// PUT (update) a record
it('put record matches returned record with changes', async () => {
  try {
    await setupDatabase();
    await postHouse();
    await putHouse();
    let updatedHouse = await getHouse();
    expect(updatedHouse.data[0]).toEqual(updateHouse);
  } catch (e) {
    console.error(e);
    expect(true).toEqual(false);
  }
});

// DELETE a record
it('delete record', async () => {
  try {
    await setupDatabase();
    await postHouse();
    await deleteHouse();
    let deletedHouse = await getHouse();
    expect(deletedHouse.data).toEqual([]);
  } catch (e) {
    console.error(e);
    expect(true).toEqual(false);
  }
});
