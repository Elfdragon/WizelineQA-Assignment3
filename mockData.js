const Faker = require("faker");

function generateRandomData(userContext, events, done) {
  const taskName = Faker.random.words();
  userContext.vars.taskName = taskName;
  return done();
}

module.exports = {
  generateRandomData,
};
