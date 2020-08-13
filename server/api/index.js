const router = require("express").Router();

router.use("/graphql", require("./graphql"));
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));

// handle any requests that never matched an endpoint
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
