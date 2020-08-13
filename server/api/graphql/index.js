const { graphqlHTTP } = require("express-graphql");
const router = require("express").Router();

const schema = require("./schema");
const resolvers = require("./resolvers");

router.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

module.exports = router;
