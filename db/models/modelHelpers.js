let helpers = {
  generateQueryForUpdate: houseData => {
    let top = `UPDATE homes SET`;
    let queryParameters = [];
    let signs = [];
    let bottom = `WHERE homeId=?`;
    for (let [key, value] of Object.entries(houseData)) {
      signs.push(`${key}=?`);
      queryParameters.push(value);
    }
    return [`${top} ${signs.join(', ')} ${bottom}`, queryParameters];
  },

  generateQueryForCreate: houseData => {
    let top = `INSERT INTO homes (`;
    let keys = [];
    let values = [];
    let signs = [];
    for (let [key, value] of Object.entries(houseData)) {
      keys.push(`${key}`);
      values.push(value);
      signs.push('?');
    }
    return [`${top} ${keys.join(', ')}) VALUES ( ${signs.join(', ')})`, values];
  }
};

module.exports = helpers;
