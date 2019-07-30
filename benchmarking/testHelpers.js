function getRandomInt(userContext, events, done) {
  userContext.vars.number = Math.floor(Math.random() * Math.floor(1e7));
  return done();
}

module.exports = { getRandomInt };
