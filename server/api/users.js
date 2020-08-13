const router = require("express").Router();
const { users } = require("./mockData");

/*
These examples are missing some things such as error handling for simplicities sake as that isn't the focus of this demo.  If you are curious about Express I would be happy to provide a more thorough example for you.
*/
// GET /api/users
router.get("/", (req, res) => {
  res.json(users);
});

// GET /api/users/:id
router.get("/:id", (req, res) => {
  res.json(users.find((user) => parseInt(req.params.id) === user.id));
});

module.exports = router;
