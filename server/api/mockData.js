const faker = require("faker");

const createUser = (id) => {
  return {
    id,
    firstName: faker.fake(faker.name.firstName()),
    lastName: faker.fake(faker.name.lastName()),
    email: faker.fake(faker.internet.email()),
  };
};

const createPost = (id) => {
  return {
    id,
    userId: (id % 2) + 1,
    title: faker.fake(faker.lorem.sentence()),
    body: faker.fake(faker.lorem.paragraph()),
  };
};

const users = [];
const posts = [];

const generateMockData = () => {
  for (let i = 1; i < 5; i++) {
    users.push(createUser(i));
    posts.push(createPost(i));
  }
};

module.exports = { generateMockData, users, posts };
