let generateQueryForUpdate = houseData => {
  let top = `UPDATE homes WHERE `;
  let queryParameters = [];
  let bottom = ` WHERE houseID=?`;
  for (let key in houseData) {
    queryParameters.push(`${key} = ${houseData[key]}`);
  }
  return queryParameters.join(', ');
};

let generateQueryForCreate = houseData => {
  let top = `INSERT INTO homes ( `;
  let keys = [];
  let values = [];
  let bottom = ` WHERE houseID=?`;
  for (let key in houseData) {
    keys.push(`${key}`);
    values.push(`${houseData[key]}`);
  }
  return `${top} ${keys.join(', ')}) VALUES ( ${values.join(', ')}) ${bottom}`;
};

module.exports = generateQuery;
