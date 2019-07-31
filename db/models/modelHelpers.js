let helpers = {
  generateQueryForUpdate: houseData => {
    let top = `UPDATE homes SET`;
    let queryParameters = [];
    let bottom = `WHERE homeID=?`;
    for (let key in houseData) {
      let value = typeof houseData[key] === 'string' ? `'${houseData[key]}'` : houseData[key];
      queryParameters.push(`${key} = ${value}`);
    }
    return `${top} ${queryParameters.join(', ')} ${bottom}`;
  },

  generateQueryForCreate: houseData => {
    let top = `INSERT INTO homes (`;
    let keys = [];
    let values = [];
    for (let key in houseData) {
      keys.push(`${key}`);
      let value = typeof houseData[key] === 'string' ? `"${houseData[key]}"` : houseData[key];
      values.push(value);
    }
    return `${top} ${keys.join(', ')}) VALUES ( ${values.join(', ')})`;
  }
};

module.exports = helpers;
