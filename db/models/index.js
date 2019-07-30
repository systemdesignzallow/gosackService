const createHouse = require('./createHouse');
const getHouse = require('./getHouse');
const updateHouse = require('./updateHouse');
const deleteHouse = require('./deleteHouse');

const Model = {
    createHouse,
    getHouse,
    updateHouse,
    deleteHouse
}

module.exports = Model;