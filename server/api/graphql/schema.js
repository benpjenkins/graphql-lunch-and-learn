const { buildSchema } = require("graphql");

const schema = buildSchema(`
type User {
  id: ID
  firstName: String
  lastName: String,
  posts: [Post]
}

type Post {
  id: ID
  title: String
  body: String
  userId: Int
}

type Query {
  posts: [Post]
  post(id: ID): Post
  users: [User]
  user(id: ID): User
}
`);

module.exports = schema;
